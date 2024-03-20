import "./slide.css";
import { useState } from "react";

export default function Carousel() {
  const images = [
    {
      image_url:'https://i.ibb.co/nQxkz1t/Whats-App-Image-2024-03-20-at-8-41-22-PM.jpg',
    },
    {
      image_url:'https://i.ibb.co/XZ5cy3x/Whats-App-Image-2024-03-20-at-8-41-21-PM-1.jpg',
    },
    {
      image_url:'https://i.ibb.co/n0GwMwG/Whats-App-Image-2024-03-20-at-8-41-21-PM.jpg',
    }
    // {
    //   image_url:'',
    //   caption: "Image 4"
    // }
  ];

  return (
    <div className="App">
      <SlideShow images={images} />
    </div>
  );
}

const SlideShow = ({ images }) => {
  const [active, setActive] = useState(0);

  const onNext = () => {
    if (active < images.length - 1) {
      setActive(active + 1);
    }
  };

  const onPrev = () => {
    if (active > 0) {
      setActive(active - 1);
    }
  };

  return (
    <div className="slideshow">
      {images.map((e, i) => (
        <Slide {...e} key={e.caption} active={i === active} />
      ))}
      <div className="bulleted-navigation">
        {images.map((e, i) => (
          <div
            className={`dot ${i === active ? "active" : ""}`}
            key={e.caption}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
      {/* <div className="next-prev-navigation">
        <div className="navigation next" onClick={onNext}>
          &gt;
        </div>
        <div className="navigation prev" onClick={onPrev}>
          &lt;
        </div>
      </div> */}
    </div>
  );
};

const Slide = ({ image_url, caption, active }) => {
  return (
    <div className={`slide ${active ? "active" : ""}`}>
      <img src={image_url} alt={caption} />
      <span>{caption}</span>
    </div>
  );
};
