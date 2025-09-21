import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className= { `${styles.footerContainer} bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 fixed bottom-0 w-full p-6`}>
            <p> © Shehani. All rights reserved.</p>

            <div className={styles.socialIcons}>
                <a href="https://github.com/Shehani28" target="_blank" rel="noreferrer">
                <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/Shehani Wijesinghe" target="_blank" rel="noreferrer">
                <FaLinkedin size={24} />
                </a>
                <a href="mailto:sanuwijesinghe1@gmail.com">
                    <FaEnvelope size={24} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;