from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired


#!validate icon is in the asset icons array
class TaskForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    icon = StringField("icon", validators=[DataRequired()])
    submit = SubmitField("submit")
