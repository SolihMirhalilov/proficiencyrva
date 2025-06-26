from pydantic import BaseModel
from datetime import datetime

class UserCreate(BaseModel):
    username: str
    password: str

class UserLogin(BaseModel):
    username: str
    password: str
class PostCreate(BaseModel):
    title: str
    description: str
class Post(BaseModel):
    id: int
    image: str
    title: str
    description: str
    time: datetime

    class Config:
        orm_mode = True
