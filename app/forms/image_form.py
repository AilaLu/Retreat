from flask_wtf import FlaskForm
from wtforms import  SubmitField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.api.aws_helper import ALLOWED_EXTENSIONS

def valid_image(form, field):
    image = field.data # user input from clicking one one day of the calendar
    if not image:
        raise ValidationError('image not provided.')
    # if not image.filename.endswith(tuple(ALLOWED_EXTENSIONS)):
    


class ImageForm(FlaskForm):
    image = FileField("image file", validators=[ FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField("submit")
