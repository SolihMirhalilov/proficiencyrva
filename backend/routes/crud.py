import os
import shutil
import uuid
from fastapi import UploadFile, HTTPException
from sqlalchemy.orm import Session
from backend import models

# ✅ СОЗДАНИЕ ПОСТА
def create_post(title: str, description: str, image: list[UploadFile], db: Session):
    try:
        images_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "images"))
        os.makedirs(images_dir, exist_ok=True)

        image_paths = []
        if image:
            for img in image:
                filename = f"{uuid.uuid4().hex}_{img.filename}"
                file_path = os.path.join(images_dir, filename)
                with open(file_path, "wb") as f:
                    shutil.copyfileobj(img.file, f)
                image_paths.append(file_path)

        post = models.Post(
            title=title,
            description=description,
            image=",".join(image_paths)
        )

        db.add(post)
        db.commit()
        db.refresh(post)
        return post

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# ✅ ПОЛУЧЕНИЕ ВСЕХ ПОСТОВ
def get_posts(db: Session):
    return db.query(models.Post).all()

# ✅ ПОЛУЧЕНИЕ ОДНОГО ПОСТА
def get_post(post_id: int, db: Session):
    return db.query(models.Post).filter(models.Post.id == post_id).first()

# ✅ ОБНОВЛЕНИЕ ПОСТА
def update_post(post_id: int, title: str, description: str, image: list[UploadFile], db: Session):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Пост не найден")

    post.title = title
    post.description = description

    if image:
        image_paths = []
        images_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "images"))
        os.makedirs(images_dir, exist_ok=True)
        for img in image:
            filename = f"{uuid.uuid4().hex}_{img.filename}"
            file_path = os.path.join(images_dir, filename)
            with open(file_path, "wb") as f:
                shutil.copyfileobj(img.file, f)
            image_paths.append(file_path)
        post.image = ",".join(image_paths)

    db.commit()
    db.refresh(post)
    return post

# ✅ УДАЛЕНИЕ ПОСТА
def delete_post(post_id: int, db: Session):
    post = db.query(models.Post).filter(models.Post.id == post_id).first()
    if not post:
        raise HTTPException(status_code=404, detail="Пост не найден")

    db.delete(post)
    db.commit()
    return {"detail": "Пост удален"}
