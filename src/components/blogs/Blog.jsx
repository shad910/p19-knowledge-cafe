import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmark, handleRemainingTime }) => {
  
  const { id, author, author_img, cover, hashtags, title, posted_date, reading_time } = blog;

  return (
    <div className="flex">
      <div className="card bg-base-100 shadow-sm flex-1">
        <figure>
          <img src={cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>{posted_date}</p>
          <h2 className="card-title"> {title} </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="hashtags my-2 flex ">
            {hashtags.map((hashtag, index) => (
              <p key={index}>#{hashtag}</p>
            ))}
          </div>

          <div className="card-actions justify-between items-center mt-2">
            <div className="authorInformation flex items-center gap-1.5">
              <img className="w-8" src={author_img} alt="" />
              <h3 className="font-medium"> {author} </h3>
            </div>
            <button
              onClick={() => handleBookmark(blog)}
              className="cursor-pointer"
            >
              <FaBookmark size={24} />
            </button>
          </div>
          <div className="flex justify-end mt-2">
            <button onClick={()=>handleRemainingTime(reading_time, id)} className="btn btn-primary btn-soft">Mark as Rad</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
