import React from 'react';

const GenericFailureMessage = "" +
  "Can not subscribe your email address at this time." +
  "Please try again later"

class EmailListSubscribe extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      successMsg: "",
      failMsg: ""
    }
    this.handleEmailInput = this.handleEmailInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.buildUrl = this.buildUrl.bind(this)
  }

  buildUrl() {
    return `https://glimpsecard.us3.list-manage.com/subscribe/post-json` +
      `?u=e08ef4b5fec00cba034b6e465` +
      `&amp;id=c807a272a5` +
      `&c=jQuery34102552019401813417_1572640521907` +
      `&EMAIL=${this.state.email}`
  }

  handleEmailInput(e) {
    e.preventDefault()
    this.setState({email: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault()
    const url = this.buildUrl()

    fetch(url)
      .then(res =>  res.json())
      .then(resJson => {
        if(resJson.result === "error") {
          return this.setState({failMsg: GenericFailureMessage})
        }
        return this.setState({successMsg: "You have been subscribed!"})

      })
      .catch(() => this.setState({failMsg: GenericFailureMessage}))
  }

  render() {
    return (
      <form className="pt-4">
        <div className="row justify-content-center">
          <div className="col-md-10 form-group mb-2">
            <input
              type="email"
              className="form-control"
              size="50"
              id="inputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.handleEmailInput}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone.
            </small>
          </div>
          <div className="col-md-2">
            <button type="submit" className="btn btn-outline-dark mb-2" onClick={this.handleSubmit}>
              Submit
            </button>
          </div>
          <p style={{color: "green"}}>{this.state.successMsg}</p>
          <p style={{color: "red"}}>{this.state.failMsg}</p>
        </div>
      </form>
    )
  }
}

export default EmailListSubscribe