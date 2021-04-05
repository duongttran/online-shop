import React from 'react'
import './Footer.css'

const Footer = (props) => {
  return (
    <div className="footer">
      <footer className="py-2 bg-dark fixed-bottom">
        <div className="container">
          <p className="m-0 text-center text-white">
            Copyright &copy; Duong Tran 2021
          </p>
        </div>
      </footer>
    </div>
  );

}

export default Footer