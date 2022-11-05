import json
from fastapi import FastAPI, UploadFile
from posts import Sticker
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

@app.post("/create-sticker")
def create_new_sticker(sticker: Sticker, file: UploadFile):
    pass


if __name__ == '__main__':
    uvicorn.run('api:app', reload=True)
