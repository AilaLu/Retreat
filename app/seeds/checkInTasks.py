from app.models import db, environment, SCHEMA, CheckInTask
from sqlalchemy.sql import text

   # {
   #  "id": 1,
   #  "taskId": 1,
   #  "checkInId": 1,
   #   }

def seed_checkInTasks():
    # 2023/10/7
    task1day1 = CheckInTask(
                   taskId= 1,
                   checkInId= 1,
                  )
    # 2023/10/7
    task2day1 = CheckInTask(
                   taskId= 2,
                   checkInId= 1,
                  )
    # 2023/10/8
    task1day2 = CheckInTask(
                   taskId= 1,
                   checkInId= 2,
                 )
    # 2023/10/8
    task3day2 = CheckInTask(
                   taskId= 3,
                   checkInId= 2,
                )

    db.session.add(task1day1)
    db.session.add(task2day1)
    db.session.add(task1day2)
    db.session.add(task3day2)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_checkInTasks():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.check_in_tasks RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM check_in_tasks"))

    db.session.commit()


