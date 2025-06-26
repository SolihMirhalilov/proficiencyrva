from fastapi import APIRouter, File, UploadFile
import shutil
import os

router = APIRouter()

# Путь до папки images
UPLOAD_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "images")

@router.post("/upload-image")
async def upload_image(file: UploadFile = File(...)):
    file_path = os.path.join(UPLOAD_DIR, file.filename)

    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"filename": file.filename, "url": f"/images/{file.filename}"}
