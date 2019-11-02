import React from 'react';

class FAQ extends React.Component {
  render() {
    return(
      <div id="faq-view" style={{marginTop: "5%", marginLeft: "15%", marginRight: "15%"}}>
        <h1>Frequently Asked questions</h1><br/>

        <h3 style={{color: "grey"}}> AR content design </h3> <br/>

        <Entry
          question="What type of content can be displayed on the augmented reality view?"
          image={require('../assets/img/faqs/faq-ar-content.jpg')}
        >
         The Card Design page supports adding icons to your social media pages / emails, a text label with your name and title, as well as media content. Supported media content includes images and video.
        </Entry>

        <Entry question="What media files are supported?">
          We support the following file types:
          <ul>
            <li>Images: JPEG, JPG, and PNG </li>
            <li>Vidoes: MOV and MP4.</li>
          </ul>
          For both videos and images, there is a file limit of 10 MB
        </Entry>

        <Entry question="Why won't my AR content come up on the web app?">
          If you have trouble with the AR content coming up on the page, make sure the entire card is in the carmera's view.
          <br/><br/>
          If you don't see any media come up on the web app, please make sure the file upload progres bar in the card design page is complete.
        </Entry>

        <h3 style={{color: "grey"}}> Physical card design </h3> <br/>

        <Entry question="I want to upload a custom design for the front of my card. How do I do this?">
          You can create your own design using a card image with dimensions 1000 px × 560 px.
          
          On the Card Design page you can upload your own design by clicking the upload button on the front page panel (JPEG, JPG, and PNG files are supported).
        </Entry>

        <Entry question="Can I upload a custom design for the back (QR code) side of the card?">
          We do not supoprt custom back image designs at this moment. Currently, the image tracking engine used is limited to work with our designs only. <br/><br/>
          We plan on allowing custom back card image designs, so please stay tuned!
        </Entry>

        <h3 style={{color: "grey"}}> Card orders </h3> <br/>

        <Entry question="What countries are available for shipping?">
          Currently, we only support card shipments to US and Canada. <br/><br/>
          If you live outside of this region, you can export your card image on the Card Design page and use an external business card printing service like <a href="https://www.moo.com">Moo</a> or <a href="https://www.vistaprint.com/">Vistaprint</a>.
        </Entry>

      </div>
    )
  }
};

class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var img = null
    if(this.props.image) {
      img = (
        <div className="row justify-content-center">
          <div className="faq-entry-img-wrap col-lg-6 col-md-8 col-sm-10" >
            <img
              src={this.props.image}
              style={{width: "80%", borderRadius: "10px", border: "1px solid black"}}
            />
          </div>
        </div>
      )
    }

    return (
      <div className="faq-entry">
        <div className="row">
          <div className="col-md-12">
            <h5> {this.props.question} </h5> <br/>
            <p>{this.props.children}</p>
          </div>
        </div>
        {img}
        <br/><br/>
      </div>
    )
  }
};


export default FAQ