import React from "react";
import "./Post.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(far, fas);

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="img__wrapper">
        <img src={post.photo} alt={post.photo} />
      </div>
      <div className="content__wrapper">
        <div className="content__header">
          <div className="header__top">
            <h2>{post.name}</h2>
            <FontAwesomeIcon icon={["fas", "check-circle"]} />
            <p>{post.nickname}</p>
            &#183;
            <p>{post.date}</p>
          </div>
          <div className="header__bottom">
            <p>{post.content}</p>
          </div>
        </div>
        <img src={post.image} alt={post.image} className="content__img" />
        <ul>
          <li>
            <FontAwesomeIcon icon={["far", "comment"]} /> 123
          </li>
          <li>
            <FontAwesomeIcon icon={["fas", "retweet"]} /> 123
          </li>
          <li>
            <FontAwesomeIcon icon={["far", "heart"]} /> 234
          </li>
          <li>
            <FontAwesomeIcon icon={["fas", "upload"]} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
