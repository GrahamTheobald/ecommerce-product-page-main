import React from 'react'

export default function ThumbNails({photos}) {
  return (
    <div className="thumbnails">
      {
        photos.map((photo, i) => {
          return  <div key={i} className="thumnails__nail">
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
