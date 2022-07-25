import React from 'react'
import '../styles/Price.css'
import Navbar from '../components/Navbar';
const Price = () => {
  return (
    <>
    <Navbar/>
    <div className="prices">
      <h1 className="special">Pricing</h1>

      <div className="priceflex">
        <div className="basic">
          <p>BASIC</p>
          <h1>Rs. 7999</h1>
          <p>Ideal for all types of farmers, subsides on plans available</p>
          <ul>
            <li>Monthly updates about yout soil</li>
            <li>Drone Insurence upto a year</li>
            <li>Using AI to check crop growth</li>
            <li>Liddar Mapping Included</li>
          </ul>
        </div>
        <div className="basic">
          <p>STANDARD</p>
          <h1>Rs. 9999</h1>
          <p>Ideal for large scale farmers, subsides on plans available</p>
          <ul>
            <li>Monthly updates about yout soil</li>
            <li>Drone Insurence upto 1.5 year</li>
            <li>Using AI to check crop growth</li>
            <li>Liddar Mapping Included</li>
            <li>Free Camera Live Feed</li>
            <li>Weather Conditions</li>
          </ul>
        </div>
        <div className="basic">
          <p>PREMIUM</p>
          <h1>Rs. 12999</h1>
          <p>Ideal for large scale farmers and industrial farmers subsides on plans available</p>
          <ul>
            <li>Monthly updates about yout soil</li>
            <li>Drone Insurence upto 1.5 year</li>
            <li>Using AI to check crop growth</li>
            <li>Liddar Mapping Included</li>
            <li>Free Camera Live Feed</li>
            <li>Weather Conditions</li>
            <li>Soil Infection Status</li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Price;