import React from "react";
import Navbar from "@/components/Navbar";
import Head from "next/head";

const AboutUsPage = () => {
  return (
    <>
 <Head>
        <title>About Us</title>
      </Head>
      <div className="flex items-center justify-center  bg-white w-full h-screen">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Me</h1>
          <p className="text-lg mb-6">
            I have a solid foundation in web development with a focus on MERN
            (MongoDB, Express.js, React.js, and Node.js) full-stack development.
            With 7-8 months of hands-on experience in MERN, I have gained
            valuable knowledge and proficiency in building dynamic and
            interactive web applications. During this time, I have successfully
            implemented various MERN projects, working on both the front-end and
            back-end components.
          
          </p>
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc ml-6 mb-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>Next.js</li>
            <li>Git</li>
          </ul>
          <h2 className="text-2xl font-bold mb-4">Links</h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/Aakash-Kashyap24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/akash-kumar-73b9211b3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/your-twitter-handle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
