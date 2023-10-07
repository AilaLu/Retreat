from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, CheckIn
from app.forms.checkIn_form import CheckInForm

checkIn_routes = Blueprint('checkIns', __name__)

#R
@checkIn_routes.route("/")
@login_required
def get_checkIns():
    """
    Query for all checkIns and returns them in a list of checkIn dictionaries
    """
    checkIns = [checkIn.to_dict() for checkIn in CheckIn.query.all()]
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
            happy = form.data["happy"],
            meh = form.data["meh"],
            sad = form.data["sad"],
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

        checkIn.happy = form.data["happy"]
        checkIn.meh = form.data["meh"]
        checkIn.sad = form.data["sad"]
        # checkIn.year = form.data["year"]
        # checkIn.month = form.data["month"]
        # checkIn.date = form.data["date"]
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




# ! checkInTasks maybe under 