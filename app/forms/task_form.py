from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, ValidationError


#* validate icon is in the asset icons array
icons = [
  "https://img.icons8.com/color/96/yoga.png",
  "https://img.icons8.com/color/96/national-park.png",
  "https://img.icons8.com/color/96/marathon-swimming.png",
  "https://img.icons8.com/color/96/bicycle.png",
  "https://img.icons8.com/color/96/floating-guru.png",
  "https://img.icons8.com/color/96/hug.png",
  "https://img.icons8.com/color/96/filled-like.png",
  "https://img.icons8.com/color/96/hand-holding-heart.png",
  "https://img.icons8.com/color/96/popcorn.png",
  "https://img.icons8.com/color/96/writing-down.png",
  "https://img.icons8.com/color/96/code.png",
  "https://img.icons8.com/color/96/headphones.png",
  "https://img.icons8.com/color/96/guitar.png",
  "https://img.icons8.com/color/96/piano.png",
  "https://img.icons8.com/color/96/dumbbell.png",
  "https://img.icons8.com/color/96/dancing.png",
  "https://img.icons8.com/color/96/look-after.png",
  "https://img.icons8.com/color/96/tidy-up.png",
  "https://img.icons8.com/color/96/washing-dishes.png",
  "https://img.icons8.com/color/96/clothes-in-laundry.png",
  "https://img.icons8.com/color/96/potted-plant--v1.png",
  "https://img.icons8.com/color/96/insulin-pen.png",
  "https://img.icons8.com/color/96/pill.png",
  "https://img.icons8.com/color/96/wc.png",
  "https://img.icons8.com/color/96/kawaii-coffee.png",
  "https://img.icons8.com/color/96/sunny-side-up-eggs.png",
  "https://img.icons8.com/color/96/broccoli.png",
  "https://img.icons8.com/color/96/kawaii-egg.png",
  "https://img.icons8.com/color/96/coconut-cocktail.png",
  "https://img.icons8.com/color/96/thirst.png",
  "https://img.icons8.com/color/96/confetti.png",
  "https://img.icons8.com/color/96/summer--v1.png",
  "https://img.icons8.com/color/96/campfire.png",
  "https://img.icons8.com/color/96/beach.png",
  "https://img.icons8.com/color/96/snorkeling.png",
  "https://img.icons8.com/color/96/taipei-towers.png",
];

# ! see how you pass in the icon_matches validators as the second parameter, and it'll send with the key"errors" to the front end from thunk
# print("===========icons selection from asset in the front end========", icons)

def icon_matches(form, field):
    icon = field.data #user input icon
    icon_match = icons.index(icon)
    if not icon_match:
        raise ValidationError('Icon provided not found.')

class TaskForm(FlaskForm):
    title = StringField("title", validators=[DataRequired()])
    icon = StringField("icon", validators=[DataRequired(), icon_matches])
    submit = SubmitField("submit")
