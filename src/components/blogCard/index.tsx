import Image from "next/image";
import Link from "next/link";

import { BLOG_POST_IMAGE, PROFILE_PIC } from "@/images";

const BlogCard = () => {
  return (
    <Link href="/" className="blog-card md:w-full">
      <article className="flex flex-col justify-between">
        <div className="">
          <div className="relative w-[-webkit-fill-available] h-[220px] overflow-hidden m-4">
            <Image
              src={PROFILE_PIC}
              alt="profile pic"
              className="rounded-full z-10 absolute top-2 left-2 border-white border-2 "
              width={50}
              height={50}
            />

            <Image
              src={BLOG_POST_IMAGE}
              fill
              alt="blog post image"
              className="rounded-lg object-cover"
            />
          </div>
          <div className="px-5 py-3">
            <div className="capitalize text-link-color font-semibold text-2xl">
              react
            </div>
            <div className="text-2xl font-semibold">
              Make Dialog (Modal) using Headless UI + TailwindCSS
            </div>
          </div>
        </div>
        <div className="p-5 text-base">Apr 13, 2023 </div>
      </article>
    </Link>
  );
};

export default BlogCard;
