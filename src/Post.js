import React from "react";
import { withRouter } from "react-router-dom";
const Post = props => {
  console.log("child prop is ", props);
  return (
    <div>
      <p>Title : {props.title}</p>
      <p>Body : {props.body}</p>
      <hr />
    </div>
  );
};

export default withRouter(Post);
