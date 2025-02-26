"use client";
import React from "react";
import Connectlink from "./Connectlink";
import useState from "react";

const Email = () => {
  const [messageVisible, setMessageVisible] = useState.useState(false);
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "7bd11946-e883-4db0-b54a-2049ce5efcf7");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setMessageVisible(true);
        setTimeout(() => setMessageVisible(false), 3000); // Hide message after 3 seconds
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <section
      className="grid justify-center lg:grid-cols-[1.5fr_1px_2fr] lg:w-3/4 mx-auto  my-0 md:my-12 py-20 gap-4 relative"
      id="contact"
    >
      <div className="text-center lg:text-left z-10">
        <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Let us connect
        </span>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Have a question or want to collaborate? Feel free to reach out!{" "}
        </p>

        <div className="socials flex flex-row gap-2 justify-center lg:justify-start">
          <Connectlink
            href="https://github.com/tanvibansal2004"
            path="/images/github.png"
          />
          <Connectlink
            href="https://www.linkedin.com/in/tanvi-bansal-900191280/"
            path="/images/linkedin.png"
          />
        </div>
      </div>

      {/* vertical line */}
      <div className="hidden lg:block w-[1px] bg-[#33353F] ml-7"></div>

      <div>
        <form className="flex flex-col gap-5 md:ml-20" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder=""
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></input>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              placeholder=""
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></input>
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              placeholder=""
              className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
      {messageVisible && (
        <div className="flex fixed bottom-10 right-6 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg">
          Message sent
          <img
            src="/images/check.png"
            height={10}
            width={20}
            className="ml-2"
          ></img>
        </div>
      )}
    </section>
  );
};
export default Email;
