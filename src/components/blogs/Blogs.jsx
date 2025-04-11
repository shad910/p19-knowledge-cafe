import React, { useState, useEffect } from "react";
import Blog from "./blog";

const Blogs = ({ handleBookmark, handleRemainingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-medium text-center">
        Total Blogs: {blogs.length}
      </h2>
      <div className="allBlogs mt-5 grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
            handleRemainingTime={handleRemainingTime}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
