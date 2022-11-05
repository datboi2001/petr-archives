import json
from fastapi import FastAPI, UploadFile
import uvicorn
from posts import Sticker


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

def write_json(new_data, filename='data.json'):
    with open('data.json', 'r+') as file:
        file_data = json.load(file)
        file_data.append(new_data)
        file.seek(0)
        json.dump(file_data, file, indent = 4)



if __name__ == '__main__':
    uvicorn.run('api:app', reload=True)

