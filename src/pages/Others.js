import React, { useState } from 'react'
import Calendar from 'react-calendar';
import '../styles/Others.css'
// import 'react-calendar/dist/Calendar.css';
//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';
import Modal from '../components/Modal';
const Others = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [value, onChange] = useState(new Date());
    const names = ["paddy", "jowar", "bajra", "maize", "rogi", "tur(ahaar)"];
    const rates = [2040, 2970, 2350, 1962, 3578, 6600];
    
  return (
    <div className='split flexbox'>
                <SideBar active='others'/>

                <div className='container'>
                    {/* searchbar */}
                    <div className='flexbox' style={{position: 'relative'}}>
                        <SearchBar />
                        <ProfileBtn />
                    </div>

                    <div className='flexbox'>
                        

                        <div className='left'>

                            <div className='calender'>
                            <Calendar onChange={onChange} value={value} onClickDay={() => {
                                setModalOpen(true);
                            }}/>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
                                </div>
                            </div>

                                <div className='right'>
                                    <div className="msp box">
                                        <h1>MSP Rates (22-23)</h1>
                                        <div className="crop">
                                            <div className="name">
                                            {names.map(name => <p>{name}</p>)}
                                            </div>
                                            <div className="rates">
                                            {rates.map(rates => <p>{rates}</p>)}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flexbox'>
                                </div>                            
                        </div>

                        </div>
                    </div>
                    </div>
  )
    }

export default Others