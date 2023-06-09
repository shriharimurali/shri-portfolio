import {
  MailIcon,
  GitHubIcon,
  TwitterIcon,
  LinkedInIcon,
  MediumIcon,
} from "../assets";

export const Footer = () => {
  return (
    <footer className="flex flex-col text-center md:flex-row gap-4 md:gap-0 justify-between items-center py-[50px] px-[80px] pt-[0] md:pt[50px] w-full">
      <div className="w-[210px]">
        <span>Designed &amp; Developed by</span>
        <div>
          <span>Shrihari Murali </span>
          <span>@2023</span>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <a
          href="mailto:shriharim006@gmail.com"
          target="_blank"
          title="email"
          className="w-4 h-4 md:hover:text-yellow-400 transition-all duration-200"
        >
          <MailIcon />
        </a>
        <a
          href="https://github.com/shriharimurali"
          target="_blank"
          title="github"
          className="w-4 h-4 md:hover:text-violet-600 transition-all duration-200"
        >
          <GitHubIcon />
        </a>
        <a
          href="https://twitter.com/ShrihariMurali"
          target="_blank"
          title="twitter"
          className="w-4 h-4 hover:text-blue-500 transition-all duration-200"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/shrihari-m-a080526b/"
          target="_blank"
          title="linkedin"
          className="w-4 h-4 md:hover:text-blue-800 transition-all duration-200"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://medium.com/@shriharim006"
          target="_blank"
          title="linkedin"
          className="w-4 h-4 md:hover:text-green-800 transition-all duration-200"
        >
          <MediumIcon />
        </a>
      </div>
    </footer>
  );
};
