import React from 'react';
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import ProfileBtn from "../components/ProfileBtn";
import '../styles/Camera.css'
const Camera = () => {
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

                    <iframe src={"https://192.168.0.103:8000"} />

                </div>
            </div>
        </div>
    );
};

export default Camera;