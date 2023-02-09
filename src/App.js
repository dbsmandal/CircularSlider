
import React from 'react';
import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';

import './App.css';

function App() {
  const [tradePrice, setTradePrice] = useState(100000);
  const [commission, setCommission] = useState(2.5);
  const [referral, seReferral] = useState(10);
  const [miscFees, setmiscFees] = useState(10);
  const [tradeshare, setTradeShare] = useState(40);
  const [dalalEarnings, setDalalEarnings] = useState(60);

  //for grap
  const [name, setName] = useState([]);
  const [val, setVal] = useState([]);





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
    setDalalEarnings(100 - parseInt(e.target.value))
  }
  const handleDalalEarn = (e) => {
    setDalalEarnings(e.target.value);
    setTradeShare(100 - parseInt(e.target.value))

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
    let result = ((grossEarn() - referralEarn() - miscFeesEarn()) * tradeshare) / 100;
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
  let values = [dalalEarn(), miscFeesEarn(), tradeShareEarn(), referralEarn(),];
  let valuesName = ["Dalal Earnings", "Misc Fees", "Trade SHare", "Referral Earnings",]

  useEffect(() => {
    const getdata = async () => {
      setName(valuesName);
      setVal(values);
    }
    getdata();
  }, values);
  return (
    <>
      <div className="main">
        <div className="input-div">
          <div className="child">
            <label >Trade Price: </label>
            <input type="number" onChange={handleTradePrice} id="trade" min="0" value={tradePrice} placeholder='Enter Number' />
          </div>
          <div className="child">
            <label >Commission % : </label>
            <input type="number" id="commision" min="0" max="100" onChange={handleCommission} value={commission} placeholder='Enter Number' />
          </div>
          <div className="child">
            <label >Referral % : </label>
            <input type="number" id='referral' min="0" max="100" onChange={handleReferral} value={referral} placeholder='Enter Number' />
          </div>
          <div className="child">
            <label >Misc. Fees % : </label>
            <input type="number" min="0" max="100" typeof="range" onChange={handleMisc} value={miscFees} placeholder='10' />
          </div>
          <div className="child">
            <label >Trade Share % : </label>
            <input type="number" min="0" max="100" onChange={handleTradeShares} value={tradeshare} placeholder='40' />
          </div>
          <div className="child">
            <label >Dalal % : </label>
            <input type="number" min="0" max="100" onChange={handleDalalEarn} value={dalalEarnings} placeholder='60' />
          </div>
        </div>

        <div className="output-div">
          <div>
            <h2 style={{ paddingLeft: "5px" }}>Earning Chart</h2>
            <Chart
              type="donut"
              width={800}
              height={380}
              series={val}
              options={{
                labels: name,
                colors: ["#43A19E", "#7B43A1", "#7B43A1", "#FFFF00"],
                plotOptions: {
                  pie: {
                    donut: {
                      labels: {
                        show: true,
                        total: {
                          show: true,
                          showAlways: true,
                          //formatter: () => '343',
                          fontSize: 30,
                          color: '#f90000',
                        }
                      }

                    }

                  }

                },

                dataLabels: {
                  enabled: true,
                }


              }}

            />
          </div>
          <div style={{ backgroundColor: "cyan", paddingTop: "5px" }}>
            <p style={{ textAlign: "center", fontStyle: "oblique", fontWeight: "bolder" }}>Trade Price = ${tradePrice}</p>
            <div className='data-div'>
              <p>Gross Earning = ${grossEarn()}</p>
              <p>Referral Earning = ${referralEarn()}</p>
              <p>Dalal Earning = ${dalalEarn()} </p>
              <p>Trade Share = ${tradeShareEarn()} </p>
              <p>Trade Earning = ${tradeEarn()} </p>
              <p>Misc.Fees = ${miscFeesEarn()}</p>

            </div>
          </div>
        </div>
      </div>



    </>
  );
}

export default App;








////////////////




