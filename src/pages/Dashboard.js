import React, {useEffect, useState} from 'react';
import ReactWeather, { useOpenWeather } from 'react-open-weather';
import '../styles/Dashboard.css';
import drone from '../static/drone.png'
import Clock from 'react-live-clock';
import bar from '../static/bar.png';
import silo from '../static/silo.png';
//components
import SearchBar from '../components/SearchBar';
import SideBar from '../components/SideBar';
import ProfileBtn from '../components/ProfileBtn';


function Dashboard() {
    const todo = ["Apply Pesticides to crops for pretection against germs"];
    let randomTodo = todo[Math.floor(Math.random()*todo.length)]
    const { data, isLoading, errorMessage } = useOpenWeather({
        key: '3d2f1ea6a2e8c4721f4d3173f17e44d6',
        lat: '28.5859',
        lon: '77.216721',
        lang: 'en',
        unit: 'metric', // values are (metric, standard, imperial)
      });

      const customStyles = {
        fontFamily:  'Lufga',
        gradientStart:  '#fff',
        gradientMid:  '#fff',
        gradientEnd:  '#fff',
        locationFontColor:  '#142A19',
        locationFontWeight:  'bold',
        todayTempFontColor:  '#142A19',
        todayDateFontColor:  '#000',
        todayRangeFontColor:  '#073609',
        todayDescFontColor:  '#073609',
        todayInfoFontColor:  '#073609',
        todayIconColor:  '#073609',
        forecastBackgroundColor:  '#fff',
        forecastSeparatorColor:  '#fff',
        forecastDateColor:  '#073609',
        forecastDescColor:  '#073609',
        forecastRangeColor:  '#073609',
        forecastIconColor:  '#073609',
    };



    const current = new Date();

  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    // const todo = [
    //     {
    //     task: 'Sow Monsoon crops: Brinjal , Tomato and Cucumber',
    //     task_done: "55%" ,
    //     task_id: 1
    //     },
    //     {
    //     task: 'Sow Monsoon crops: Brinjal , Tomato and Cucumber',
    //     task_done: "55%",
    //     task_id: 2
    //     }
    // ];

    const [tasks, setTasks] = useState()
    const [completed, setCompleted] = useState()
    const [user, setUser] = useState()

    useEffect(() => {
        fetch('https://ordinapi.hailcore.club/details/orders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:localStorage.getItem('session'), status: 'inprogress'})
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTasks(data)
        })

        fetch('https://ordinapi.hailcore.club/details/orders', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:localStorage.getItem('session'), status: 'completed'})
        })
        .then(res => res.json())
        .then(data => {
            setCompleted(data)
        })

        fetch('https://ordinapi.hailcore.club/details/user', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email:localStorage.getItem('session')})
        })
        .then(res => res.json())
        .then(data => {
            setUser(data)
        })
    }, [])

    if (localStorage.getItem('admin') == 'false'){
        return (
            <div className='split flexbox'>
                {/* sidebar */}
                <SideBar active='dashboard'/>

                <div className='container'>
                    {/* searchbar */}
                    <div className='flexbox' style={{position: 'relative'}}>
                        <SearchBar />
                        <ProfileBtn />
                    </div>

                    <div className='flexbox'>
                        <div className='left'>
                            {/* {tasks ? tasks.slice(0,2).map((item,key) => */}
                                <div className='box taskbox'>
                                    <h2>Current Task:</h2>
                                    <div className='bruh'>
                                        <div className="head">
                                        <img src={bar}></img>
                                        <h2>Sow Monsoon Crops: Brinjal, Tomato and Cocumber</h2>
                                        </div>
                                        <div className="due">
                                            <p><b>Task: </b>Sow Brinjal Seeds</p>
                                            <p><b>Due Date: </b>12/August/2022</p>
                                        </div>
                                        <div>
                                            {/* TASK FROM DATA BASE */}
                                            <br />
                                        </div>
                                    </div>


                                </div>

                                <div className='box taskbox'>
                                    <h2>Upcoming Task:</h2>
                                    <div className='bruh'>
                                        <div className="head">
                                        <img src={silo}></img>
                                        {/* <h2>Check on Monsoom Crops: Brinjal, Tomato and Cocumber</h2> */}
                                        {todo.map(todo => <h2>{todo}</h2>)}
                                        </div>
                                        <div className="due">
                                            <p><b>Task: </b>Apply chemicals</p>
                                            <p><b>Due Date: </b>30/August/2022</p>
                                        </div>
                                        <div>
                                            {/* TASK FROM DATA BASE */}
                                            <br />
                                        </div>
                                    </div>


                                </div>
                        <>
                            </>
                        </div>

                        <div className='right'>
                            <div className='bonus'>
                                <div className="droni">
                                    
                                    <img src={drone}></img>
                                </div>
                                <div className="info">
                                    <p><b>Date: </b>{date}</p>
                                    <p><b>Time: </b><Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} /></p>
                                    <p><b>Location: </b>FarmLand 1</p>
                                </div>
                            </div>

                            <div className='weather'>
                           <ReactWeather
                           theme = {customStyles}
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="New Delhi"
      unitsLabels={{ temperature: 'C', windSpeed: 'Km/h' }}
      showForecast
    />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        window.location = '/home'
    }
}

export default Dashboard
