import React from 'react';
import './homepage.styles.scss';

const HomePage = () =>(
    <div className="homepage">
        <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <div className='title'>T-Shirts</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className='title'>Vinyl</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className='title'>Cassettes</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className='title'>Badges</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <div className='title'>Patches</div>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;