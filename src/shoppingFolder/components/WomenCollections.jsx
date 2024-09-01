import React from 'react'

const WomenCollections = (props) => {
    const {title, image1, image2, image3, image4,image5, image6} = props.ladiesFashion;

  return (
    <div className='womenCollectionSession'>
      <h2>{title}</h2>
      <div className="bannerBox">
        <img src="assets/LadiesBanner.gif" alt="banner" />
      </div>
      <div className="womenImages">
      <img src={image1} alt="image" />
      <img src={image2} alt="image" />
      <img src={image3} alt="image" />
      <img src={image4} alt="image" />
      <img src={image5} alt="image" />
      <img src={image6} alt="image" />
    </div>
    </div>
  )
}

export default WomenCollections
