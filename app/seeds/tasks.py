from app.models import db, environment, SCHEMA, Task
from sqlalchemy.sql import text

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

   # {
   #  "id": 1,
   #  "userId": 1,
   #  "categoryId": 1,
   #  "title": "yoga",
   #  "icon": "https://img.icons8.com/color/96/yoga.png"
   #   }

def seed_tasks():
    task1 = Task(
        userId=1, categoryId= 1, title="yoga", icon="https://img.icons8.com/color/96/yoga.png")
    task2 = Task(
        userId=1, categoryId= 1, title="swim", icon="https://img.icons8.com/color/96/marathon-swimming.png")
    task3 = Task(
        userId=1, categoryId= 1, title="gym", icon="https://img.icons8.com/color/96/dumbbell.png")
    task4 = Task(
        userId=1, categoryId= 1, title="bike", icon="https://img.icons8.com/color/96/bicycle.png")
    



    task5 = Task(
        userId=1, categoryId= 2, title="meditation", icon="https://img.icons8.com/color/96/floating-guru.png")
    task6 = Task(
        userId=1, categoryId= 2, title="hug", icon="https://img.icons8.com/color/96/hug.png")
    task7 = Task(
        userId=1, categoryId= 2, title="love urself", icon="https://img.icons8.com/color/96/filled-like.png")
    task8 = Task(
        userId=1, categoryId= 2, title="kind to others", icon="https://img.icons8.com/color/96/hand-holding-heart.png")
    task9 = Task(
        userId=1, categoryId= 2, title="kind to others", icon="https://img.icons8.com/color/96/floating-guru.png")
    


    task10 = Task(
        userId=1, categoryId= 3, title="pet pet", icon="https://img.icons8.com/color/96/look-after.png")
    task11 = Task(
        userId=1, categoryId= 3, title="celebrate small wins", icon="https://img.icons8.com/color/96/confetti.png")
    task12 = Task(
        userId=1, categoryId= 3, title="have a nice drink", icon="https://img.icons8.com/color/96/kawaii-coffee.png")
    

  

    db.session.add(task1)
    db.session.add(task2)
    db.session.add(task3)
    db.session.add(task4)
    db.session.add(task5)
    db.session.add(task6)
    db.session.add(task7)
    db.session.add(task8)
    db.session.add(task9)
    db.session.add(task10)
    db.session.add(task11)
    db.session.add(task12)


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

