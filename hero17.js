import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Script from "dangerous-html/react";
import PropTypes from "prop-types";

import "./hero17.css";

const Hero17 = (props) => {
  let history = useHistory();

  const handleButtonClick = () => {
    history.push("/explore-boards");
  };

  return (
    <div className="hero17-header78">
      {/* <Link to="/explore-boards" className="thq-button-filled hero17-button">
        <span className="thq-body-small">{props.action1}</span>
      </Link> */}
      <div className="hero17-column thq-section-padding thq-section-max-width">
        <div className="hero17-content">
          <h1 className="hero17-text thq-heading-1">{props.heading1}</h1>
          <p className="hero17-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="hero17-actions">
          <button
            className="thq-button-filled hero17-button"
            onClick={() => window.open("about:blank", "_blank")}
          >
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button
            className="thq-button-outline hero17-button1"
            onClick={handleButtonClick}
          >
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero17-content1">
        <div className="hero17-row-container thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image01 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image02 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image03 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image04 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image6Alt}
              src={props.image6Src}
              className="hero17-placeholder-image05 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero17-placeholder-image06 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero17-placeholder-image07 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero17-placeholder-image08 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero17-placeholder-image09 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero17-placeholder-image10 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image11 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
        <div className="hero17-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image12 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image13 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image14 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image15 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image16 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image12Alt}
              src={props.image12Src}
              className="hero17-placeholder-image17 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero17-placeholder-image18 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero17-placeholder-image19 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero17-placeholder-image20 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero17-placeholder-image21 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero17-placeholder-image22 thq-img-scale thq-img-ratio-1-1"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero17-placeholder-image23 thq-img-scale thq-img-ratio-1-1"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero17-container1">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  );
};

Hero17.defaultProps = {
  image3Src:
    "https://images.unsplash.com/photo-1494178270175-e96de2971df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwNnw&ixlib=rb-4.0.3&q=80&w=1080",
  image8Alt: "Hero Image",
  image2Src:
    "https://images.unsplash.com/photo-1684570862144-1b0e1f392428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwNnw&ixlib=rb-4.0.3&q=80&w=1080",
  image6Alt: "Hero Image",
  image11Src:
    "https://images.unsplash.com/photo-1559127452-829071a09516?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwNnw&ixlib=rb-4.0.3&q=80&w=1080",
  image5Alt: "Hero Image",
  image1Alt: "Fashion Inspiration Board",
  image7Src:
    "https://images.unsplash.com/photo-1617127891019-0e038034dd14?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwN3w&ixlib=rb-4.0.3&q=80&w=1080",
  image7Alt: "Hero Image",
  image12Alt: "Hero Image",
  image2Alt: "Fashion Trends Board",
  image6Src:
    "https://images.unsplash.com/photo-1616502844612-4b3d523fc00e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwN3w&ixlib=rb-4.0.3&q=80&w=1080",
  image12Src:
    "https://images.unsplash.com/photo-1534196511436-921a4e99f297?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwN3w&ixlib=rb-4.0.3&q=80&w=1080",
  image3Alt: "Outfit Ideas Board",
  image9Src:
    "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwOHw&ixlib=rb-4.0.3&q=80&w=1080",
  image11Alt: "Hero Image",
  action2: "Explore Boards",
  action1: "Get Started",
  image8Src:
    "https://images.unsplash.com/photo-1557777586-f6682739fcf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwOHw&ixlib=rb-4.0.3&q=80&w=1080",
  image5Src:
    "https://images.unsplash.com/photo-1617384326855-9a4b28ebb88e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwOXw&ixlib=rb-4.0.3&q=80&w=1080",
  image4Src:
    "https://images.unsplash.com/photo-1590156118008-98c92159207b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwOXw&ixlib=rb-4.0.3&q=80&w=1080",
  image10Alt: "Hero Image",
  image4Alt: "Hero Image",
  heading1: "Discover Your Style Inspiration",
  content1:
    "Create boards on Myntra to save your favorite fashion looks, trends, and outfit ideas. Get inspired and stay ahead in the fashion game!",
  image10Src:
    "https://images.unsplash.com/photo-1481487196290-c152efe083f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwOXw&ixlib=rb-4.0.3&q=80&w=1080",
  image9Alt: "Hero Image",
  image1Src:
    "https://images.unsplash.com/photo-1552529220-460eec1fd555?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYxMHw&ixlib=rb-4.0.3&q=80&w=1080",
};

Hero17.propTypes = {
  image3Src: PropTypes.string,
  image8Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image6Alt: PropTypes.string,
  image11Src: PropTypes.string,
  image5Alt: PropTypes.string,
  image1Alt: PropTypes.string,
  image7Src: PropTypes.string,
  image7Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image6Src: PropTypes.string,
  image12Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image9Src: PropTypes.string,
  image11Alt: PropTypes.string,
  action2: PropTypes.string,
  action1: PropTypes.string,
  image8Src: PropTypes.string,
  image5Src: PropTypes.string,
  image4Src: PropTypes.string,
  image10Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  heading1: PropTypes.string,
  content1: PropTypes.string,
  image10Src: PropTypes.string,
  image9Alt: PropTypes.string,
  image1Src: PropTypes.string,
};

export default Hero17;
