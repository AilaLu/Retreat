from app.models import db, environment, SCHEMA, Task
from sqlalchemy.sql import text

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
        userId=1, categoryId= 1, title="swim", icon="https://img.icons8.com/color/96/snorkeling.png")
    task3 = Task(
        userId=1, categoryId= 2, title="meditation", icon="https://img.icons8.com/color/96/floating-guru.png")
    task4 = Task(
        userId=1, categoryId= 2, title="hug", icon="https://img.icons8.com/color/96/hug.png")
  

    db.session.add(task1)
    db.session.add(task2)
    db.session.add(task3)
    db.session.add(task4)


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

#need to have one of these undo commands for each seeded table, just replace undo_users with categories, etc.
