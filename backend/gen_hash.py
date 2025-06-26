from passlib.context import CryptContext

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

password = "Adm_Profi_2102"  
hash = pwd_context.hash(password)

print("WordBox_845:", hash)
