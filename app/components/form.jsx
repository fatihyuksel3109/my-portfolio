import React from "react";
import { contactMeText } from "../data/data";

const ContactForm = () => {
  async function handleSubmit(event) {
    event.preventDefault();

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      phone: String(event.target.phone.value),
      message: String(event.target.message.value),
    };
    clg
  }

  return (
    <div className="mx-auto max-w-2xl p-6 mt-8 mb-20 flex sm:flex-row flex-col bg-grey-light">
      <div className="text-start mr-5 p-2 ">
        <h3 className="mb-5 font-semibold text-xl sm:text-2xl">
          {contactMeText.title}
        </h3>
        <p className="mb-5 font-medium text-lg sm:text-xl">
          {contactMeText.body}
        </p>
      </div>
      <div className="ml-5">
        <h3 className="mb-5 font-semibold text-2xl">Contact Me!</h3>
        <form className="mb-5 font-medium text-xl">
          <div className="w-full p-2 flex flex-col my-2">
            <label htmlFor="name"></label>
            <input
              className="p-1"
              required
              type="text"
              id="name"
              placeholder="Your Name..."
            />
          </div>
          <div className="w-full p-2 flex flex-col my-2">
            <label htmlFor="email"></label>
            <input
              className="p-1"
              required
              type="email"
              id="email"
              placeholder="Your E-mail..."
              minLength={5}
            />
          </div>
          <div className="w-full p-2 flex flex-col my-2">
            <label htmlFor="phone"></label>
            <input
              className="p-1"
              required
              type="phone"
              id="phone"
              placeholder="Your Phone Number..."
              minLength={11}
            />
          </div>
          <div className=" p-2">
            <label htmlFor="message"></label>
            <textarea
              required
              className="w-full"
              name="message"
              rows={5}
              placeholder="Please Enter Your Message..."
              minLength={10}
              maxLength={500}
            />
          </div>
          <div className="p-2">
            <button
              type="submit"
              className="px-4 py-1 bg-blue text-white font-medium"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
