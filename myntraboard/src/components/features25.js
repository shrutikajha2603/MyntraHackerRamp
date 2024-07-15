import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features25.css'

const Features25 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features25-container1 thq-section-max-width">
        <div className="features25-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features25-tab-horizontal"
          >
            <div className="features25-divider-container">
              {activeTab === 0 && <div className="features25-container2"></div>}
            </div>
            <div className="features25-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features25-tab-horizontal1"
          >
            <div className="features25-divider-container1">
              {activeTab === 1 && <div className="features25-container3"></div>}
            </div>
            <div className="features25-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features25-tab-horizontal2"
          >
            <div className="features25-divider-container2">
              {activeTab === 2 && <div className="features25-container4"></div>}
            </div>
            <div className="features25-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
        <div className="features25-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features25-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features25-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features25-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
      </div>
    </div>
  )
}

Features25.defaultProps = {
  feature3Description:
    'Collaborate with friends or fashion enthusiasts by sharing boards and ideas for collective inspiration.',
  feature1ImgAlt: 'Create Boards Image Alt Text',
  feature1Description:
    'Easily create boards on Myntra to save and organize your fashion inspiration and ideas.',
  feature3ImgAlt: 'Collaborate with Others Image Alt Text',
  feature2Title: 'Discover Trends',
  feature1Title: 'Create Boards',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1533038590840-1cde6e668a91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwNnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1501213045308-cfe6e352d850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwN3w&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Description:
    'Explore the latest fashion trends and styles curated by other users on Myntra.',
  feature3Title: 'Collaborate with Others',
  feature2ImgAlt: 'Discover Trends Image Alt Text',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1612731486606-2614b4d74921?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyMDY3MTYwN3w&ixlib=rb-4.0.3&q=80&w=1080',
}

Features25.propTypes = {
  feature3Description: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
}

export default Features25
