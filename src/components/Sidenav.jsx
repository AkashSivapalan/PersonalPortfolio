import React from "react"
import SideNav, { Toggle, NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { useNavigate } from "react-router-dom";

function SideNavBar() {
    const navigate = useNavigate();

    return (
        <SideNav
            onSelect={selected => {
                console.log(selected)
                navigate('/'+selected)
            }}
            className='mysidenav'
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultedSelected="home">
            <NavItem eventKey="home">
                <NavIcon>
                    <i className="fa fa-fw fa-home" style={{fontSize:"1.5em"}}/>
                </NavIcon>
                <NavText>Home</NavText>
                </NavItem>
                            <NavItem eventKey="portfolio">
                <NavIcon>
                    <i className="fa-solid fa-user" style={{fontSize:"1.5em"}}/>
                </NavIcon>
                <NavText>My Portfolio</NavText>
                </NavItem>
                            <NavItem eventKey="contact">
                <NavIcon>
                    <i className="fa-solid fa-address-book" style={{fontSize:"1.5em"}}/>
                </NavIcon>
                    <NavText>Contact</NavText>
                </NavItem>
                
        </SideNav.Nav>

    </SideNav>
    
    );
}

export default SideNavBar;
