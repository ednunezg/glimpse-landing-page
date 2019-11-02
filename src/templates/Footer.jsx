import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div id="footer">
        <img className="footer-logo" src={require('../assets/img/logo-transparent-white.png')} height="25" alt="" />
        <div className="footer-socials">
        <a href="https://www.facebook.com/glimpsecard" className="footer-social-link"><i className="fab fa-lg fa-facebook"></i></a>
          <a href="https://twitter.com/glimpsecard" className="footer-social-link"><i className="fab fa-lg fa-twitter"></i></a>
          <a href="https://www.instagram.com/glimpse.card" className="footer-social-link"><i className="fab fa-lg fa-instagram"></i></a>
          <a style={{textDecoration: "none"}} href="mailto:team@glimpsecard.com"><i className="fas fa-lg fa-paper-plane"></i></a>
        </div>
        <a className="footer-link" href="/terms-and-conditions">Terms &amp; Conditions</a>
        <br />
        <a className="footer-link" href="/privacy-policy">Privacy policy</a>
        <div className="footer-with-love">
          <p>Made with <i style={{color: "red"}} className="far fa-heart" /> by Glimpse </p>
        </div>
      </div>
    );
  }
}

export default Footer