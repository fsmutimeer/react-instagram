import React from 'react';
import '../styles/sidebar.scss';
import Sticky from "react-sticky-el";
import Profile from './Profile';
import Suggestions from './Suggestions';
import Footer from "./Footer";
import image from '../images/profile.jpg';


export default function Sidebar() {
    return (
       
          <Sticky topOffset={-80}>
              <div className="sidebar">
                  <Profile 
                  username="feroz.shah" 
                  caption="Feroz Shah" 
                  urlText="Switch" 
                  iconSize="big" 
                  image={image}/>
                   <Suggestions/>
              <Footer/>
              </div>
             
          </Sticky>
 
    )
}
