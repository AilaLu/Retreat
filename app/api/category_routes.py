from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Category
from app.forms.category_form import CategoryForm

category_routes = Blueprint('categories', __name__)

#R
@category_routes.route("/")
@login_required
def get_categories():
    """
    Query for all categories and returns them in a list of category dictionaries
    """
    categories = [category.to_dict() for category in Category.query.all()]
    # print("============show in the terminal, in api category_route=========, prints categories", categories)
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
        # print("============show in the terminal, in api category_route=========, in the create post route lalala")
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
    print("============show in the terminal, in api category_route=========, in the edit route ")
    form = CategoryForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        category = Category.query.get(id)
        print("============show in the terminal, in api category_route=========, in the edit route ", category)
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
