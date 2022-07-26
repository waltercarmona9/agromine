import React, {useState} from 'react';
import SideBar from "../components/SideBar";
import SearchBar from "../components/SearchBar";
import ProfileBtn from "../components/ProfileBtn";
import logo from '../static/L.png'
import '../styles/Detect.css'

const Detect = () => {

    const [selectedImage, setSelectedImage] = useState();
    const [disease, setDisease] = useState();
    const [data, setData] = useState();
    const [details, setDetails] = useState();
    // const [image, setImage] = useState();
    // This function will be triggered when the file field change
    const imageChange = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setSelectedImage(e.target.files[0]);
        }
        // store the image in state

    };

    // upload image to imgur and get the link
    // secret 0dbdad7ac770e926cdf615e01eeae09b42a81c3  5
    const uploadImage = async (e) => {
        var image = document.getElementsByClassName('input-image')[0].files[0]
        // e.preventDefault();
        const formData = new FormData();
        formData.append('image', selectedImage);
        const response = await fetch('https://api.imgur.com/3/image', {
            referrer: "",
            method: 'POST',
            headers: {
                Authorization: 'Client-ID fc81cf051b178b  9',
                'Content-Type': 'multipart/form-data'
            },
            body: image
        });
        const json = await response.json();
        const link = json.data.link;
        console.log(link);
    }

    const onSubmit = (e) => {
        // uploadImage(e).then(r => {console.log(r)})
        setDisease('loading');
        setData(0);
        var image = document.getElementsByClassName('input-image')[0].files[0]
        fetch('https://farmai-prediction.cognitiveservices.azure.com/customvision/v3.0/Prediction/b2d6bb3b-5383-4429-983c-d8a1c44af2b0/classify/iterations/Tomato%20Plants/image', {
            method: 'POST',
            headers: {
                'Prediction-Key': '142678f9461b48548a2ce252d86d3b15',
                'Content-Type': 'application/octet-stream'
            },
            body: image
        }).then(res => {
            res.json().then(r => {
                /*console.log(JSON.stringify(r))
                setData(r)
                setDisease(r.predictions[0].tagName)
                console.log(disease)*/
                if (r.predictions[0].probability > 0.5) {
                    var name = r.predictions[0].tagName
                    if (name == 'bacterialspot_tomato') {
                        setDisease('Bacterial Spot')
                        setDetails('Bacterial spot of tomato is a potentially devastating disease that, in severe cases, can lead to unmarketable fruit and even plant death.')
                    } else if (name == 'healthy_tomato') {
                        setDisease('Healthy')
                        setDetails('Tomato is safe as per the software.')
                    } else if (name == 'lateblight_tomato') {
                        setDisease('Late Blight')
                        setDetails('Late blight is a disease that occurs when the tomato plant is not able to produce fruit or is not able to produce enough fruit to sustain its growth.')
                    } else if (name == 'leafmold_tomato') {
                        setDisease('Leaf Mold')
                        setDetails('Leaf mold is a disease that occurs when the tomato plant is not able to produce fruit or is not able to produce enough fruit to sustain its growth.')
                    } else if (name == 'earlyblight_tomato') {
                        setDisease('Early Blight')
                        setDetails('Early blight is a disease that occurs when the tomato plant is not able to produce fruit or is not able to produce enough fruit to sustain its growth.')
                    } else if (name == 'mosaicvirus_tomato') {
                        setDisease('Mosaic Virus')
                        setDetails('Mosaic virus is a disease that occurs when the tomato plant is not able to produce fruit or is not able to produce enough fruit to sustain its growth.')
                    } else if (name == 'spidermites_tomato') {
                        setDisease('Spider Mites')
                        setDetails('Spider mites are a group of parasitic insects that live on the surface of the tomato plant.')
                    } else if (name == 'targetspot_tomato') {
                        setDisease('Target Spot')
                        setDetails('Target spot is a disease that occurs when the tomato plant is not able to produce fruit or is not able to produce enough fruit to sustain its growth.')
                    } else if (name == 'septorialleafmold_tomato') {
                        setDisease('Septoria Leaf Mold')
                        setDetails('Septoria leaf mold is a disease that occurs when the tomato plant is not able to produce fruit or is not able to produce enough fruit to sustain its growth.')
                    } else {
                        setDisease('Unknown')
                        setDetails("We don't know the disease of the tomato.")
                    }
                    // set data to ceil of probability
                    setData(Math.floor(r.predictions[0].probability * 100))
                }
            })
        })
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
                            <SearchBar/>
                            <ProfileBtn/>
                        </div>
                        <div className="texto">
                            <h1>Explore , capture and identify the plants around you now!</h1>
                            <p>The amazing camera on the CERES Drone and the HERMES Combine are able to tell the health
                                status of your crops similarly, this amazing feature helps to identify the plants around
                                you through photos and inform you about the health status of the plant by analyzing the
                                leaf of the crop and finding it’s infections status as well as it’s age. </p>
                        </div>
                        <div className="row">
                            <form onSubmit={onSubmit} className="form-inline">
                                <div className="form-group">

                                    <input type="file" className="form-control input-image" onChange={imageChange}
                                           accept="image/*"/>
                                    {/* <button type="submit" className="btn-d btn-success" >Upload File</button> */}
                                </div>
                                <br/>
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
                                            <button type="submit" className="btn-d" onClick={onSubmit}>Submit</button>
                                        </div>
                                    )}
                                </div>
                                <div className="xd">
                                    <p>Disease: {disease}</p>
                                    <p> Prediction Percentage: {data}</p>
                                    <p>Details: {details}</p>
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