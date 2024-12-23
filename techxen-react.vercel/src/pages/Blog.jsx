import React from "react";
import Blogs from "../components/Blogs";
import Commonhero from "../components/Commonhero";
import Herobanner from "../components/Herobanner";

const Blog = () => {
  return (
    <div>
      <Commonhero name={"Blog"} />
      <Herobanner />
      <Blogs />
    </div>
  );
};

export default Blog;
