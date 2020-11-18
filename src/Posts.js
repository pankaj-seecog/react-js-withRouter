import React from "react";
import axios from "axios";
import Post from "./Post";
class Posts extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    console.log("===> ", this.props);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(res => {
        this.setState({
          posts: res.data
        });
      })
      .catch(err => {
        console.log("The error is ", err);
      });
  }

  render() {
    return (
      <>
        {this.state.posts.map(post => {
          return <Post title={post.title} body={post.body} />;
        })}
      </>
    );
  }
}
export default Posts;
