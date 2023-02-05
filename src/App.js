
import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const [tradePrice, setTradePrice] = useState(100000);
  const [commission, setCommission] = useState(2.5);
  const [referral, seReferral] = useState(10);
  const [miscFees, setmiscFees] = useState(10);
  const [tradeshare, setTradeShare] = useState(40);
  const [dalalEarnings, setDalalEarnings] = useState(60);
  // const [grossEarning, setGrossEarning] = useState()
  // const [referralEarning, seReferralEarning] = useState(10);
  // const [tradeEarnings, setTradetradeEarnings] = useState(tradeshare + miscFees);





  const handleTradePrice = (e) => {
    setTradePrice(e.target.value);
  }
  const handleCommission = (e) => {
    setCommission(e.target.value);
  }
  const handleReferral = (e) => {
    seReferral(e.target.value);
  }
  const handleMisc = (e) => {
    setmiscFees(e.target.value);
  }
  const handleTradeShares = (e) => {
    setTradeShare(e.target.value);
  }
  const handleDalalEarn = (e) => {
    setDalalEarnings(e.target.value);
  }





  function grossEarn() {
    let result = (tradePrice * commission) / 100
    return result
  }
  function referralEarn() {
    let result = ((grossEarn()) * referral) / 100
    return result
  }
  function miscFeesEarn() {
    let result = ((grossEarn() - referralEarn()) * miscFees) / 100
    return result
  }
  function tradeShareEarn() {
    let result = ((grossEarn() - referralEarn() - miscFeesEarn()) * tradeshare) / 100
    return result
  }
  function tradeEarn() {
    let result = tradeShareEarn() + miscFeesEarn()
    return result
  }
  function dalalEarn() {
    let result = ((grossEarn() - referralEarn() - miscFeesEarn()) * dalalEarnings) / 100
    return result
  }

  return (
    <>
      <div className="main">
        <div className="input-div">
          <div className="child">
            <label >Trade Price: </label>
            <input type="number" onChange={handleTradePrice} id="trade" />
          </div>
          <div className="child">
            <label >Commission % : </label>
            <input type="number" id="commision" onChange={handleCommission} />
          </div>
          <div className="child">
            <label >Referral % : </label>
            <input type="number" id='referral' onChange={handleReferral} />
          </div>
          <div className="child">
            <label >Misc. Fees % : </label>
            <input type="number" onChange={handleMisc} />
          </div>
          <div className="child">
            <label >Trade Share % : </label>
            <input type="number" onChange={handleTradeShares} />
          </div>
          <div className="child">
            <label >Dalal % : </label>
            <input type="number" onChange={handleDalalEarn} />
          </div>
        </div>
        <div className="output-div">
          <p>Trade Price: ${tradePrice}</p>
          <p>Gross Earning :${grossEarn()}</p>
          <p>Referral Earning :{referralEarn()}</p>
          <p>Misc.Fees Earn: {miscFeesEarn()}</p>
          <p>Trade Share Earn:{tradeShareEarn()} </p>
          <p>Trade Earning:{tradeEarn()} </p>
          <p>Dalal Earning:{dalalEarn()} </p>

        </div>
      </div>



    </>
  );
}

export default App;








////////////////




