from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Float
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

Base  = declarative_base()

class Test(Base):
    __tablename__ = 'posts'
    user_id = Column(Integer, primary_key=True, index=True)
    post_id = Column(Integer, primary_key = True, index=True)
    title = Column(String)
    content = Column(String)
    contact = Column(String)