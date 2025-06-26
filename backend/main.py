from fastapi import FastAPI
from backend.database import Base, engine
from backend.routes.auth import router as auth_router
from backend.routes.posts import router as posts_router
from backend.routes.upload import router as upload_router
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import os

# Инициализация FastAPI
app = FastAPI()

# Стартовая страница
@app.get("/", response_class=HTMLResponse)
async def root():
    return """
    <h1>Добро пожаловать!</h1>
    <p>Используй <a href='/docs'>/docs</a> чтобы посмотреть API.</p>
    """

# Создание таблиц в БД
Base.metadata.create_all(bind=engine)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Абсолютный путь к папке "backend/images"
images_path = os.path.abspath(os.path.join(os.path.dirname(__file__), "images"))
os.makedirs(images_path, exist_ok=True)

# Проверка
print("Текущая папка запуска:", os.getcwd())
print("Путь к папке images:", images_path)
print("Существует ли папка?", os.path.exists(images_path))

# Отдаём изображения
app.mount("/images", StaticFiles(directory=images_path), name="images")

# Подключение роутеров
app.include_router(auth_router)
app.include_router(posts_router)
app.include_router(upload_router)
