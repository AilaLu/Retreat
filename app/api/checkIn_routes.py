from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, CheckIn, CheckInTask
from app.forms.checkIn_form import CheckInForm

checkIn_routes = Blueprint('checkIns', __name__)

# * a route that gets a specific day's checkin 
#* checkin id is the same as year/month/date, it's unique 

#* I want the redux to get a day's checkin, below is user Demo, he is happy for today, the tasks that he has done is tasks 1 and 2, all the other tasks is undone.
# {
#     "id": 1,
#     "userId": 1,
#     "mood": "happy",
#     "year": 2023,
#     "month": 10,
#     "date": 7,
#     checkInTasks: {
#                 "id": 1,
#                 "taskId": 1,
#                 "checkInId": 1,
#                 }, 
#                 {
#                 "id": 2,
#                 "taskId": 2,
#                 "checkInId": 1,
#                 }
# }

    

#R
@checkIn_routes.route("/")
@login_required
def get_checkIns():
    """
    Query for all checkIns and returns them in a list of checkIn dictionaries
    """
    checkIns = [checkIn.to_dict() for checkIn in CheckIn.query.filter(CheckIn.userId ==  current_user.id).all()]
    return {"CheckIns": checkIns}


#C
@checkIn_routes.route("/", methods=["POST"])
@login_required
def create_checkIn():
    """
    Create a new checkIn
    """

    form = CheckInForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():

        newCheckIn = CheckIn(
            userId = current_user.id,
            mood = form.data["mood"],
            year = form.data["year"],
            month = form.data["month"],
            date = form.data["date"],
        )
        db.session.add(newCheckIn)
        db.session.commit()
        return newCheckIn.to_dict()
    else:
          print(form.errors)
          return {"errors":form.errors}





#U
@checkIn_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_checkIn(id):
    """
    Edit a checkIn
    """

    form = CheckInForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        checkIn = CheckIn.query.get(id)

        checkIn.mood = form.data["mood"]
        print("**************backend **************", checkIn.mood)
        db.session.commit()
        return checkIn.to_dict()
    else:
          print(form.errors)
          return {"errors":form.errors}
    


# #D
# @checkIn_routes.route("/<int:id>", methods=["DELETE"])
# @login_required
# def delete_checkIn(id):
#     """
#     Delete a checkIn
#     """

#     checkIn = CheckIn.query.get(id)
#     db.session.delete(checkIn)
#     db.session.commit()
#     return "Deleted"




# ! checkInTasks under 

#C
@checkIn_routes.route("/<int:id>/<int:taskId>/task_done", methods=["POST"])
@login_required
def create_checkInTask(id, taskId):
    """
    Create a new checkInTask, the task is done for the date
    """

    taskDone = CheckInTask(
        taskId = taskId,
        checkInId = id

    )
    db.session.add(taskDone)
    db.session.commit()
    return taskDone.to_dict()


#D
@checkIn_routes.route("/<int:checkInId>/<int:taskId>/task_undone", methods=["DELETE"])
@login_required
def delete_checkInTask(checkInId, taskId):
    """
    Delete a checkInTask, the task is undone for the date
    """
    taskUndone = CheckInTask.query.filter(CheckInTask.taskId == taskId, CheckInTask.checkInId == checkInId).first()
    
    db.session.delete(taskUndone)
    db.session.commit()
    return "Deleted"