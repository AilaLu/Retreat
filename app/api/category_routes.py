from flask import Blueprint, jsonify, request
from flask_login import login_required, current_user
from app.models import db, Category
from app.forms.category_form import CategoryForm

category_routes = Blueprint('categories', __name__)


@category_routes.route('/')
# @login_required
def get_categories():
    """
    Query for all categories and returns them in a list of category dictionaries
    """
    categories = [category.to_dict() for category in Category.query.all()]
    # print("============show in the terminal, in api category_route=========, prints categories", categories)
    return {"Categories": categories}

@category_routes.route('/', methods=["POST"])
# @login_required
def create_category():
    """
    Create a new category
    """

    form = CategoryForm()
    form["csrf_token"].data = request.cookies["csrf_token"]

    if form.validate_on_submit():
        print("============show in the terminal, in api category_route=========, in the post route lalala")
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