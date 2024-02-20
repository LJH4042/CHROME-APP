import React from 'react'
import '../css/List.css'
import Login from '../module/Login'
import Image1 from '../img/1.jpg'
import Image2 from '../img/2.jpg'
import Image3 from '../img/3.jpg'
import Image4 from '../img/4.jpg'
import Image5 from '../img/5.jpg'

const randomImage = [Image1, Image2, Image3, Image4, Image5]

function ChromeApp() {
  const bgImage = randomImage[Math.floor(Math.random() * randomImage.length)]

  return (
    <div style={{backgroundImage: `url(${bgImage})`}} className="ChromeAppDiv">
      <Login />
    </div>
  )
}

export default ChromeApp
