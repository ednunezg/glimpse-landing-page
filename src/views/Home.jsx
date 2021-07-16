import React from 'react';
import SubscriptionPricing from '../components/SubscriptionPricingCard'
import ShippingPricing from '../components/ShippingPricingCard'
import EmailListSubscribe from '../components/EmailListSubscribe'
import UniversalTilt from 'universal-tilt.js';
import GetStartedButton from '../components/GetStartedButton';

import howToCardPreview from '../assets/img/how-to-card-preview.png'
import scanMeLabel from '../assets/img/scan-me-label.png'
import averyCard from '../assets/img/avery-card.png'
class Home extends React.Component {

  componentDidMount() {
    UniversalTilt.init({
      elements: [document.querySelector("#title-card-tilt")],
      settings: {
        shine: true,
        'shine-opacity': 0.6,
        'shine-save': false,
        scale: 1.1
      }
    })
  }
  
  render() {
    function genIcon(faClass, color) {
        return (
          <span>
            <i style={{color: color || "black"}} className={faClass}/>
            &nbsp;
          </span>
        )
    }

    const arrowIcon = genIcon("fas fa-arrow-right")
    const checkmarkIcon = genIcon("far fa-lg fa-check-circle", "#34AEEB")
    const crossIcon = genIcon("far fa-lg fa-times-circle", "#D97762")

    return(
      <div id="home-view" style={{marginLeft:"5%", marginRight:"5%"}}>
        <div className="home-title" style={{marginTop: "8%"}}>
          <div className="row">
            <div className="col-lg-5 my-4 pr-4">
              <div className="my-2 title-subheading title-subheading-top">
                Physical cards with digital utility
              </div>
              <div className="my-2 title-heading">
                  A business card <br/>
                  you actually like
              </div>
              <div className="my-2 title-subheading title-subheading-bottom">
                  Create augmented reality enabled business cards. <br/>
                  Viewable on your phone without an app.
              </div>
              <div className="mt-5">
                <GetStartedButton>Try our Beta</GetStartedButton>
              </div>
            </div>

            <div id="title-spacer" className="col-lg-1"></div>

            <div className="col-lg-6 my-4">
              <div className="title-card-wrap">
                <div id="title-card-tilt">
                  <img
                    alt="card-preview-label"
                    className="title-card-scan-me-label"
                    src={scanMeLabel}
                  />
                  <img
                    alt="card-preview"
                    style={{width: "100%"}}
                    className="title-card no-select"
                    src={averyCard}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr style={{marginTop: "100px", marginBottom: "100px"}}/>

        <div id="home-card-how-it-works">
          <div className="section-header">
            How Does This Work?
          </div>

          <div className="row" style={{textAlign: "justify"}}>
            <div id="how-this-works-step-1" className="col-lg-5 py-5">
              <h4>Step 1: Design</h4>
                <p>
                In our editor tool, customize the design for the front side of
                your business cards. Choose between a select set of images for
                the back side of the card.
                <br/><br/>
                Enter social media and other relevant websites that will be displayed
                digitally upon scanning the back of the card.
                <br/><br/>
                You can try previewing the AR content on your phone before getting a
                physical card.
              </p>
            </div>

            <div className="col-lg-2"></div>

            <div className="col-lg-4 py-5">
              <img 
                className="how-this-works-img no-select"
                src={howToCardPreview}
                alt="how-this-works-img"
              />
            </div>
          </div>

          <div className="row">
            <div id="how-this-works-step-2" className="col-lg-5 py-5">
              <h4>Step 2: Order</h4>
              <p>
                With the paid plan, you can either:
                <br /><br />
                1. Download the card template and print the cards yourself.
                <br/><br/>
                2. Order high quality cards from us and ship them directly
                to your door (we recommend this for quality control purposes).
                <br/><br/>
                We offer tailored card pricing for different order quantities!
              </p>
            </div>

            <div className="col-lg-2"></div>

            <div id="how-this-works-step-3" className="col-lg-5 py-5">
              <h4>Step 3: Use</h4>
              <p>
                Simply scan the QR code on the back of the card to view the content.
                <br /><br />
                The cards are memorable, and easy to pass out to people in your network.
                You can also update the digital card info for people to see the changes
                in real time.
                <br/><br/>
                It’s pretty cool, but we’re pretty biased so try it out yourself!
              </p>
            </div>
          </div>
        </div>

        <hr style={{marginTop: "50px", marginBottom: "50px"}}/>

        <div id="pricing">
          <div className="section-header">
            What is Our Pricing?
          </div>

          <div className="row justify-content-center mt-3">
            <div id="free-tier-pricing" className="col-lg-5 col-md-6 my-3">
              <SubscriptionPricing
                title="Free"
                monthlyRate="0"
                bottomLabel="Recommended for those who would like to try before buying"
              >
                  {crossIcon} <span style={{color: "#A64935"}}>Limited to 5 views a day</span>
                  <br/><br/>
                  {checkmarkIcon} Design and preview AR content on our website
                  <br/><br/>
                  {checkmarkIcon} Print the cards yourself or order high quality cards directly from us
              </SubscriptionPricing>
            </div>

            <div id="paid-tier-pricing" className="col-lg-5 col-md-6 my-3">
              <SubscriptionPricing
                title="Premium"
                monthlyRate="15"
                bottomLabel='"Shut up and take my money"'
              >
                  {checkmarkIcon} Unlimited views
                  <br/><br/>
                  {checkmarkIcon} Design and preview AR content on our website
                  <br/><br/>
                  {checkmarkIcon} Print the cards yourself or order high quality cards directly from us
              </SubscriptionPricing>
            </div>
          </div>
        </div>

        <hr style={{marginTop: "50px", marginBottom: "50px"}}/>   

        <div id="other-inquiries">
          <div className="section-header">
            Cards shipped straight to your door
          </div>
          <div>
            <div className="d-flex flex-wrap justify-content-center">
              <ShippingPricing title="100 Cards"  price="$40" />
              <ShippingPricing title="250 Cards"  price="$70" />
              <ShippingPricing title="500 Cards"  price="$135"/>
              <ShippingPricing title="1000 Cards" price="$235"/>
            </div>
            <p className="mt-3" style={{textAlign: "center", color: "#696969"}}>
              (excludes shipping and taxes)
            </p>
          </div>
        </div>

        <hr style={{marginTop: "50px", marginBottom: "50px"}}/>
        
        <div id="other" className="row">
          <div className="col-md-5 my-5">
            <div className="section-header"> Other inquiries </div>
            <div className="justify-content-center">
              <p style={{fontSize: "14px", textAlign: "left", lineHeight: "30px"}}>
                {arrowIcon} Need a larger card order? <br />
                {arrowIcon} Want a custom AR solution for your business? <br />
                {arrowIcon} Have an idea for our tech? <br />
                {arrowIcon} Questions, comments, concerns? <br />
              </p>
              <p style={{textAlign: "left"}}>
                Contact us at  <a href="mailto:team@glimpsecard.com">team@glimpsecard.com</a>
              </p>
            </div>
          </div>

          <div className="spacer col-md-2"/>

          <div className="col-md-5 my-5">
            <div className="section-header"> Join our mailing list</div>
            <EmailListSubscribe />
          </div>

        </div>
      
      </div>
    )
  }
}

export default Home