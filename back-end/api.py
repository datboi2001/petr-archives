import json
from fastapi import FastAPI
import uvicorn


app = FastAPI()

@app.get("/")
def home():
    return {}

@app.get("/get-data")
def data():
    file = open('data.json')
    JSONdata = json.load(file)
    file.close()
    return JSONdata

if __name__ == '__main__':
    uvicorn.run('api:app', reload=True)
