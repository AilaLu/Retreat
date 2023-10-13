from app.models import db, environment, SCHEMA, Category
from sqlalchemy.sql import text

  # {
  #  "id": 1,
  #  "name": "Physical health",
  #  "userId": 1
  # }

def seed_categories():
    category1 = Category(
        userId=1, name="Physical health")
    category2 = Category(
        userId=1, name="Mental health")
    category3 = Category(
        userId=1, name="Quality time")
  

    db.session.add(category1)
    db.session.add(category2)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_categories():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.categories RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM categories"))

    db.session.commit()

#need to have one of these undo commands for each seeded table, just replace undo_users with categories, etc.
