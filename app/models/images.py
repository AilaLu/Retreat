from .db import db, environment, SCHEMA, add_prefix_for_prod


class Image(db.Model):
    __tablename__ = 'images'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    checkInId = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("check_ins.id")), nullable=False)
    image = db.Column(db.String)

  # relationship attribute
    checkIns = db.relationship("CheckIn", back_populates="images")

    def to_dict(self):
        return {
            'id': self.id,
            'checkInId': self.checkInId,
            'image': self.image
        }
