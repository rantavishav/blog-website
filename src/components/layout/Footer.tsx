import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
font-medium text-lg dark:text-light dark:border-light sm:text-base 
"
    >
      <div className="py-8 flex  sm:gap-2 items-center justify-around flex-wrap text-xl">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className="flex items-center lg:py-2">
          Build With{" "}
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          by&nbsp; Vishav
        </div>
        <Link
          href="mailto:rantavishav49@gmail.com"
          target={"_blank"}
          className="underline
        underline-offset-2
        "
        >
          Say hello
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
