import { useState, useRef } from "react";
import styles from "../style/Contact.module.css";
import contactImage from "../assets/contact.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState("");
  const [errors, setErrors] = useState({});

  const validate = (data) => {
    const newErrors = {};
    if (!data.user_name) newErrors.user_name = "Name is required";
    if (!data.user_email) {
      newErrors.user_email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.user_email)) {
      newErrors.user_email = "Email is invalid";
    }
    if (!data.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length === 0) {
      emailjs
        .sendForm(
          "service_2cv1uvf",
          "template_b30yj2o",
          form.current,
          "FfGsNX-fclkT2Bkqw"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess("Message sent successfully!");
            form.current.reset();
            setErrors({});
          },
          (error) => {
            console.log(error.text);
            setSuccess("Failed to send message. Try again later");
          }
        );
    } else {
      setErrors(validationErrors);
      setSuccess("");
    }
  };

  return (
    <section
      className={`${styles.contactContainer} w-full min-h-screen bg-blue-100 p-8`}
    >
      <motion.h1
        className="text-4xl font-bold text-center mb-8 mt-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h1>

      <div className="flex flex-col lg:flex-row gap-10 items-start w-full">
        <div className="flex-1">
          <img
            src={contactImage}
            alt="Contact"
            className={styles.myImage}
          />
        </div>

        <div className="flex-1">
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col space-y-4 items-start w-full"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {errors.user_name && (
              <span className="text-red-500">{errors.user_name}</span>
            )}

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            {errors.user_email && (
              <span className="text-red-500">{errors.user_email}</span>
            )}

            <textarea
              name="message"
              placeholder="Your Message"
              className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 w-full"
            />
            {errors.message && (
              <span className="text-red-500">{errors.message}</span>
            )}

            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Send Message
            </button>

            {success && <span className="text-green-500">{success}</span>}
          </form>

          <div className="mt-8 flex space-x-6 text-2xl justify-center lg:justify-start">
            <a
              href="https://github.com/Shehani28"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="hover:text-gray-900 dark:hover:text-white transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/Shehani-Wijesinghe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="hover:text-blue-700 transition" />
            </a>
            <a href="mailto:sanuwijesinghe1@gmail.com">
              <FaEnvelope className="hover:text-red-600 transition" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;