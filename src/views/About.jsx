import React from 'react';

class About extends React.Component {
  render() {
    return(
      <div id="about-view" style={{marginTop: "5%", marginLeft: "15%", marginRight: "15%"}}>
        <div style={{textAlign: "center"}}>
          <span style={{fontWeight: 600, fontSize: "20px"}}>How This Got Started</span>
          <br />
          <span style={{fontWeight: 600, fontSize: "44px"}}>About us</span>
        </div>

        <br />

        <p style={{textAlign: "justify"}} className="pl-5 pr-5">
        I had just graduated from college, with not a whole lot going on. After dropping my engineering degree and barely sliding into home plate with a general studies degree, just to say that I finished. Though I was fairly technical, I still struggled with finding a job due to my degree and lack of confidence associated with dropping my engineering degree.
        <br /><br />
        I had messed around with augmented reality development for about a year and made a couple of cool apps for different things. As my job search extended into the 4th month post graduation and my credit card balance increased, I got the idea to make myself stand out with a new business card.
        <br /><br />
        Business cards are boring, relatively innovative, but still used on a daily basis around the world. Why not make a business card that captures attention and shows employers, “Hey I’m unique!”. I spent a week making a prototype (check out my videos here). And I posted <a href="https://www.linkedin.com/feed/update/urn:li:activity:6501567419436408832/">a video to LinkedIn</a> hoping that I could snatch an interview from someone who thought it was cool.
        <br /><br />
        The video went viral, and now I had people messaging me asking how to buy them. I had a problem, but a pretty fun problem. Build a business. I recruited a couple friends and we started to build out cards as a service. Something that provides an app-less augmented reality experience with business cards that works regardless of what phone you use.  
        <br /><br />
        So here we are. We built a business and delivered on what people were asking for. So now we are listening to our customers and thinking of cool new things to try out with our technology.
        </p>
      </div>
    )
  }
};

export default About