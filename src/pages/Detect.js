import React, { useState } from 'react';
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import ProfileBtn from "../components/ProfileBtn";
import logo from '../static/L.png'
import '../styles/Detect.css'
const Detect = () => {
    const [imgPreview, setImgPreview] = useState(null);
    const [error, setError] = useState(false);
    const handleImageChange = (e) => {
        const selected = e.target.files[0];
        const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/jpg"];
        if(selected) {
            if(ALLOWED_TYPES.includes(selected.type)) {
                console.log("selected");
                let reader = new FileReader();
                reader.onloadend = () => {
                    setImgPreview(reader.result);
                }
                reader.readAsDataURL(selected);
            }
            else {
                setError(true);
                alert("error ajeeb img");
            }
        }
    }
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
                            {!imgPreview && (
                                <>
                        <img src={logo}></img>
                        <p>Add/Drop an Image</p>
                        <label htmlFor='fileUpload'></label>
                        </>
                            )}
                        {error && <p>Error: Image must be a jpeg, png or jpg</p>}
                        <div style={{background: imgPreview ? `url("${imgPreview}") no-repeat center/cover` : "#131313"}}>
                        </div>
                        <input type="file" id="fileUpload" onChange={handleImageChange}></input>
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