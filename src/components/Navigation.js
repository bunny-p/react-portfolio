import React, { Component } from 'react';
import ScrollTo from 'react-scroll-into-view';
import '../scss/Navigation.scss';

class Navigation extends Component {
    render() {
        const navs = ['HOME', 'PROJECT', 'ABOUT', 'CONTACT'];    
        const navItem = navs.map((nav,index) =>
        
            <li key={index}>
                <ScrollTo selector={`#scroll_${index}`}>
                    <button className="n-btn">{nav}</button>
                </ScrollTo>
            </li>
            
        );
        return (
            <div className="n_container">
                <nav>
                    {/* <Link to="/">Home</Link>
                    <Link to="/">About</Link> */}
                    <ul>{navItem}</ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;