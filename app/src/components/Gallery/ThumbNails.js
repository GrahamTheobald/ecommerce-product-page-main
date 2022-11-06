import React from 'react'

export default function ThumbNails({photos, current, handle}) {
  return (
    <div className="gallery__thumbnails">
      {
        photos.map((photo, i) => {
          return  <div key={i}
                    onClick={() => handle(i, true)}        
                    className={i === current ? 
                      "gallery__thumbnails__nail selected":
                      "gallery__thumbnails__nail"}>
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
