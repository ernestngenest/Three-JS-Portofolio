"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const fromRef : any = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await emailjs.send(
        "service_8jbo6zc",
        "template_79bbqgu",
        {
          from_name: form.name,
          to_name: "Ernest",
          from_email: form.email,
          message: form.message,
        },
        "ZlQxywhZVVaY9c67W"
      );
      console.log(res);
      setLoading(false);
      alert("Message sent successfully");
      setForm({
        name: "",
        email: "",
        message: "",
      })
    } catch (error) {
      console.log(error);
      setLoading(false);
      alert("An error occured, Please try again");
    }
  };
  //service_8jbo6zc
  return (
    <section className="c-space my-10">
      <div className="relative min-h-screen flex items-center justify-center flex-col bg-gray-900 text-white">
        <img
          src={"/assets/terminal.png"}
          alt="terminal-bg"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="contact-container relative z-10 p-8 bg-opacity-90 rounded-lg shadow-lg">
          <h3 className="head-text mt-10 text-3xl font-bold">
            You 99% Need To Hire Me :) <span className="text-lg text-center"><br/> ~ Sun Tzu `The Art of Asking A Job` ~</span>
          </h3>
        
          <form
            ref={fromRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="field-label text-lg font-medium">
              {" "}
              Your Name{" "}
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="field-input p-3 rounded-md bg-gray-700 text-white"
              required
              placeholder="john doe"
            />
            <label className="field-label text-lg font-medium"> Your Email </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="field-input p-3 rounded-md bg-gray-700 text-white"
              required
              placeholder="johnDoe@gmail.com"
            />
            <label className="field-label text-lg font-medium"> Message </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="field-input p-3 rounded-md bg-gray-700 text-white"
              rows={5}
              required
              placeholder="Your message here..."
            />
            <button
              type="submit"
              className="field-btn p-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center"
            >
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow-up"
                className="field-btn_arrow ml-2"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
