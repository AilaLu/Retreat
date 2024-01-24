from app.models import db, environment, SCHEMA, Task
from sqlalchemy.sql import text

icons = [
  "https://img.icons8.com/color/96/yoga.png",
  "https://img.icons8.com/color/96/national-park.png",
  "https://img.icons8.com/color/96/marathon-swimming.png",
  "https://img.icons8.com/color/96/bicycle.png",
  "https://img.icons8.com/color/96/massage.png",
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
  "https://img.icons8.com/color/96/garden-gloves.png",
  "https://img.icons8.com/color/96/flower.png",
  "https://img.icons8.com/color/96/galaxy.png",
  "https://img.icons8.com/color/96/alien.png",
  "https://img.icons8.com/color/96/cactus.png",
];

   # {
   #  "id": 1,
   #  "userId": 1,
   #  "categoryId": 1,
   #  "title": "yoga",
   #  "icon": "https://img.icons8.com/color/96/yoga.png"
   #   }

def seed_tasks():
# get moving
    task1 = Task(
        userId=1, categoryId= 1, title="yoga", icon="https://img.icons8.com/color/96/yoga.png")
    task2 = Task(
        userId=1, categoryId= 1, title="swim", icon="https://img.icons8.com/color/96/marathon-swimming.png")
    task3 = Task(
        userId=1, categoryId= 1, title="gym", icon="https://img.icons8.com/color/96/dumbbell.png")
    task4 = Task(
        userId=1, categoryId= 1, title="bike", icon="https://img.icons8.com/color/96/bicycle.png")
    task15 = Task(
        userId=1, categoryId= 1, title="take a walk", icon="https://img.icons8.com/color/96/national-park.png")
    
    


# mental health
    task5 = Task(
        userId=1, categoryId= 2, title="meditation", icon="https://img.icons8.com/color/96/floating-guru.png")
    task6 = Task(
        userId=1, categoryId= 2, title="hug", icon="https://img.icons8.com/color/96/hug.png")
    task7 = Task(
        userId=1, categoryId= 2, title="love urself", icon="https://img.icons8.com/color/96/filled-like.png")
    task8 = Task(
        userId=1, categoryId= 2, title="kind to others", icon="https://img.icons8.com/color/96/hand-holding-heart.png")
    task8 = Task(
        userId=1, categoryId= 2, title="journal", icon="https://img.icons8.com/color/96/writing-down.png")
    

# quality time
    task9 = Task(
        userId=1, categoryId= 3, title="listen to music", icon="https://img.icons8.com/color/96/headphones.png")
    task10 = Task(
        userId=1, categoryId= 3, title="pet furry pet", icon="https://img.icons8.com/color/96/look-after.png")
    task11 = Task(
        userId=1, categoryId= 3, title="yay small wins", icon="https://img.icons8.com/color/96/confetti.png")
    task12 = Task(
        userId=1, categoryId= 3, title="nice drink", icon="https://img.icons8.com/color/96/kawaii-coffee.png")
    task16 = Task(
        userId=1, categoryId= 3, title="movies", icon="https://img.icons8.com/color/96/popcorn.png")
    task17 = Task(
        userId=1, categoryId= 3, title="piano", icon="https://img.icons8.com/color/96/piano.png")
    
# intakes
    task13 = Task(
        userId=1, categoryId=4 , title="H2O", icon="https://img.icons8.com/color/96/thirst.png")
    task14 = Task(
        userId=1, categoryId=4 , title="supplements", icon="https://img.icons8.com/color/96/pill.png")
    task18 = Task(
        userId=1, categoryId=4 , title="protein", icon="https://img.icons8.com/color/96/kawaii-egg.png")
    task19 = Task(
        userId=1, categoryId=4 , title="greens", icon="https://img.icons8.com/color/96/broccoli.png")
    
    
# chores
    task20 = Task(
        userId=1, categoryId=5 , title="tidy room", icon="https://img.icons8.com/color/96/tidy-up.png")
    task21 = Task(
        userId=1, categoryId=5 , title="dishes", icon="https://img.icons8.com/color/96/washing-dishes.png")
    task22 = Task(
        userId=1, categoryId=5 , title="laundry", icon= "https://img.icons8.com/color/96/clothes-in-laundry.png")
    task23 = Task(
        userId=1, categoryId=5 , title="water plants", icon= "https://img.icons8.com/color/96/cactus.png")
    

    tasks = [task1, task2, task3, task4, task5, task6, task7, task8, task9, task10, task11, task12, task13, task14, task15, task16, task17, task18, task19, task20, task21, task22, task23]
    for task in tasks:
        db.session.add(task)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_tasks():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.tasks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM tasks"))

    db.session.commit()

