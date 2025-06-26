from fastapi import APIRouter, HTTPException
from fastapi.responses import JSONResponse
from passlib.context import CryptContext
from backend.schemas import UserLogin

router = APIRouter()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

ADMIN_USERNAME = "Admin_2101"
ADMIN_PASSWORD_HASH = "$2b$12$QN.xzVjlljdRmwabl2G8l.SiW705Q.J34kEIfcxbzmYh02gzDZPDC"  # пароль 123456

@router.post("/auth/login")
def login(user: UserLogin):
    if user.username == ADMIN_USERNAME and pwd_context.verify(user.password, ADMIN_PASSWORD_HASH):
        return JSONResponse(
            content={"msg": "Успешный вход"},
            status_code=200
        )
    raise HTTPException(status_code=401, detail="Неверный логин или пароль")
