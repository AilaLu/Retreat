from app.models import db, environment, SCHEMA, Image
from sqlalchemy.sql import text

   # {
   #  "id": 1,
   #  "checkInId": 1,
   #  "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzyJqWO56rjfYJk_fQ7M969zb54B70fiDag&usqp=CAU"
   #   }
 
 # ? the first day of checkin should have 2 images, an almond jelly tea and Daan park
 # ? the second day of checkin should have 3 images, a bowl of ramen, a zigzag from HuaShan 1914 Creative Park, and a picture of the xmas tree caftus

def seed_images():
    image1 = Image(
                   checkInId= 1,
                    image= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFzyJqWO56rjfYJk_fQ7M969zb54B70fiDag&usqp=CAU"
                   )
    image2 = Image(
                   checkInId= 1,
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM1ZH6ifmMbL6vTPtxlcOQ0da0wZGDbJPfdA&usqp=CAU"
                   )
    image3 = Image(
                    checkInId= 2,
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9RDkbERdG4jouPeH9okPq7a7loUvz-n6acA&usqp=CAU"
                   )
    image4 = Image(
                    checkInId= 2,
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRwL7BkE_AyVxxo1Wz_4yqXAMlMZRjj9UmYg&usqp=CAU"
                   )
    image5 = Image(
                    checkInId= 2,
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXVMBrVabC73QKCa_1QFUFNmRPJx2uE69rlFIGlOxh5jBGidUHK2mEtOhG9Guk5JmT13s&usqp=CAU"
                   )

    db.session.add(image1)
    db.session.add(image2)
    db.session.add(image3)
    db.session.add(image4)
    db.session.add(image5)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_images():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.images RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM images"))

    db.session.commit()

