import React from 'react'

export default function ThumbNails({photos}) {
  return (
    <div className="gallery__thumbnails">
      {
        photos.map((photo, i) => {
          return  <div key={i}        
                    className="gallery__thumbnails__nail">
                    <img 
                      src={photo.thumbnail}
                      alt="product thumbnail"
                    />
                  </div>
        })
      }
    </div>
  )
}
