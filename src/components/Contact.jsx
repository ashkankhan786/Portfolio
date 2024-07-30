import React, { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { BiSolidPhoneCall } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaLocationDot } from "react-icons/fa6";

const Contact = () => {
  const [result, setResult] = React.useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "efb99c7d-0e4f-4eaa-9d20-911ef6a9d7cb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-4 px-14" id="contact">
      <h2 className="text-4xl text-center my-12">Get in Touch</h2>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="md:w-1/2 w-full md:pl-16 mb-10"
        >
          <h3 className="mb-8 text-start bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
            Connect with Me
          </h3>
          <div className="flex md:gap-5 gap-2 mb-5">
            <IoIosMail className="text-2xl" />
            <a href="mailto:ashkankhan728@gmail.com">ashkankhan728@gmail.com</a>
          </div>
          <div className="flex md:gap-5 gap-2 mb-5">
            <BiSolidPhoneCall className="text-2xl" />
            <a href="tel:+917906649538">+917906649538</a>
          </div>
          <div className="flex md:gap-5 gap-2">
            <FaLocationDot className="text-xl" />
            <a href="https://maps.app.goo.gl/22qk2jsXqTYBWtHH9">
              Haldwani, Nainital, Uttarakhand - 263139
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center md:w-1/2 w-full md:px-10"
        >
          <h3 className="mb-4 text-start bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent">
            Contact Me
          </h3>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="py-1 px-3 rounded bg-slate-800 text-white border-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="py-1 px-3 rounded  bg-slate-800 text-white"
              />
              <textarea
                placeholder="Your Message"
                name="message"
                required
                rows={5}
                className="py-1 px-3 rounded  bg-slate-800 text-white"
              />
              <div>
                <button className="mt-4 mb-8 py-2 px-6 rounded bg-zinc-800">
                  Submit
                </button>
              </div>
              {success && (
                <div className="fixed top-16 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md">
                  Form submitted successfully!
                </div>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
