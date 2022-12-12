import React from "react";
import axios from "axios";

export default function Home({ posts }) {
  return (
    <>
      <h1>{posts[0].title}</h1>
    </>
  );
}

// server side rendering
export async function getServerSideProps() {
  const postsRes = await axios.get("http://localhost:1337/api/posts");

  return {
    props: {
      posts: postsRes.data
    } 
  };
}
