import { useState } from "react";
import styles from "../style/Contact.module.css";
import contactImage from "../assets/contact.jpg";
import { FaGithub,FaLinkedin,FaEnvelope } from "react-icons/fa";


const Contact = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: ""});
    const [errors, setErrors] = useState({});
    const [success,setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) {
            newErrors.email = "Email is required";
        }else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email= "Email is invalid";
        }
        if (!formData.message) newErrors.message = "Message is required";
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length ===0) {
            setSuccess("Message sent successfully!");
            setFormData({ name: "", email: "", message: ""});
            setErrors({});
        } else {
            setErrors(validationErrors);
            setSuccess("");
        }

    };

    return (
        <section className={`${styles.contactContainer} p-8`}>
        <h2 className="text-3xl font-bold mb-8 mt-12 ml-150">Contact Me </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">

            <div className="flex-1">
                <img
                 src={contactImage}
                 alt="Contact"
                    className={styles.myImage}
                 />
            </div>

            <div className="flex-1">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 items-start">
                    <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                    />
                    {errors.name && <span className="text-red-500">{errors.name}</span>}

                <input
                    type="email"
                    name="email"
                    placeholder="Your-email"
                    value={formData.email}
                    onChange={handleChange}
                    className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
                />
                {errors.email && <span className="text-red-500">{errors.email}</span>}

                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 w-full"
                />
                {errors.message && <span className="text-red-500">{errors.message}</span>}

                <button
                 type="submit"
                 className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                 >
                    Send Message
                 </button>
                 {success && <span className="text-green-500">{success}</span>}
                </form>

                <div className="mt-8 flex space-x-6 text-2xl justify-center lg:justify-start">
                    <a href="https://github.com/Shehani28" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-gray-900 dark:hover:text-white transition" />

                    </a>
                    <a href="https://www.linkedin.com/in/Shehani Wijesinghe" target="_blank" rel="noopener noreferrer">
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