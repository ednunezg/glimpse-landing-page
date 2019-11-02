import React from 'react';
import GetStartedButton from './GetStartedButton';

class SubscriptionPricingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const bottomLabelHeightPixels = 180

    let bottomLabel = <span />

    if(this.props.bottomLabel) {
      bottomLabel = (
        <div style={{
          position:"absolute",
          top: `${225+bottomLabelHeightPixels}px`,
          zIndex: 20
        }}>
          <img
            alt="arrow"
            src={require('../assets/img/pricing-arrow.png')}
            style={{ height: "80px", marginLeft: "100px"}}
          />
          <p style={{fontSize: "15px"}}>
            {this.props.bottomLabel}
          </p>
        </div>
      )
    }

    return (
      <div className="card subscription-pricing-card" style={{
        marginBottom: `${bottomLabelHeightPixels}px`
      }}>
          <div className="card-title" style={{
              paddingTop: "10px",
              color: "black",
              fontSize: "17px",
              fontWeight: 600,
              textAlign: "center",
              borderBottom: "1px solid black"
            }}>
              {this.props.title}
            </div>

          <div className="card-body" style={{paddingTop: "5px"}}>
      
            <div className="monthly-rate" style={{
              paddingTop: "10px",
              fontSize: "48px",
              fontWeight: 600,
              textAlign: "center",
              lineHeight: "44px"
            }}>
              ${this.props.monthlyRate}
            </div>

            <div className="monthly-rate-label" style={{
              fontSize: "14px",
              fontWeight: 500,
              textAlign: "center"
            }}>
              per month
            </div>

            <div className="pricing-features" style={{
              paddingTop: "25px",
              paddingLeft: "10px",
              paddingRight: "10px",
              fontSize: "14px",
              lineHeight: "1.2",
              fontWeight: "400"
            }}>
              {this.props.children}
            </div>

            <div style={{paddingTop: "40px", textAlign: "center"}}>
              <GetStartedButton>Get Started</GetStartedButton>
            </div> 
          </div>
          {bottomLabel}
        </div>
    )
  }
}

export default SubscriptionPricingCard