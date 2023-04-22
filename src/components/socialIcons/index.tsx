import Image from "next/image";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

import {
  INSTAGRAM_ICON,
  TWITTER_ICON,
  // YOUTUBE_ICON,
  LINKEDIN_ICON,
} from "@/images";

const SocialIcons = () => {
  const iconsArr = [
    {
      icon: INSTAGRAM_ICON,
      link: "https://www.instagram.com/vishav_ranta/",
    },
    {
      icon: TWITTER_ICON,
      link: "https://twitter.com/RantaVishav",
    },
    // {
    //   icon: YOUTUBE_ICON,
    //   link: "https://www.youtube.com/channel/UCGsJtF8DNsvulS-wHaBUMEg",
    // },
    {
      icon: LINKEDIN_ICON,
      link: "https://www.linkedin.com/in/vishav-ranta-964964194/",
    },
  ];
  return (
    <div className="flex flex-wrap">
      {iconsArr.map((icon) => (
        <Link
          key={uuidv4()}
          href={icon.link}
          target="_blank"
          className="relative w-[50px] h-[50px] mx-4 svg-icon"
        >
          <Image src={icon.icon} fill alt="facebook-icon" />
        </Link>
      ))}
    </div>
  );
};

export default SocialIcons;
