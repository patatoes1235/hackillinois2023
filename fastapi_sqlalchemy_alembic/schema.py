from pydantic import BaseModel

class Test(BaseModel):
    title: str
    content: str
    contact: str

    class Config:
        orm_mode = True