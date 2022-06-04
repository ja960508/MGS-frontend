import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const router = useRouter();
  console.log(router);
  return <div>Hello~~ Post {router.query.postid}</div>;
};

export default Post;
