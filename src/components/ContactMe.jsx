import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactMe = () => {
  const form = useRef();
  const notify = () => toast("mail succesfully sent!");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mlmqrxf",
        "template_hz49ehj",
        form.current,
        "rkOAJHdowtM_pcolT"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="flex items-center justify-center h-screen">
      <div className="bg-gray-800 p-8 rounded-md shadow-md max-w-md w-full">
        <h1 className="text-3xl text-white font-medium mb-4">Contact Me</h1>

        <form ref={form} onSubmit={sendEmail} className="mb-4">
          <div className="mb-4">
            <label
              htmlFor="user_name"
              className="block text-sm font-medium text-gray-300"
            >
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="mt-1 p-2 w-full border bg-gray-700 border-gray-300 rounded-md focus:outline-none hover:border-blue-500 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="mt-1 p-2 w-full border bg-gray-700 border-gray-300 rounded-md focus:outline-none hover:border-blue-500 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-300"
            >
              Message
            </label>
            <textarea
              name="message"
              className="mt-1 p-2 w-full bg-gray-700 border border-gray-300 focus:outline-none hover:border-blue-500 text-white rounded-md"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md focus:outline-none hover:bg-green-600"
          >
            Send
          </button>
          <ToastContainer autoClose={1000} theme="dark"/>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
