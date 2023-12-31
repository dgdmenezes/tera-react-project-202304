import React from "react";
import PostListItem from "./PostListItem";

export default function PostListWrapper(props) {
  console.log(props.posts);
  return (
    <div className="user-blog__posts">
      {props.posts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </div>
  );
}
