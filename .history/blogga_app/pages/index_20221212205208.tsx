import React from "react";
import axios from "axios";

export default function Home(props: any) {
  return (
    <>{props.content}</>
  );
}

// server side rendering
export async function getServerSideProps() {
  const postsRes = await axios.get("http://localhost:1337/posts");

  return {
    props: {
      content: "some content"
    }
  };
}
