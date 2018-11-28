import React from "react";
const AboutMe = props => (
  <div className="row">
    <div className="singleTextBox">
      <img
        className="img-fluid singleImage"
        src="./assets/images/Me.jpg"
        alt="Me"
      />
      <div className="singleText">
        <h1> Caribbean born, world raised.</h1>
        <p>
          I was born in Trinidad and Tobago and moved to Maryland, where I spent
          most of my childhood. When I as in 7th grade, my family moved to
          Guinea to follow my father’s work. Not long after we arrived my school
          was closed for many months as a result of a nation wide strike.
          Keeping my education a priority, my father began teaching me from home
          while he organized for me to live with a family friend in Ghana and
          finish the school year there. Due to the frequency and
          unpredictability of civil unrest in Guinea, my father left his job and
          we moved back to Trinidad so that I could have consistency through
          high school. Although we visited many times in my childhood, I was
          excited to finally have the opportunity to live in and properly
          experience my culture. Six years after I left the Washington, DC metro
          area I returned to attend The George Washington University School of
          Business where I majored in accounting. With gaming as a lifelong
          hobby I had always been interested in coding. After I graduated I
          finally decided to learn and signed up for GWU’s full time coding
          bootcamp.
        </p>
        {/* <div id="dogBox"> */}
        <img
          className="img-fluid dogImg"
          src="./assets/images/Dog.jpg"
          alt="Toolum"
        />
        {/* </div> */}
        <p>
          At first I struggled, I had never seen javascript and I only had a
          vague idea of how HTML worked.I found myself thoroughly enjoying the
          most difficult challenges I had ever faced. Every unfamiliar obstacle
          I encountered was an opportunity to learn something new. I knew I had
          found something I love to do and that my drive to excel would be
          fueled by my passion and curiosity. Just before my completion of the
          coursework I was hired as a member of the teaching staff for the
          following cohort. Working as a teaching assistant made me realize that
          the only thing more rewarding than surmounting a new challenge is
          helping a student do so. Now that my students have graduated I am
          eager to see what the next steps in my career have to offer.
        </p>
      </div>
    </div>
  </div>
);
export default AboutMe;
