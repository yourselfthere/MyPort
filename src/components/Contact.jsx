import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ggjtqv6", "template_6s0xzta", formRef.current, {
        publicKey: "jkExEPBXGcniWDS7P",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setError(false);
          toast.success("Email sent successfully!", {
            position: "top-center",
            autoClose: 3000,
          });
          formRef.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
          toast.error("Failed to send email. Please try again.", {
            position: "top-center",
            autoClose: 3000,
          });
        }
      );
  };

  return (
    <>
      <div className="flex flex-wrap m-24">
        <div className="flex text-white lg:w-1/2">
          <div className="font-sans text-center">
            <h2 className="font-bold text-6xl m-2 mr-20 text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-gray-200 ">
              Let's Get in Touch 
            </h2>
            <h3 className="mx-2 my-9 text-2xl bg-gradient-to-r from-slate-300 to-slate-500 text-transparent bg-clip-text font-semibold mr-24">
            <span className="">🤝</span>
              I'd love to hear from you!
            </h3>
          </div>
        </div>
        <div className="flex flex-col text-white lg:w-1/2">
          <form
            ref={formRef}
            className="flex flex-col ml-10 lg:m-2 lg:ml-14"
            onSubmit={sendEmail}
          >
            <label className="text-lg" htmlFor="name">
              Name
            </label>
            <input
              className="p-2 my-2 rounded-lg text-black"
              type="text"
              name="name"
              id="name"
              placeholder="Your name"
            />
            <label className="text-lg" htmlFor="email">
              Email
            </label>
            <input
              className="p-2 my-2 rounded-lg text-black"
              type="email"
              name="email"
              id="email"
              placeholder="Your email"
            />
            <label className="text-lg" htmlFor="message">
              Message
            </label>
            <textarea
              className="p-2 my-2 rounded-lg text-black "
              name="message"
              id="message"
              cols="30"
              rows="5"
              required
              placeholder="Your message..."
            ></textarea>
            <button className="bg-transparent  p-2 m-2 rounded-lg border-4 border-slate-700 bg-gradient-to-r from-neutral-950 to-slate-700 hover:bg-slate-700 hover:border-slate-700 hover:text-white transition-transform duration-300 hover:scale-105 lg:mx-2">
              Submit
            </button>
            {error && (
              <p className="text-red-500 text-center">Something went wrong!</p>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
