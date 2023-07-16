import React from "react";
import { useGlobalContext } from "./context";

const Stories = () => {
  const { hits, isLoading, handleDeletePost } = useGlobalContext();

  if (isLoading) {
    return (
      <>
        <h1>Loading..</h1>
      </>
    );
  }
  return (
    <>
      <div className="stories-div">
        <ul>
          {hits.map((curPost) => {
            const { title, author, objectID, url, num_comments } = curPost;
            return (
              <li className="card" key={objectID}>
                <h2 className="title">{title}</h2>
                <p className="authorComment">
                  By {author} | <span>{num_comments}</span> Comments
                </p>
                <div className="card-button">
                  <a
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                    className="readMore"
                  >
                    Read More
                  </a>
                  <a
                    href="#"
                    className="delete"
                    onClick={() => handleDeletePost(objectID)}
                  >
                    Remove
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Stories;
