import React from "react";

export default function Home(props: any) {
  return (
    <>{props.content}</>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      content: "some content"
    }
  };
}
