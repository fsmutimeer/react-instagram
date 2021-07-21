import '../styles/navigation.scss';
import logo from '../images/InstagramLogo.png'
import searchicon from '../images/search.png'

import Menu from './Menu'


export default function Navigation(){
    return(     <div className="navigation">
                    <div className="container">
                         <img className="logo" src={logo} alt="instagram logo" />
                         <div className="search" >
                             <img className="searchIcon" src={searchicon} alt="search icon"/>
                             <span className="searchText">Search</span>
                         </div>
                         <Menu/>
                    </div>
                </div>
    )
}