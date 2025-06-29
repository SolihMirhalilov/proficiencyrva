import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function Posts() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([]);

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

  return (
    <div className="p-6 max-w-6xl mx-auto mt-44 cursor-pointer" onClick={() => navigate("/posts")} >
      <h1 className="text-2xl font-bold mb-4 text-center">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow rounded-md overflow-hidden"
          >
            <img
              src={formatImagePath(post.image?.split(",")[0])}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold line-clamp-2">{post.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-3">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
