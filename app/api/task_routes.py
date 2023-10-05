from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Task
from app.forms.task_form import TaskForm

task_routes = Blueprint('tasks', __name__)

# #R
# task_routes.route("/")
# @login_required
# def get_tasks():
#     """
#     Query for all tasks 
#     """
#     tasks = [task.to_dict() for task in Task.query.all()]
#     # print("============show in the terminal, in api category_route=========, prints tasks", tasks)
#     return {"Tasks": tasks}



#U
#api/tasks/id
task_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_task(id):
    """
    Edit a task
    """
    form = TaskForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        task = Task.query.get(id)
        # print("============show in the terminal, in api task_route=========, in the edit route ", task)
        task.title = form.data["title"]
        task.icon = form.data["icon"]
        db.session.commit()
        return task.to_dict()
    else:
          print(form.errors)
          return {"errors":form.errors}
    


#D
#api/tasks/delete/id
task_routes.route("/delete/<int:id>", methods=["DELETE"])
@login_required
def delete_task(id):
    """
    Delete a task
    """
    task = Task.query.get(id)
    print("============show in the terminal, in api task_route=========, in the delete route ", task)
    db.session.delete(task)
    db.session.commit()
    return "Deleted"




