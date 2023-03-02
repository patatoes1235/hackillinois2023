import uvicorn
from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware, db

from schema import Test as SchemaTest

from schema import Test

from models import Test as ModelTest

import os
from dotenv import load_dotenv

load_dotenv('.env')


app = FastAPI()

# to avoid csrftokenError
app.add_middleware(DBSessionMiddleware, db_url=os.environ['DATABASE_URL'])

@app.get("/")
async def root():
    return {"message": "hello world"}


@app.post('/Test/', response_model=SchemaTest)
async def Test(Test: SchemaTest):
    db_Test = ModelTest(title=Test.title, rating=Test.rating, author_id = Test.author_id)
    db.session.add(db_Test)
    db.session.commit()
    return db_Test

@app.get('/Test/')
async def Test():
    Test = db.session.query(ModelTest).all()
    return Test

# To run locally
if __name__ == '__main__':
    uvicorn.run(app, host='0.0.0.0', port=8000)