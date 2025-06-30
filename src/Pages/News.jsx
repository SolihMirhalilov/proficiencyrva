import { useState, useEffect } from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [Click, setClick] = useState("");

  function HandlClick() {
    !Click(setClick);
  }
  return (
    <>
      <nav>
        <nav className=" dark:bg-gray-900 bg-slate-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
            <img
              src={Logo}
              className="h-[10px] w-16 md:w-52 md:h-full"
              alt="Flowbite Logo"
            />

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-7 h-7 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={HandlClick}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 borde  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <p className="text-white   px-1 py-3  text-lg font-semibold hover:scale-105 hover: hover: transition duration-300">
                    Home
                  </p>
                </li>
                <li>
                  <p className="text-white block  px-1 py-3  text-lg font-semibold hover:scale-105 hover: hover: transition duration-300">
                    News
                    <div className="w-full h-0.5 bg-white"></div>
                  </p>
                </li>
                <li>
                  <p className="text-white   px-1 py-3  text-lg font-semibold hover:scale-105 hover: hover: transition duration-300">
                    Projects
                  </p>
                </li>
                <li>
                  <p className="text-white   px-1 py-3  text-lg font-semibold hover:scale-105 hover: hover: transition duration-300">
                    About
                  </p>
                </li>
                <li>
                  <p className="text-white   px-1 py-3  text-lg font-semibold hover:scale-105 hover: hover: transition duration-300">
                    Contact
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className={`  ${!Click ? "hidden" : "flex"}  bg-slate-900 `}>
          <ul className=" absolute font-medium flex justify-between items-center w-full px-2 ">
            <li>
              <p className="text-white  text-xs font-semibold hover:scale-105 hover: hover: transition duration-300">
                Home
              </p>
            </li>
            <li>
              <p className="text-white  text-xs font-semibold hover:scale-105 hover: hover: transition duration-300">
                News
              </p>
            </li>
            <li>
              <p className="text-white  text-xs font-semibold hover:scale-105 hover: hover: transition duration-300">
                Projects
              </p>
            </li>
            <li>
              <p className="text-white  text-xs font-semibold hover:scale-105 hover: hover: transition duration-300">
                About
              </p>
            </li>
            <li>
              <p className="text-white  text-xs font-semibold hover:scale-105 hover: hover: transition duration-300">
                Contact
              </p>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default function PostPage() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null); // модалка

  useEffect(() => {
    fetch("http://127.0.0.1:8000/posts/")
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error("Ошибка загрузки:", err));
  }, []);

  const formatImagePath = (path) => {
    if (!path) return "";
    const filename = path.split(/[\\/]/).pop();
    return `http://127.0.0.1:8000/images/${filename}`;
  };

  const openModal = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };
  return (
    <>
      <Navbar />

      <div className="p-6 max-w-6xl mx-auto mt-44">
        <h1 className="text-2xl font-bold mb-4">Посты</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow rounded-md overflow-hidden cursor-pointer hover:scale-105 transition"
              onClick={() => openModal(post)}
            >
              <img
                src={formatImagePath(post.image?.split(",")[0])}
                alt={post.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{post.title}</h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Модалка */}
{selectedPost && (
  <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
    {/* Закрыть */}
    <button
      onClick={() => setSelectedPost(null)}
      className="absolute top-4 right-6 text-5xl text-gray-600 hover:text-red-500 z-50"
    >
      &times;
    </button>

    {/* Контент */}
    <div className="w-[60%] h-[100%] m-auto pt-24 flex flex-col">
      {/* Верхняя часть с картинкой */}
      <div className="w-[100%] h-[100%] md:h-[60vh] overflow-hidden">
        <img
          src={formatImagePath(selectedPost.image?.split(",")[0])}
          alt={selectedPost.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Текстовая часть */}
      <div className="p-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{selectedPost.title}</h2>
        <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
          {selectedPost.description}
        </p>
      </div>
    </div>
  </div>
)}



      </div>


    </>
  );
}
