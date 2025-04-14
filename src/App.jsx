import "./App.css";
import React, { useState } from "react";
import Blog from "./components/blogs/blog";
import Blogs from "./components/blogs/blogs";
import NavBar from "./components/navbar/NavBar";

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [remainingTime, setRemainingTime] = useState(0);

  const handleBookmark = (blogs) => {
    setBookmark([...bookmark, blogs]);
  };

  const handleRemainingTime = (time, id) => {
    const newTime = remainingTime + time;
    setRemainingTime(newTime);
    handleRemoveBookmark(id);
  };

  const handleRemoveBookmark = (id) => {
    const updatedBookmark = bookmark.filter((book) => book.id !== id);
    setBookmark(updatedBookmark);
  };

  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>

      <main className="w-11/12 mx-auto">
        <section className="lg:flex justify-between gap-4 pb-3">
          <div className="leftContainer lg:w-[70%] ">
            <Blogs
              handleBookmark={handleBookmark}
              handleRemainingTime={handleRemainingTime}
            ></Blogs>
          </div>
          <div className="rightContainer lg:w-[30%] mt-4 lg:mt-0">
            <div className="flex justify-between gap-2.5">
              <h2 className="text-xl font-medium text-center">
                Remaining Time: {remainingTime}
              </h2>
              <h2 className="text-xl font-medium text-center">
                Bookmark: {bookmark.length}
              </h2>
            </div>

            {bookmark.map((book) => {
              const { title } = book;
              return (
                <div className="border bg-gray-100 p-2 rounded-md my-2">
                  <h3 className="text-center">{title}</h3>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <footer></footer>
    </>
  );
}

export default App;
