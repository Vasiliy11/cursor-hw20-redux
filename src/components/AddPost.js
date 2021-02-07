import React from "react";
import "./addPost.scss";
import { connect } from "react-redux";
import { createPost } from "../redux/actions";

const AddPost = ({ createPost }) => {
  const submitHandler = (e) => {
    e.preventDefault();
    const newPostForm = {
      id: Date.now(),
      name: e.target[0].value,
      photo: e.target[1].value,
      nickname: "@" + e.target[2].value,
      content: e.target[3].value,
      image: e.target[4].value,
      date: new Date().toLocaleDateString("en-GB"),
    };
    createPost(newPostForm);
    e.target[0].value = "";
    e.target[1].value = null;
    e.target[2].value = "";
    e.target[3].value = "";
  };

  return (
    <form onSubmit={submitHandler} className="form">
      <h2>Add New Post</h2>
      <select>
        <option disabled={true} selected={true}>
          Select profile
        </option>
        <option value="Anakin Skywalker">Anakin Skywalker</option>
        <option value="Колобок">Колобок</option>
        <option value="Mandalorian">Mandalorian</option>
      </select>
      <p>
        <input type="text" id="name" placeholder="Your profile image URL" />
      </p>
      <p>
        <input type="text" id="nickname" placeholder="Your Nickname" />
      </p>
      <p>
        <textarea
          type="text"
          id="post-text"
          rows="4"
          placeholder="Everything you want to say"
        />
      </p>
      <p>
        <input type="text" id="img-link" placeholder="Post image URL" />
      </p>
      <button className="form__button" type="submit">
        Create
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  createPost,
};

export default connect(null, mapDispatchToProps)(AddPost);
