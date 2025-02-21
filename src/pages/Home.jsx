import bg1 from "../assets/Images/bg1.webp";
import bg1S from "../assets/Images/bg1second.webp";
import img1 from "../assets/Images/img1.webp"
import img2 from "../assets/Images/img2.webp"
import img3 from "../assets/Images/img3.webp"
import img4 from "../assets/Images/img4.webp"
import img5 from "../assets/Images/img5.webp"
import img6 from "../assets/Images/img6.webp"
import img7 from "../assets/Images/img7.webp"
import img8 from "../assets/Images/img8.webp"
import img9 from "../assets/Images/img9.webp"
import img10 from "../assets/Images/img10.webp"
import img11 from "../assets/Images/img11.webp"
import bg3 from "../assets/Images/bg3.webp"
import bg4 from "../assets/Images/bg4.webp"
import bg5 from "../assets/Images/bg5.webp"
import bg8 from "../assets/Images/bg8.webp"
import bg6 from "../assets/Images/bg6.jpg"
import bg7 from "../assets/Images/bg7.png"


const Home = () => {


  const classes = [
    { image: img1, title: "Muay Thai" },
    { image: img2, title: "Fitness" },
    { image: img3, title: "MMA" },
    { image: img4, title: "BJJ" },
    { image: img5, title: "Boxing" },
    { image: img6, title: "Recovery" },
  ];


  return (
    <div>
      <section
        className="relative w-full h-[700px] bg-cover bg-center flex items-center px-3"
        style={{ backgroundImage: `url(${bg1S})` }}
      >
        <img
          src={bg1}
          alt="bg1"
          className="absolute right-0 top-0 h-full object-cover"
        />
        <div className="absolute left-6 sm:left-12 max-w-xs sm:max-w-lg text-white">
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight uppercase">
            Martial arts.
            <br />
            From Kreuzberg.
            <br />
            With Love.
          </h1>
          <p className="mt-4 text-base sm:text-lg">
            Come by and train with us in the heart of Berlin. A fantastic
            community with experienced coaches awaits you. Together, we bring out
            the best in you.
          </p>
          <button className="mt-6 px-6 py-3 text-base sm:text-lg uppercase font-semibold border-2 border-gradient bg-white text-black transition-all duration-300 hover:bg-black hover:text-white">
            Discover all classes
          </button>
        </div>
      </section>
      
      <section className="bg-[#e8e8e8] py-32 px-6">
  <div className="text-center">
    <h1 className="text-7xl font-extrabold uppercase mb-12 relative">
      OUR CLASSES
      <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-2 w-40 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600"></span>
    </h1>

    <p className="mt-6 text-lg max-w-4xl mx-auto">
      On over 1500 m², we offer you a broad spectrum of martial arts, fitness, and recovery. You decide for yourself whether it's Mixed Martial Arts, Muay Thai, Brazilian Jiu-Jitsu, boxing, or wrestling – at Fenriz Gym, you'll find everything a martial artist could wish for. Whether it's for a first trial training or as an ambitious competitor, we have the right course for you. For your active recovery, you can also attend our yoga classes or book a relaxing massage.
    </p>
  </div>

  <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
    {classes.map(({ image, title }, index) => (
      <div key={index} className="relative group">
        <img src={image} alt={title} className="w-full h-auto object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex flex-col justify-center items-center text-white">
          <h3 className="text-2xl font-bold uppercase">{title}</h3>
          <button className="mt-3 px-5 py-2 uppercase font-semibold border-2 border-white bg-white text-black opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:bg-black hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    ))}
  </div>
</section>
<section className="relative bg-black text-white py-16 px-6">
  <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center">
    {/* Left Side - Text */}
    <div className="md:w-1/2">
      <h1 className="text-6xl md:text-7xl font-extrabold uppercase relative inline-block">
        TRIAL TRAINING
        <span className="absolute left-0 bottom-0 h-3 w-full bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600"></span>
      </h1>
      <p className="mt-6 text-lg">
        You want to try out a free training session with us? No problem! Just come by during our regular opening hours and talk to our team at the desk.
        There, we'll advise you, find a suitable date together, and give you a tour of the gym.
        Please note that due to high demand, we can rarely offer same-day appointments. For additional useful information about your trial training, please visit our 
        <span className="underline cursor-pointer"> Helpcenter</span>.
      </p>
    </div>

    {/* Right Side - Image */}
    <div className="md:w-1/2 flex justify-end">
      <img src={bg3} alt="Trial Training" className="w-full max-w-md md:max-w-lg" />
    </div>
  </div>
</section>
<section
  className="relative w-full h-[700px] bg-cover bg-center flex items-center px-6 text-white"
  style={{ backgroundImage: `url(${bg4})` }}
>
  <div className="max-w-4xl mx-auto text-center">
    <h1 className="text-6xl md:text-7xl font-extrabold uppercase">
      Join Our Community
    </h1>
    <p className="mt-6 text-lg">
      Experience the power of martial arts and fitness in an environment that
      welcomes all skill levels. Whether you’re looking to compete or just stay
      fit, Fenriz Gym has something for you.
    </p>
    <button className="mt-6 px-6 py-3 text-lg uppercase font-semibold border-2 border-white bg-white text-black transition-all duration-300 hover:bg-black hover:text-white">
      Get Started Today
    </button>
  </div>
</section>
<section className="bg-[#e8e8e8] py-32 px-6 text-center">
  <h1 className="text-6xl md:text-7xl font-extrabold uppercase relative inline-block">
    ABOUT US
    <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-2 w-40 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600"></span>
  </h1>
  
  <p className="mt-6 text-lg max-w-4xl mx-auto">
    We founded the gym in 2010 and have been based at Moritzplatz ever since. Originally starting as a pure MMA gym, over time, we have evolved into a hub for various martial arts with a focus on MMA, BJJ, and Muay Thai.
  </p>

  <p className="mt-4 text-lg max-w-4xl mx-auto">
    Seven days a week, our team and community ensure a vast array of activities through over 140 classes. Our fitness area and spacious mat areas provide opportunities for independent strength and technique training or sparring sessions with friends.
  </p>

  <button className="mt-6 px-6 py-3 text-lg uppercase font-semibold border-2 border-black bg-black text-white transition-all duration-300 hover:bg-white hover:text-black">
    Learn More
  </button>
</section>
<section
  className="w-full h-[950px] bg-cover bg-center"
  style={{ backgroundImage: `url(${bg5})` }}
></section>

<section className="bg-[#e8e8e8] py-24 px-6">
  <div className="text-center">
    <h1 className="text-7xl font-extrabold uppercase mb-12 relative">
      EVENTS
      <span className="absolute left-1/2 -translate-x-1/2 bottom-[-10px] h-2 w-40 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600"></span>
    </h1>
    <p className="mt-4 text-lg max-w-3xl mx-auto">
      Seminars with local and international martial artists or tournaments in all areas are regularly featured in our program.
    </p>
  </div>

  <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
    {/* Event 1 */}
    <div className="relative bg-black text-white">
      <img
        src={bg6}
        alt="Boxsparring with Luciano Robledo"
        className="w-full h-auto object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-2xl font-bold uppercase text-purple-400">
          Boxsparring with Luciano Robledo
        </h3>
      </div>
      <div className="p-6 text-center">
        <h4 className="text-xl font-semibold uppercase">Boxsparring with Luciano</h4>
        <p className="text-sm font-bold mt-2">📅 Saturdays</p>
        <p className="mt-2 text-sm">
          Boxsparring for experienced boxers. Every Saturday from 13:00 till 15:00 at Fenriz Gym.
        </p>
        <button className="mt-4 px-4 py-2 uppercase font-semibold border-2 border-white bg-white text-black transition-all duration-300 hover:bg-black hover:text-white">
          Learn More
        </button>
      </div>
    </div>

    {/* Event 2 */}
    <div className="relative bg-black text-white">
      <img
        src={bg7}
        alt="Gracie Academy Berlin: Open Mat"
        className="w-full h-auto object-cover opacity-50"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <h3 className="text-2xl font-bold uppercase text-blue-400">
          Gracie Academy Berlin: Open Mat
        </h3>
      </div>
      <div className="p-6 text-center">
        <h4 className="text-xl font-semibold uppercase">Gracie Academy Berlin: Open Mat</h4>
        <p className="text-sm font-bold mt-2">📅 Sundays</p>
        <p className="mt-2 text-sm">Open Mat for Grappling and BJJ.</p>
        <button className="mt-4 px-4 py-2 uppercase font-semibold border-2 border-white bg-white text-black transition-all duration-300 hover:bg-black hover:text-white">
          Learn More
        </button>
      </div>
    </div>
  </div>

  <div className="mt-12 flex justify-center">
    <button className="px-6 py-3 uppercase font-semibold border-2 border-black bg-black text-white transition-all duration-300 hover:bg-white hover:text-black">
      All Events
    </button>
  </div>
</section>
<section className=" bg-cover bg-center h-screen"
style={{ backgroundImage: `url(${bg8})` }}
>
</section>
<section className="bg-black text-white px-6 md:px-24 py-16 flex flex-col md:flex-row justify-between items-start">
  <div className="w-full md:w-1/2 mb-8 md:mb-0">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 inline-block px-4 py-1">
        FAQ & CONTACT
      </span>
    </h2>
    <div className="space-y-4">
      <p>Do you have questions about the gym, the classes, the trial training, or your membership?</p>
      <p>Visit our <a href="#" className="underline">Helpcenter</a>, browse through our FAQs, or let us assist you through our chat.</p>
      <p>If your questions aren’t answered in our Helpcenter, send us an E-Mail.</p>
      <p>For business-related questions, workshops, or other collaborations, click on the "Collaborations" button below.</p>
      <p>We are happy to help!</p>
    </div>
    <div className="flex flex-wrap gap-4 mt-6">
      <button className="bg-white text-black px-6 py-2 font-bold flex-1 md:flex-none">HELPCENTER</button>
      <button className="bg-white text-black px-6 py-2 font-bold flex-1 md:flex-none">E-MAIL US</button>
      <button className="bg-white text-black px-6 py-2 font-bold flex-1 md:flex-none">COLLABORATIONS</button>
    </div>
  </div>
  <div className="w-full md:w-96">
    <img src={img7} alt="Map location" className="w-full h-auto" />
  </div>
</section>
<section className="bg-gray-100 text-black px-6 md:px-24 py-16 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">
    <span className="bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 inline-block px-4 py-1">
      SHOP
    </span>
  </h2>
  <p className="mb-2">Fancy some Fenriz, Kardia, or Gracie merchandise? In our online shop, you can find T-shirts, hoodies, caps, and more.</p>
  <p className="mb-8">Need training gear like boxing gloves, rashguards, or Gis? You can get those in our gym, and we're happy to assist you at the counter.</p>

  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
    {[img8, img9, img10, img11].map((image, index) => (
      <div key={index} className="bg-white shadow-lg p-4 flex flex-col items-center">
        <img 
          src={image} 
          alt={`Product ${index + 1}`} 
          className="w-full h-auto mb-4 transition-transform duration-300 hover:-rotate-3"
        />
        <button className="border border-black text-black px-6 py-2 font-bold transition duration-300 hover:bg-black hover:text-white">
          BUY NOW
        </button>
      </div>
    ))}
  </div>

  <button className="bg-black text-white px-6 py-2 font-bold mt-8 transition duration-300 hover:bg-white hover:text-black border border-black">
    VISIT SHOP
  </button>
</section>


      
    </div>
  );
};

export default Home;
