"use client";
import React, { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    try {
      const response = await fetch("https://formspree.io/f/xeoekrbq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
      } else {
        setStatusMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-background font-[Orbitron] text-foreground flex items-center justify-center p-6">
      <div className="max-w-[80%] w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-4xl font-bold">Get in touch</h2>
          <p className="text-gray-400 mt-4">
            Drop me a line, give me a call, or send me a message by submitting
            the form.
          </p>
          <div className="mt-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📧</span>
              <a
                href="mailto:junaidparamberi@gmail.com"
                className="text-gray-300"
              >
                junaidparamberi@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <span className="text-gray-300">+971 58 197 6818</span>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="text-gray-300">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-transparent input rounded-none border border-inherit focus:ring-2 focus:ring-inherit focus:outline-none p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent input rounded-none border border-inherit focus:ring-2 focus:ring-inherit focus:outline-none p-2"
              required
            />
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="bg-transparent textarea rounded-none border border-inherit focus:ring-2 focus:ring-inherit focus:outline-none p-2"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-wide font-light btn-primary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>

          {/* Status message */}
          {statusMessage && (
            <div
              className={`alert mt-4 ${
                statusMessage.includes("success")
                  ? "alert-success"
                  : "alert-error"
              }`}
            >
              <span>{statusMessage}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
