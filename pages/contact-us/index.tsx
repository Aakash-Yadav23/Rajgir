import React, { useState } from "react";
import axios from "axios";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post("/api/contact", {
        name,
        email,
        phoneNumber,
        message,
      });

      setIsLoading(false);
      setSuccessMessage(response.data.message);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setMessage("");
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white rounded shadow p-6 max-w-lg w-full">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        {isError && (
          <div className="text-red-500 mb-4">
            Error sending email. Please try again.
          </div>
        )}
        {successMessage && (
          <div className="text-green-500 mb-4">{successMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none"
              placeholder="Your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none"
              placeholder="Your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
