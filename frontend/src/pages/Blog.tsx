import React from "react";
import Hero from "../components/Blog/Hero";
import Blogs from "../components/Blog/Blogs";
const Blog = () => {
  return (
    <main className=" px-24">
      {/* Hero */}
      <section id="Hero" className="px-10">
        <Hero />
      </section>
      {/* blogs */}
      <section className="px-10">
        <Blogs />
      </section>
    </main>
  );
};

export default Blog;
