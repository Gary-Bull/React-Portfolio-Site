import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { ABOUT_ME } from "../utils/data";
import ContactInfoCard from "../components/ContactInfoCard";

const ContactMe = () => {
  return (
    <section id="contact">
      <div className="container max-w-7xl mx-auto p-10">
        <div className="w-full lg:w-[1024px] mx-auto">
          <h4 className="section-title">Contact Me</h4>
          <p className="text-sm text-center mt-4 leading-6">
            A versatile developer with a strong foundation in front-end and
            modern technologies. I have experience in building web applications
            using React, Next.js, and Tailwind CSS. I also have experience in
            building mobile applications using Swift. I am always eager to learn
            new technologies and improve my skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 mt-16">
          <div>
            <a href="mailto:webdev.gary@gmail.com">
              <ContactInfoCard icon={<IoMdMail />} text={ABOUT_ME.email} />
            </a>
          </div>
          <div>
            <a href={ABOUT_ME.linkedIn}>
              <ContactInfoCard icon={<FaLinkedin />} text={"LinkedIn"} />
            </a>
          </div>
          {/* <form className="flex flex-col">
            <input
              type="text"
              name="fullname"
              id=""
              placeholder="Full Name"
              className="input-box"
              autoComplete="off"
            />
            <input
              type="email"
              name="email"
              id=""
              placeholder="Email"
              className="input-box"
              autoComplete="off"
            />
            <textarea
              type="email"
              name="message"
              id=""
              placeholder="Message"
              rows={2}
              className="input-box"
              autoComplete="off"
            />
            <button className="action-btn btn-scale-anim">SUBMIT</button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
