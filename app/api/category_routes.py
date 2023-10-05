from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Category, Task
from app.forms.category_form import CategoryForm
from app.forms.task_form import TaskForm

category_routes = Blueprint('categories', __name__)

#R
@category_routes.route("/")
@login_required
def get_categories():
    """
    Query for all categories and returns them in a list of category dictionaries
    """
    categories = [category.to_dict() for category in Category.query.all()]

    return {"Categories": categories}





#C
@category_routes.route("/", methods=["POST"])
@login_required
def create_category():
    """
    Create a new category
    """

    form = CategoryForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():

        newCategory = Category(
            userId = current_user.id,
            name = form.data["name"],
        )
        db.session.add(newCategory)
        db.session.commit()
        return newCategory.to_dict()
    else:
          print(form.errors)
          return {"errors":form.errors}





#U
@category_routes.route("/<int:id>", methods=["PUT"])
@login_required
def update_category(id):
    """
    Edit a category
    """

    form = CategoryForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        category = Category.query.get(id)

        category.name = form.data["name"]
        db.session.commit()
        return category.to_dict()
    else:
          print(form.errors)
          return {"errors":form.errors}
    


#D
@category_routes.route("/<int:id>", methods=["DELETE"])
@login_required
def delete_category(id):
    """
    Delete a category
    """

    category = Category.query.get(id)
    db.session.delete(category)
    db.session.commit()
    return "Deleted"




#==============================================#
# for tasks, get tasks by category(R) and create task by category(C) is in the category route


# #R #!can be taken care of just by the lazy load in the model
#api/categories/id/tasks
@category_routes.route("/<int:id>/tasks")
@login_required
def get_tasks_by_category(id):
    """
    Query tasks for a category
    """
    category_tasks = Task.query.filter(Task.categoryId ==  id).all()

    res = [task.to_dict() for task in category_tasks]
    return {"Category_tasks": res}


#C
@category_routes.route("/<int:id>/tasks", methods=["POST"])
@login_required
def create_task_by_category(id):
    """
    Create a new task by category
    """

    form = TaskForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        # print("============show in the terminal, in api category_route=========, in the create task route ")
        newTask = Task(
            userId = current_user.id,
            categoryId = id,
            title = form.data["title"],
            icon = form.data["icon"]
        )
        db.session.add(newTask)
        db.session.commit()
        return newTask.to_dict()
    else:
          print(form.errors)
          return {"errors":form.errors}
