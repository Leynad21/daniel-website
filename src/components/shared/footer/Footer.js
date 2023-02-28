import React from 'react'
import "./footer.css"
import { HashLink } from 'react-router-hash-link'
import { MdEmail } from "react-icons/md"
import { RiLinkedinBoxFill } from "react-icons/ri"

const Footer = () => {
  return (
    <footer id="footer">
      <div className="container footer__container">
        <div className="footer__items">
          <HashLink to={"/#contact"} className='footer__item'>
            <h2>Email</h2>
            <MdEmail size={30} />
          </HashLink>
          <a href='https://www.linkedin.com/in/vicente-daniel/'
            className='footer__item' target="_blank">
            <h2>LinkedIn</h2>
            <RiLinkedinBoxFill size={30} />
          </a>
        </div>


        <div className="footer__copyright">
          <small> Copyright &copy; {new Date().getFullYear()}  Daniel Vicente. All rights reserved</small>
        </div>
      </div>
    </footer>
  )
}

export default Footer