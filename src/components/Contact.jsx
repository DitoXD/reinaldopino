import React from "react";
import Button from "./Button";
import siteConfig from "../data/siteConfig.json";

const Contact = () => {
  const { personal, contact } = siteConfig;

  return (
    <>
      <div
        name="contact"
        className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action={contact.formEndpoint}
          className="flex flex-col max-w-[600px] w-full"
          data-aos="fade-up"
        >
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-[#1abbec]">
              {contact.title}
            </p>
            <p className="py-4">
              {contact.description} -{" "}
              <a
                className="font-bold hover:text-[#1abbec] transition-colors duration-200"
                href={`mailto:${personal.email}`}
              >
                {personal.email}
              </a>
            </p>
          </div>
          <input
            className="p-2 bg-[#ccd6f6] text-black"
            type="text"
            placeholder="Name"
            name="name"
            required
            aria-label="Your name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] text-black"
            type="email"
            placeholder="Email"
            name="email"
            required
            aria-label="Your email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 text-black"
            name="message"
            rows="10"
            placeholder="Message"
            required
            aria-label="Your message"
          ></textarea>
          <Button type="submit" variant="outline" className="my-8 mx-auto">
            {contact.submitText}
          </Button>
        </form>
      </div>
      <div className="w-full h-24 bg-[#0a192f] text-white">
        <div className="w-full h-full bg-gradient-to-b from-transparent to-black pt-8"></div>
      </div>
    </>
  );
};

export default Contact;
