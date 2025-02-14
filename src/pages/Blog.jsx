import React from "react";
import Blogs from "../components/Blogs";
import Commonhero from "../components/Commonhero";
import Herobanner from "../components/Herobanner";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content="Read our latest blogs on technology, digital marketing, business strategies, and industry trends. Stay updated with valuable insights and tips from our expert team."
        />
        <meta
          name="keywords"
          content="Blog, technology, digital marketing, business strategies, industry trends, expert insights, blog posts, marketing tips, business growth, latest blogs"
        />
      </Helmet>
      <Commonhero name={"Blog"} />
      <Herobanner />
      <Blogs />
    </div>
  );
};

export default Blog;
