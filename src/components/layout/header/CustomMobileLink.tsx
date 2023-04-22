interface ICustomMobileLinkProps {
  href: string;
  title: string;
  className?: string;
  toggle: () => void;
}

const CustomMobileLink = ({
  href,
  title,
  className = "",
  toggle,
}: ICustomMobileLinkProps) => {
  const handleClick = () => {
    toggle();
  };

  return (
    <button
      // href={href}
      className={`${className} relative group text-light my-4 text-3xl`}
      onClick={handleClick}
    >
      {title}

      <span className="h-[1px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-full ">
        &nbsp;
      </span>
    </button>
  );
};
export default CustomMobileLink;
