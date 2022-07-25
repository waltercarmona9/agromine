import React from 'react';
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import ProfileBtn from "../components/ProfileBtn";
import logo from '../static/L.png'
import '../styles/Detect.css'
const Detect = () => {
    return (
        <div>
            <div className='split flexbox'>
                {/* sidebar */}
                <SideBar active='live feed'/>
                <div className='container'>
                    {/* searchbar */}
                    <div className='flexbox' style={{position: 'relative'}}>
                        <SearchBar />
                        <ProfileBtn />
                    </div>
                    <div className="texto">
                        <h1>Explore , capture and identify the plants around you now!</h1>
                        <p>The amazing camera on the CERES Drone and the HERMES Combine are able to tell the health status of your crops similarly, this amazing feature helps to identify the plants around you through photos and inform you about the health status of the plant by analyzing the leaf of the crop and finding it’s infections status as well as it’s age.  </p>
                    </div>
                    <div className="boxz">
                    <div className="dropbox">
                        <div className="flexi">
                        <img src={logo}></img>
                        <p>Add/Drop an Image</p>
                        </div>
                    </div>
                    <div className="xd">
                        <p>Name: </p>
                        < p>Disease: </p>
                        <p>Details: </p>
                        <p>Remedy: </p>
                        <p>Others: </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detect;