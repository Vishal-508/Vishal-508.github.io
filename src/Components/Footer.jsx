import React from 'react'
import "../styles/footer.css"
const Footer = () => {
  let date= new Date().getFullYear()
 
  return (
    <div className='footer-section' >© Vishal {date}.</div>
  )
}

export default Footer