// AdminGallery.jsx
import React, { useEffect, useState } from "react";

function AdminGallery() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/posts/");
      const data = await res.json();
      setPosts(data);
    } catch (err) {
      console.error("Ошибка загрузки постов:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    for (let i = 0; i < images.length; i++) {
      formData.append(`image${i + 1}`, images[i]);
    }
    try {
      await fetch("http://127.0.0.1:8000/posts/", {
        method: "POST",
        body: formData,
      });
      setTitle("");
      setDescription("");
      setImages([]);
      fetchPosts();
    } catch (err) {
      console.error("Ошибка при добавлении поста:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://127.0.0.1:8000/posts/${id}`, { method: "DELETE" });
      fetchPosts();
    } catch (err) {
      console.error("Ошибка удаления:", err);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4 bg-white shadow-md p-4 rounded-md">
        <h2 className="text-xl font-bold">Добавить пост</h2>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
        <textarea
          placeholder="Описание"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full"
          required
        />
        <input
          type="file"
          multiple
          onChange={(e) => setImages([...e.target.files])}
          className="block"
        />
        <div className="flex gap-2 flex-wrap">
          {images.length > 0 &&
            [...images].map((img, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(img)}
                alt="preview"
                className="h-20 w-20 object-cover border rounded-md"
              />
            ))}
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Добавить пост
        </button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white shadow rounded-md overflow-hidden relative group"
          >
            <img
              src={`http://127.0.0.1:8000/images/${post.image?.split(",")[0].split("\\").pop()}`}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-3">
              <h2 className="text-md font-semibold truncate">{post.title}</h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {post.description}
              </p>
            </div>
            <button
              onClick={() => handleDelete(post.id)}
              className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white px-2 py-1 text-xs rounded"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminGallery;