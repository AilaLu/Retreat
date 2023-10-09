from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('Email provided not found.')


def password_matches(form, field):
    # Checking if password matches
    password = field.data
    email = form.data['email']
    user = User.query.filter(User.email == email).first()
    if not user:
        raise ValidationError('No such user exists.')
    if not user.check_password(password):
        raise ValidationError('Password was incorrect.')

# ! see how you pass in the functions(user_exists, password_matches) to validators as the second parameter, and it'll send with the key"errors" to the front end from thunk

class LoginForm(FlaskForm):
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired(), password_matches])