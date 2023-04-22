import { v4 as uuid } from "uuid";

export const headerLinks = [
  {
    title: "Ranta",
    href: "/",
    className: "text-2xl font-bold",
  },
  {
    title: "Blog",
    href: "/",
    className: "font-semibold",
  },
  {
    title: "About",
    href: "/",
    className: "font-semibold",
  },
];

const WebHeader = () => {
  return (
    <nav className="md:hidden flex justify-center items-center px-5 py-4 bg-[#191919]">
      {headerLinks.map((link) => (
        <a
          href={link.href}
          className={`p-5 mr-10 text[#EEEEEE] ${link.className}`}
          key={uuid()}
        >
          {link.title}
        </a>
      ))}
    </nav>
  );
};

export default WebHeader;
