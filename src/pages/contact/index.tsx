import { useTitle } from "react-use";
import { socialIcons } from "../../constants";

export const Contact = () => {
  useTitle("Contact | Shrihari");
  return (
    <section className="flex flex-col items-center justify-center w-full h-full max-w-screen-xl gap-10 p-4 overflow-scroll no-scrollbar">
      <h2 className="text-2xl font-bold md:text-4xl">
        For Any queries and questions please mail me:
      </h2>
      <a href="mailto:shriharim006@gmail.com">
        <strong className="p-2 text-2xl font-bold text-transparent transition-all duration-300 md:text-5xl bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 hover:bg-gradient-to-l">
          shriharim006@gmail.com
        </strong>
      </a>

      <div className="flex gap-5 !mt-5">
        {socialIcons.map(({ icon, url }, index) => (
          <a
            href={url}
            key={index}
            className="w-10 h-10 group "
            target="_blank"
          >
            <img
              src={icon}
              width="24"
              height="24"
              alt="icon"
              className="w-10 h-10 transition-all duration-300 translate-y-0 md:group-hover:-translate-y-5"
            />
          </a>
        ))}{" "}
      </div>
    </section>
  );
};

export default Contact;
