





import React, { useState } from 'react';
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import ProfileBtn from "../components/ProfileBtn";
import logo from '../static/L.png'
import '../styles/Detect.css'
 
const Detect = () => {
     
    const [selectedImage, setSelectedImage] = useState();
 
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
          setSelectedImage(e.target.files[0]);
        }
    };
 
    const onSubmit = (e) => {
        e.preventDefault() 
        alert(URL.createObjectURL(selectedImage))
 
    }
     
    // This function will be triggered when the "Remove This Image" button is clicked
    const removeSelectedImage = () => {
        setSelectedImage();
    };
 
  return (
    <>
      <div>
             <div className='split flexbox'>
                 {/* sidebar */}
                <SideBar active='disease detector'/>
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
        <div className="row">
            <form onSubmit={ onSubmit } className="form-inline">
                <div className="form-group">
                <input type="file" className="form-control" onChange={imageChange} accept="image/*"/>
                {/* <button type="submit" className="btn-d btn-success" >Upload File</button> */}
                </div> <br/>
            </form>
            <div className="mybro">
            <div className="cool">
                {!selectedImage && (
                    <div className="boxz">
                        <div className="dropbox">
                        <div className="flexi">
                        <img src={logo}></img>
                         <p>Add/Drop an Image</p>
                        </div>
                        </div>
                        </div>
                )}
            {selectedImage && (
                <div className="boxz">
            <img
              src={URL.createObjectURL(selectedImage)}
              className="imgi"
              alt="Thumb"
            />
            <button onClick={removeSelectedImage} className="btn">
              Remove
            </button>
            <button type="submit" className="btn-d">Submit</button>
          </div>
        )}
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
      </div>
    </>
  );
};
 
export default Detect;