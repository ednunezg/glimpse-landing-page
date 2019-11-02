import React from 'react';
import * as Constants from "../constants"

class GetStartedButton extends React.Component {
  
  render() {
    return (
      <a href={Constants.APP_PAGE} className="mt-4 get-started-btn">{this.props.children}</a>
    )
  }
}

export default GetStartedButton