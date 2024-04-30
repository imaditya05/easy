import { BlogCard } from "../components/BlogCard";

export default function Blogs() {
  return <div className=" flex justify-center">
    <div className=" max-w-xl">
      <BlogCard
        authorName={"Blog 1 author"}
        title={"Title of Blog 1"}
        content={"Content of Blog 1"}
        publishDate={"2nd May 2024"}
      />
    </div>
  </div>;
}
