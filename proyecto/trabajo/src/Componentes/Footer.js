import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (

    <footer style={{ position: 'fixed', left: 0, bottom: 0, width: '100%', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
      <p style={{ position: 'absolute', top: 0, width: '100%', padding: 'px' }}>More From Star Wars</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '50px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
          <FaFacebook size={20} style={{ marginRight: '30px' }} />
          <FaInstagram size={20} style={{ marginRight: '30px' }} />
          <FaTwitter size={20} style={{ marginRight: '30px' }} />
          <FaYoutube size={20} style={{ marginRight: '30px' }} />
          <bottom size={20} style={{ marginRight: '30px', fontFamily: 'fantasy'}}>|  Kids</bottom>

        </div>
         <br></br>
         <br></br>
        <div style={{ marginTop: 'auto' }}>
          <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
          <a href="#https://www.starwars.com/ "><font COLOR="white">Terms of Use |</font></a>
          <a href="#https://www.starwars.com/ "> <font COLOR="white">Additional Content Information |</font></a>
          <a href="#https://www.starwars.com/ "> <font COLOR="white">Privacy Policy |</font></a>
          <a href="#https://www.starwars.com/ "> <font COLOR="white">Children's Online Privacy Policy |</font></a>
          <a href="#https://www.starwars.com/ "> <font COLOR="white">Your California Privacy Rights |</font></a>
          <a href="#https://www.starwars.com/ "><font COLOR="white">Star Wars at shopDisney |</font></a>
          <a href="#https://www.starwars.com/ "><font COLOR="white">Star Wars Helpdesk |</font></a>
          <a href="#https://www.starwars.com/ "><font COLOR="white">Interest-Based Ads |</font></a>
          <a href="#https://www.starwars.com/ "><font COLOR="white">Do Not Sell My Personal Information</font></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;