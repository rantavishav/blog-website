import {
  BlogCard,
  FeaturedBlogCard,
  HomeTitle,
  RightArrow,
} from "@/components";

export default function Home() {
  return (
    <div>
      <HomeTitle />
      <main className="mx-[10%] lg:mx-0  mt-28 flex flex-wrap justify-center">
        <FeaturedBlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </main>
      <div className="text-center flex px-40 py-10 mt-10 justify-center">
        <span className="mr-10">Page 1 of 1</span> <RightArrow />
      </div>
    </div>
  );
}
