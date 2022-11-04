import React, {useState} from 'react'
import ThumbNails from './ThumbNails'
import { IMGS } from '../App'

export default function Gallery() {
  const [currentImg, setCurrentImg] = useState(0)

  return (
    <div className="gallery">
      <div className="gallery__current">
        <img
          src={IMGS[currentImg].main}
          alt="product" 
        />
        <div className="gallery__current__arrow">
          <img
            src="./images/icon-next.svg"
            alt="next"
          />
        </div>
        <div className="gallery__current__arrow">
          <img
            src="./images/icon-previous.svg"
            alt="previous"
          />
        </div>
      </div>
      <ThumbNails photos={IMGS}/>
    </div>
  )
}
