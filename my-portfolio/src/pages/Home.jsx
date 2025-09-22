import styles from "../components/Hero.module.css";
import heroImage from "../assets/hero.jpg";

const Home = () => {
  return (
    <section className={`${styles.heroContainer} w-full min-h-screen bg-blue-100 p-8`}>
      
    
   <h1 className="text-5xl font-bold mb-5 pt-30 ml-30">Hi, I'm Shehani</h1>

      <p className="text-xl mb-10 ml-30">
        Frontend Developer <br />
        Undergraduate, IT Department, University of Sri Jayewardenepura
      </p>

      <div className="flex space-x-1">
        <a 
        href="Projects"
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-30">
          My Projects
        </a>
        <a
        href="Contact"
        className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 ml-30">
          Contact Me
        </a>
      </div>

      <div className="flex-1 flex justify-center lg:justify-end mt-8 lg:mt-0">
        <div className="bg-white p-4 rounded-lg shadow-lg -mt-60 mr-30">
          <img 
          src={heroImage}
          alt="Shehani"
          className="w-60 h-60 object-cover rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;