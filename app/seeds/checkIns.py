from app.models import db, environment, SCHEMA, CheckIn
from sqlalchemy.sql import text

# ! mood should be the image url 

   # {
   #  "id": 1,
   #  "userId": 1,
   #  "mood": "happy",
   #  "year": 2023,
   #  "month": 10,
   #  "date": 7
   #   }

def seed_checkIns():
    checkIn1 = CheckIn(
                   userId= 1,
                    mood="https://img.icons8.com/color/96/fat-emoji.png",
                   year= 2023,
                   month= 10,
                   date= 7)
    checkIn2 = CheckIn(
                   userId= 1,
                    mood="https://img.icons8.com/color/96/neutral-emoticon--v1.png",
                   year= 2023,
                   month= 10,
                   date= 8)
    checkIn3 = CheckIn(
                    userId= 1,
                    mood="https://img.icons8.com/color/96/crying--v1.png",
                   year= 2023,
                   month= 10,
                   date= 9)
    checkIn4 = CheckIn(
                    userId= 1,
                    mood="https://img.icons8.com/color/96/fat-emoji.png",
                   year= 2023,
                   month= 10,
                   date= 10)

    db.session.add(checkIn1)
    db.session.add(checkIn2)
    db.session.add(checkIn3)
    db.session.add(checkIn4)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_checkIns():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.checkIns RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM checkIns"))

    db.session.commit()

