from .db import db, environment, SCHEMA, add_prefix_for_prod

class CheckIn(db.Model):
    __tablename__ = 'checkIns'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    userId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")))
    mood = db.Column(db.String, nullable=False)
    year = db.Column(db.Integer, nullable=False)
    month = db.Column(db.Integer, nullable=False)
    date = db.Column(db.Integer, nullable=False)

# relationship attribute
    users = db.relationship("User", back_populates="checkIns")
    checkInTasks = db.relationship("CheckInTask", back_populates="checkIns", cascade="all, delete", lazy="joined")


    def to_dict(self):
        return {
            'id': self.id,
            'userId': self.userId,
            'mood': self.mood,
            'year': self.year,
            'month': self.month,
            'date': self.date,
            'checkInTasks': [checkInTask.to_dict() for checkInTask in self.checkInTasks]
        }
