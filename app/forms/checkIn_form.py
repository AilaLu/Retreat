from flask_wtf import FlaskForm
from wtforms import BooleanField, IntegerField, SubmitField
from wtforms.validators import DataRequired

class CheckInForm(FlaskForm):
    happy = BooleanField("happy", validators=[DataRequired()])
    meh = BooleanField("meh", validators=[DataRequired()])
    sad = BooleanField("sad", validators=[DataRequired()])
    year = IntegerField("year", validators=[DataRequired()])
    month = IntegerField("month", validators=[DataRequired()])
    date = IntegerField("date", validators=[DataRequired()])
    submit = SubmitField("submit")
