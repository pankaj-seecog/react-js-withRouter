import React from "react";

const Home = props => {
  return (
    <>
      <h1>Inside Home Page</h1>
      <button
        onClick={() => {
          console.log("Props is ", props);
          props.history.push("/posts");
        }}
      >
        Posts
      </button>
    </>
  );
};

export default Home;
