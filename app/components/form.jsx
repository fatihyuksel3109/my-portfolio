"use client";
import React, { useRef, useState } from "react";
import { contactMeText } from "../data/data";
import emailjs from "@emailjs/browser";
import Image from "next/image";

const ContactForm = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_of09ivk",
        "template_vndwqao",
        form.current,
        "QnQU-Px75h_HHVEOj"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowModal(true);
          setTimeout(() => {
            setShowModal(false); // Hide the modal after 2 seconds
            window.location.href = "/"; // Redirect the user to the home page
          }, 2000);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="mx-auto max-w-2xl p-4 mt-8 mb-20 flex sm:flex-row flex-col bg-grey">
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content animation show">
            <Image
              src="/images/tickicon.png"
              width={20}
              height={20}
              alt="tick-icon"
            />
            <p className="modal-message">Email is sent.</p>
          </div>
        </div>
      )}

      <div className="text-start ml-1 mr-4 p-2 ">
        <h3 className="mb-5 font-semibold text-xl sm:text-2xl">
          {contactMeText.title}
        </h3>
        <p className="mb-5 font-medium text-lg sm:text-xl">
          {contactMeText.body}
        </p>
      </div>
      <div className="ml-5 bg-white py-2 px-7 flex-1">
        <h3 className="mb-5 font-semibold text-2xl">Contact me!</h3>
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="mb-5 font-medium text-lg"
        >
          <div className="w-full p-1 flex flex-col my-2">
            <label htmlFor="name"></label>
            <input
              name="name"
              className="p-1 bg-grey"
              required
              type="text"
              id="name"
              placeholder="Your Name..."
            />
          </div>
          <div className="w-full p-1 flex flex-col my-2">
            <label htmlFor="lastname"></label>
            <input
              name="lastname"
              className="p-1 bg-grey"
              required
              type="text"
              id="lastname"
              placeholder="Your Lastname..."
            />
          </div>
          <div className="w-full p-1 flex flex-col my-2">
            <label htmlFor="email"></label>
            <input
              name="email"
              className="p-1 bg-grey"
              required
              type="email"
              id="email"
              placeholder="Your E-mail..."
              minLength={5}
            />
          </div>
          <div className=" p-1">
            <textarea
              required
              className="w-full bg-grey"
              name="message"
              rows={6}
              placeholder="Please Enter Your Message..."
              minLength={10}
              maxLength={500}
            />
          </div>
          <div className="p-1">
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
