import React from "react";
import { motion } from "framer-motion";
import "./App.css";

const photos = [
  { year: 2004, src: "/slideshow/2004.jfif" },
  { year: 2005, src: "/slideshow/2005.jfif" },
  { year: 2006, src: "/slideshow/2006.jfif" },
  { year: 2007, src: "/slideshow/2007.jfif" },
  { year: 2008, src: "/slideshow/2008.jfif" },
  { year: 2009, src: "/slideshow/2009.jfif" },
  { year: 2010, src: "/slideshow/2010.jfif" },
  { year: 2011, src: "/slideshow/2011.jfif" },
  { year: 2012, src: "/slideshow/2012.jfif" },
  { year: 2013, src: "/slideshow/2013.jfif" },
  { year: 2014, src: "/slideshow/2014.jfif" },
  { year: 2015, src: "/slideshow/2015.jfif" },
  { year: 2016, src: "/slideshow/2016.jfif" },
  { year: 2017, src: "/slideshow/2017.jfif" },
  { year: 2018, src: "/slideshow/2018.jfif" },
  { year: 2019, src: "/slideshow/2019.jfif" },
  { year: 2020, src: "/slideshow/2020.jfif" },
  { year: 2021, src: "/slideshow/2021.jfif" },
  { year: 2022, src: "/slideshow/2022.jfif" },
  { year: 2023, src: "/slideshow/2023.jfif" },
  { year: 2024, src: "/slideshow/2024.jpg" },
];


function App() {
  return (
    <div className="slideshow">
      {photos.map((photo, index) => (
        <motion.div
          key={index}
          className="photo-container"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>{photo.year}</h2>
          <img src={photo.src} alt={photo.year} className="photo" />
        </motion.div>
      ))}

      <motion.div
        className="message-box"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>Happy Brithday!</h2>
        <p>It was <b>like</b> super wild and stuff reminiscing on all of these past experiences while looking through the photos for the slideshow. Thank you for all you have done and all you will hopefully continue to do! I love you.</p>
        <h3>- Jari</h3>
      </motion.div>
    </div>
  );
}

export default App;
