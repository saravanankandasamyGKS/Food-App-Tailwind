import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-container max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
      <h1 className="text-3xl font-bold text-green-800 mb-4 text-center">
        Contact Us
      </h1>
      <p className="text-green-600 text-center mb-8">
        We'd love to hear from you! Fill out the form below to get in touch.
      </p>

      <form className="contact-form space-y-6">
        <div className="form-group flex flex-col">
          <label htmlFor="name" className="text-green-700 font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            required
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="form-group flex flex-col">
          <label htmlFor="email" className="text-green-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            required
            className="border border-gray-300 rounded p-3 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        <div className="form-group flex flex-col">
          <label
            htmlFor="message"
            className="text-green-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            rows="5"
            placeholder="Your Message"
            required
            className="border border-gray-300 rounded p-3 resize-none focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
