from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from flask_wtf.file import FileField, FileAllowed, FileRequired
from app.api.aws_helper import ALLOWED_EXTENSIONS

def valid_year(form, field):
    year = field.data # user input from clicking one one day of the calendar
    if not year>= 1920:
        raise ValidationError('year provided not found.')
    
def valid_month(form, field):
    month = field.data # user input from clicking one one day of the calendar
    if not 1>=month<=12:
        raise ValidationError('month should be within 1 to 12.')

def valid_date(form, field):
    date = field.data # user input from clicking one one day of the calendar
    if not 1>=date<=31:
        raise ValidationError('date should be within 1 to 31.')


class CheckInForm(FlaskForm):
    mood = StringField("mood", validators=[DataRequired()])
    year = IntegerField("year", validators=[DataRequired()])
    month = IntegerField("month", validators=[DataRequired()])
    date = IntegerField("date", validators=[DataRequired()])
    image = FileField("image file", validators=[ FileAllowed(list(ALLOWED_EXTENSIONS))])
    submit = SubmitField("submit")
