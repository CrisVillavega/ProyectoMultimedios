import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';


const Footer = () => {
  return (

    <footer style={{ left: 0, bottom: 0, width: '100%', backgroundColor: 'black', textAlign: 'center', color: 'white' }}>
      <p style={{ position: 'relative', top: 0, width: '100%', paddingTop: '40px', marginTop: '0px' }}>More From Star Wars</p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
      

          <FaFacebook size={20} style={{ marginRight: '30px' }} />
          <FaInstagram size={20} style={{ marginRight: '30px' }} />
          <FaTwitter size={20} style={{ marginRight: '30px' }} />
          <FaYoutube size={20} style={{ marginRight: '30px' }} />
          <p className="m-0 ml-2 text-white">|</p>
          <button href="https://www.starwarskids.com/" style={{ borderRadius: '50px', marginLeft: '20px', height: '19px', width: '40px', }}><h5 style={{ fontSize: '14px', fontFamily: 'fantasy' }}>KIDS</h5></button>

        </div>
         <br></br>
         <br></br>
        <div style={{ marginTop: 'auto' }}>
          
          <p>TM & © Lucasfilm Ltd. All Rights Reserved</p>
          <a href="#https://www.starwars.com/ " style={{ color: 'white', fontSize: '12px', marginRight: '10px', marginLeft: '90px'  }}><font COLOR="white">Terms of Use</font></a>
          <font margin= '20px'>|</font>
          <a href="#https://www.starwars.com/ " style={{ color: 'white', fontSize: '12px', margin: '10px'  }}> <font COLOR="white"> Additional Content Information </font> </a>
          <font margin= '20px'>|</font>
          <a href="#https://www.starwars.com/ " style={{ color: 'white', fontSize: '12px', margin: '10px'  }}> <font COLOR="white"> Privacy Policy  </font></a>
          <font margin= '20px'>|</font>
          <a href="#https://www.starwars.com/ " style={{ color: 'white', fontSize: '12px', margin: '10px'  }}> <font COLOR="white"> Children's Online Privacy Policy  </font></a>
          <font margin= '20px'>|</font>
          <a href="#https://www.starwars.com/ " style={{ color: 'white', fontSize: '12px', margin: '10px'  }}> <font COLOR="white"> Your California Privacy Rights   </font></a>
          <font margin= '20px'>|</font>
          <a href="#https://www.starwars.com/ " style={{ color: 'white', fontSize: '12px', margin: '10px'  }}><font COLOR="white">  Star Wars at shopDisney   </font></a>
          <font margin= '20px'>|</font>
          <a href="#https://www.starwars.com/ " style={{ color: 'white', fontSize: '12px', margin: '10px'  }}><font COLOR="white">  Star Wars Helpdesk  </font></a>
          <font margin= '20px'>|</font>
          <a href="#https://www.starwars.com/ " style={{ color: 'white', fontSize: '12px', margin: '10px'}}><font COLOR="white">  Interest-Based Ads  </font></a>
          <font marginLeft= '20px' marginRight= '90px' >|</font>
          <br/>
          <a href="#https://www.starwars.com/ " style={{ color: 'white', fontSize: '12px', margin: '10px'  }}><font COLOR="white">Do Not Sell My Personal Information</font></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;