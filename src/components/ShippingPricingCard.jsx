import React from 'react';

class ShippingPricingCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <div className="card shipping-pricing-card">
        <div className="card-title pt-2" style={{fontSize: "20px", fontWeight: 400}}>
            {this.props.title}
          </div>
          <div className="card-body" style={{padding: "5px"}}>
            <div className="card-price" style={{fontSize: "30px",fontWeight: 500}}>
              {this.props.price}
            </div>
      
            <div className="card-label pt-2" style={{fontSize: "14px", fontWeight: 400, color: "grey"}}>
              {this.props.label}
            </div>
        </div>
      </div>
    )
  }
}

export default ShippingPricingCard