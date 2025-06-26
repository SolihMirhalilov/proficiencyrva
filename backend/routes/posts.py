from fastapi import APIRouter, Form, UploadFile, File, Depends
from sqlalchemy.orm import Session
from backend.routes.crud import (
    create_post,
    get_posts,
    get_post,
    update_post,
    delete_post,
)
from backend.database import get_db

router = APIRouter()

# ✅ Создание поста с несколькими изображениями
@router.post("/posts/")
def create_post_endpoint(
    title: str = Form(...),
    description: str = Form(...),
    image: list[UploadFile] = File(default=None),
    db: Session = Depends(get_db),
):
    return create_post(title=title, description=description, image=image, db=db)

# ✅ Получить все посты
@router.get("/posts/")
def get_posts_endpoint(db: Session = Depends(get_db)):
    return get_posts(db)

# ✅ Получить один пост
@router.get("/posts/{post_id}")
def get_post_endpoint(post_id: int, db: Session = Depends(get_db)):
    return get_post(post_id, db)

# ✅ Обновление поста
@router.put("/posts/{post_id}")
def update_post_endpoint(
    post_id: int,
    title: str = Form(...),
    description: str = Form(...),
    image: list[UploadFile] = File(default=None),
    db: Session = Depends(get_db),
):
    return update_post(post_id, title=title, description=description, image=image, db=db)

# ✅ Удаление поста
@router.delete("/posts/{post_id}")
def delete_post_endpoint(post_id: int, db: Session = Depends(get_db)):
    return delete_post(post_id, db)
