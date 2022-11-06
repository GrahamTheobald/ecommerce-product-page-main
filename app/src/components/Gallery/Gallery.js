import React, {useState} from 'react'
import ThumbNails from './ThumbNails'
import { IMGS } from '../App'
import '../../css/gallery.css'

export default function Gallery({lightbox = false, handle}) {
  const [currentImg, setCurrentImg] = useState(0)
  function handleClick(i, thumbnail=false) {
    if (thumbnail) setCurrentImg(i)
    else {
      setCurrentImg(prev => {
        if (prev + i > IMGS.length - 1) {
          return 0
        } 
        else if (prev + i < 0) {
          return IMGS.length - 1
        }
        else {
          return prev + i
        }
      })
    }
  }

  return (
    <div className={lightbox? "gallery lightbox" : "gallery"}>
      {
        lightbox && 
        <img
          onClick={() => handle(false)} 
          className="gallery__lightbox-close"
          src="./images/icon-close.svg"
          alt="close lightbox"
        />
      }
      <div className="gallery__current">
        <div className="gallery__current__wrapper">
          <img
            onClick={() => handle(true)}
            src={IMGS[currentImg].main}
            alt="product" 
            />
        </div>
        <div
          onClick={() => handleClick(1)} 
          className="gallery__current__arrow
            gallery__current__arrow--next">
          <img
            src="./images/icon-next.svg"
            alt="next"
          />
        </div>
        <div 
          onClick={() => handleClick(-1)} 
          className="gallery__current__arrow
            gallery__current__arrow--previous">
          <img
            src="./images/icon-previous.svg"
            alt="previous"
          />
        </div>
      </div>
      <ThumbNails photos={IMGS} current={currentImg} handle={handleClick}/>
    </div>
  )
}
