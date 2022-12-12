import React from "react";
import axios from "axios";

export default function Home(post: any) {
  return (
    <>{post.title}</>
  );
}

// server side rendering
export async function getServerSideProps() {
  const postsRes = await axios.get("http://localhost:1337/posts");

  return {
    props: {
      posts: postsRes.data
    } 
  };
}
