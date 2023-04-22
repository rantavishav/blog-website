import Image from "next/image";
import Link from "next/link";

import { FEATURED_BLOG_IMAGE, PROFILE_PIC } from "@/images";

const FeaturedBlogCard = () => {
  return (
    <Link href="/" className="blog-card featured-card md:w-full">
      <article className="flex flex-col justify-between">
        <div className="relative w-[-webkit-fill-available] h-[420px] overflow-hidden m-4">
          <Image
            src={PROFILE_PIC}
            alt="profile pic"
            className="rounded-full z-10 absolute top-2 left-2 border-white border-2 "
            width={50}
            height={50}
          />

          {/* Featured section */}
          <div className="absolute top-16 right-2 z-10 font-semibold bg-white px-4 py-2 rounded-lg flex items-center">
            <span className="icon-star mx-4"></span>
            <span className="text-black sm:hidden">Featured</span>
          </div>

          {/* Title and description */}
          <div className="absolute top-16 left-2 z-10 w-4/5">
            <h1 className="font-bold text-2xl tracking-[0.15rem] leading-10">
              Blogging
            </h1>
            <div className="font-semibold text-4xl tracking-[0.15rem] leading-10">
              Hello new website! Familiar with this blog.
            </div>
          </div>

          {/* Post Date */}
          <div className="absolute bottom-4 left-2 z-10 font-semibold ">
            May 20, 2021
          </div>

          {/* Post Preview Image */}
          <Image
            src={FEATURED_BLOG_IMAGE}
            fill
            alt="blog post image"
            className="rounded-lg object-cover"
          />
        </div>
      </article>
    </Link>
  );
};

export default FeaturedBlogCard;
