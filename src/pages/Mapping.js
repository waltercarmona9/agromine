import React from 'react'
//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';
import Mapi from '../components/Mapi'
const Mapping = () => {
  return (
    <div className='split flexbox'>
                <SideBar active='lidar mapping'/>

                <div className='container'>
                    {/* searchbar */}
                    <div className='flexbox' style={{position: 'relative'}}>
                        <SearchBar />
                        <ProfileBtn />
                    </div>

                    <div className="map">
                        <Mapi />
                    </div>

   
                                    </div>
                                    </div>
  )
}

export default Mapping