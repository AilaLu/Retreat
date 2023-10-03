from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Category

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

