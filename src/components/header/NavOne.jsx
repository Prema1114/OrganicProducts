import './Navone.css';
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";

import { FiInstagram } from "react-icons/fi";
import { PiYoutubeLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";

import { Link } from "react-router-dom";

const NavOne = () => {
  return (
    <div>
      <Container fluid className="sec-one">
        <Row classname='inner-sec '>
          {/*e-mail */}
          <Col className="xs={12} sm={12} md={4} lg={4} xl={4} xxl={4} px-5 py-2 g-mail ">
            <div className="gmail-id  me-3 d-flex  ">
              <Link to="/interestingprema@gmail.com" className="navlink-gmail">
                <span className="mail-icon px-2 ">
                  <MdEmail className='mail fs-5 '/>
                </span>
              </Link>
              interestingprema@gmail.com

              <Link to="/9629932930" className="navlink-phone ">
                <span className="phono-icon  px-2 ">
                  <FaPhoneAlt className='phono fs-5'/>
                </span>
              </Link>
              call:+91 9629932930
            </div>
          </Col>
          <Col className="xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}  py-2 px-2 social-media  ">
            <div className="social-icons  ">
              <Link to="https://www.facebook.com/people/Sigma-Farmers-Market/100091489702147/" className="fb-navlink px-2">
                <FaFacebook className="fb-icon "  />
              </Link>
              <Link to="https://www.instagram.com/sigmafarmersmarket/" className="insta-navlink px-2">
                <FiInstagram className="insta-icon " />
              </Link>
              <Link to="https://www.youtube.com/@SigmaFarmersMarket" className="youtube-navlink px-2">
                <PiYoutubeLogoFill className="youtube-icon " />
              </Link>
              <Link to="https://www.linkedin.com/in/kumaragurumanickavasagam/" className="linkedin-navlink px-2 ">
                <FaLinkedin className="linkedin-icon " />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavOne;
