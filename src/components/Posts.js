import React from "react";
import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({ posts }) => {
  return posts.length ? (
    posts
      .slice()
      .reverse()
      .map((post) => <Post post={post} />)
  ) : (
    <p style={{ textAlign: "center", fontSize: 24 + "px" }}>
      There are no posts
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps)(Posts);
