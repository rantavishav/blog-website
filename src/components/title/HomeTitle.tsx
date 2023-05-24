import { MAIN_BANNER_IMAGE } from "@/images";
import Image from "next/image";

import SocialIcons from "../socialIcons";

const HomeTitle = () => {
  return (
    <section className="relative min-h-[420px] flex justify-center items-center">
      <div className="absolute h-[420px] w-full -z-10">
        <Image
          src={MAIN_BANNER_IMAGE}
          fill
          alt="image"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col items-center gap-5 ">
        <h1 className="text-3xl font-bold h-full">RANTA</h1>
        <p className="font-semibold text-center">
          Share knowledge, articles, news, Web Dev and various Tech/IT
        </p>
        <SocialIcons />
      </div>
    </section>
  );
};

export default HomeTitle;
