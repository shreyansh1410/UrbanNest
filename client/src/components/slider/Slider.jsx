import { useState } from "react";
import "./slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);
  const imageArraySize = images.length;

  const decreaseImageIndex = () => {
    if (imageIndex != 0) setImageIndex(imageIndex - 1);
    else {
      setImageIndex(imageArraySize - 1);
    }
  };

  const increaseImageIndex = () => {
    if (imageIndex != imageArraySize - 1) setImageIndex(imageIndex + 1);
    else {
      setImageIndex(0);
    }
  };

  // console.log(imageArraySize)
  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow">
            <img
              src="/arrow.png"
              alt="leftarrow"
              onClick={decreaseImageIndex}
            ></img>
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]}></img>
          </div>
          <div className="arrow">
            <img
              src="/arrow.png"
              className="right"
              onClick={increaseImageIndex}
            ></img>
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img
          src={images[0]}
          alt="bigimage"
          onClick={() => setImageIndex(0)}
        ></img>
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index + 1}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
