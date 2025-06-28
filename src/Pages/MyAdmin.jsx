import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyAdmin() {
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁 состояние глазка
  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:8000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: text,
          password: pass,
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token", data.access_token); 
        navigate("/adminlogin"); 
      } else {
        const data = await response.json();
        setError(data.detail || "Ошибка входа");
      }
    } catch (err) {
      setError("Сервер не отвечает");
    }
  };

  return (
    <section>
      <div className="absolute lg:top-[30%] lg:left-[35%] md:top-[30%] md:left-[28%] sm:top-[30%] sm:left-[18%] top-[30%] w-[300px]">
        <h1 className="text-2xl font-semibold">Sign In</h1>

        <p className="mt-2 text-gray-600">
          Enter your username and password to sign in
        </p>

        {error && <p className="text-red-500 mt-2">{error}</p>}

        {/* Поле username */}
        <input
          className={`border rounded-xl mt-3 w-full p-2.5 focus:border-gray-500 focus:outline-none ${
            text ? "border-gray-500" : "border-gray-200"
          }`}
          onChange={(e) => setText(e.target.value)}
          value={text}
          placeholder="Username"
          type="text"
        />

        {/* Поле password с глазком */}
        <div className="relative">
          <input
            className={`border rounded-xl mt-3 w-full p-2.5 pr-10 focus:border-gray-500 focus:outline-none ${
              pass ? "border-gray-500" : "border-gray-200"
            }`}
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            placeholder="Password"
            type={showPassword ? "text" : "password"}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-[50%] -translate-y-1/2 cursor-pointer text-gray-500 select-none"
            title={showPassword ? "Скрыть пароль" : "Показать пароль"}
          >
            {showPassword ? "👁" : "👁"}
          </span>
        </div>

        {/* Кнопка входа */}
        <button
          className="w-full bg-blue-500 mt-4 text-white font-bold rounded-xl py-3"
          onClick={handleLogin}
        >
          Sign In
        </button>
      </div>
    </section>
  );
}
