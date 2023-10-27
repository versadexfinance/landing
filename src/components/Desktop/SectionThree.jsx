import React from 'react'
import './three.css'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import user from './images/user.svg'



function SectionThree() {
  return (
    <div className='contianer centeritall'>
<div className="frame">
      <div className="subhead">
        <p className="subtext">
          Whether you&#39;re a DEX User, Trader, Liquidity Provider, or Developer, VersaDex&#39;s tailored solutions are<br />
          ready to meet your needs. Your personalized DeFi journey awaits; the time to explore is NOW!
        </p>
        <p className="h">Have it your way, the time is NOW!</p>
      </div>
      <div className="div">
        <div className="users">
          <div className="div-2">
            <div className="text-wrapper">DEX USERS</div>
            <p className="p">Seamlessly swap assets, earn through staking and farming, and bridge across chains.</p>
          </div>
          <div className="img">
            <div className="paifr">
              <div className="div-3">
                <div className="div-4">
                  <div className="text-wrapper-2">From</div>
                  <div className="text-wrapper-3">Balance: 56503.892 DAI</div>
                </div>
                <div className="div-5">
                  <div className="div-6">
                    <div className="div-6">
                      <div className="">
                        <img className="img-2" alt="Dai" src="https://c.animaapp.com/Od56giCL/img/dai@2x.png" />
                      </div>
                      <div className="div-7">
                        <div className="text-wrapper-4">DAI</div>
                        <div className="text-wrapper-5">Polygon</div>
                      </div>
                    </div>
                    <img
                      className="img-3"
                      alt="Arrow down round"
                      src="https://c.animaapp.com/Od56giCL/img/arrow-down-01-round-1.svg"
                    />
                  </div>
                  <div className="frame-wrapper">
                    <div className="div-8">
                      <div className="text-wrapper-6">3238.00</div>
                      <div className="text-wrapper-7">~ 3238 USD</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="overlap-group-wrapper">
                <div className="overlap-group">
                  <img className="line" alt="Line" src="https://c.animaapp.com/Od56giCL/img/line-1.svg" />
                  <img className="img-4" alt="Frame" src="https://c.animaapp.com/Od56giCL/img/frame-27.svg" />
                </div>
              </div>
              <div className="div-3">
                <div className="div-4">
                  <div className="text-wrapper-2">To</div>
                  <div className="text-wrapper-3">Balance: 0.23 ETH</div>
                </div>
                <div className="div-5">
                  <div className="div-6">
                    <div className="div-6">
                      <div className="">
                        <img
                          className="img-2"
                          alt="Image"
                          src="https://c.animaapp.com/Od56giCL/img/image-46-1@2x.png"
                        />
                      </div>
                      <div className="div-7">
                        <div className="text-wrapper-4">ETH</div>
                        <div className="text-wrapper-5">Ethereum</div>
                      </div>
                    </div>
                    <img
                      className="img-3"
                      alt="Arrow down round"
                      src="https://c.animaapp.com/Od56giCL/img/arrow-down-01-round-1.svg"
                    />
                  </div>
                  <div className="frame-wrapper">
                    <div className="div-8">
                      <div className="text-wrapper-6">2.06</div>
                      <div className="text-wrapper-7">~ 3238 USD</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="traders">
          <div className="div-9">
            <div className="text-wrapper">TRADERS</div>
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  Optimize your trades with Dynamic Trade Optimization (DTO), minimizing slippage in large orders.
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  Explore Multi-Modal Order Types and delve into strategic trading with Scheduled and Conditional
                  Orders, going beyond traditional market and limit options.
                </span>
              </p>
            </div>
          </div>
          <div className="img-5">
            <div className="div-10">
              <img
                className="meter-guage"
                alt="Meter guage"
                src="https://c.animaapp.com/Od56giCL/img/meter-guage.svg"
              />
              <div className="texts">
                <div className="div-11">
                  <div className="text-wrapper-8">+5.23%</div>
                  <div className="text-wrapper-9">Optimized</div>
                </div>
              </div>
            </div>
            <div className="text-wrapper-10">Dynamic Trade Optimization PnL</div>
            <div className="values">
              <div className="div-4">
                <div className="div-12" />
                <div className="div-13" />
              </div>
              <img className="line-2" alt="Line" src="https://c.animaapp.com/Od56giCL/img/line-2.svg" />
              <div className="div-4">
                <div className="div-14" />
                <div className="div-15" />
              </div>
              <img className="line-2" alt="Line" src="https://c.animaapp.com/Od56giCL/img/line-2.svg" />
              <div className="div-4">
                <div className="div-14" />
                <div className="div-15" />
              </div>
            </div>
          </div>
        </div>
        <div className="liquidity-providers">
          <div className="div-16">
            <div className="text-wrapper">LIQUIDITY PROVIDERS</div>
            <div className="flexcontainer">
              <p className="text">
                <span className="span">
                  Experience our Adaptive Liquidity Provision (ALP), optimizing liquidity for capital efficiency and
                  reduced impermanent loss.
                  <br />
                </span>
              </p>
              <p className="text">
                <span className="span">
                  Discover Yield Amplification, an innovative mechanism enhancing yield through intelligent liquidity
                  routing.
                </span>
              </p>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="div-17">
              <div className="div-18">
                <div className="div-6">
                  <div className="pair">
                    <div className="USDC-wrapper">
                      <img className="img-6" alt="Usdc" src="https://c.animaapp.com/Od56giCL/img/usdc@2x.png" />
                    </div>
                    <div className="image-wrapper">
                      <img className="img-6" alt="Image" src="https://c.animaapp.com/Od56giCL/img/image-46@2x.png" />
                    </div>
                  </div>
                  <div className="frame-wrapper-2">
                    <div className="div-19">
                      <div className="text-wrapper-11">USDC/ETH</div>
                      <div className="metric">
                        <img
                          className="img-3"
                          alt="Arrow up right"
                          src="https://c.animaapp.com/Od56giCL/img/arrow-up-right-02-round.svg"
                        />
                        <div className="text-wrapper-12">0.06%</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="div-20">
                  <div className="div-21" />
                  <div className="div-22" />
                </div>
              </div>
              <img className="chart-line" alt="Chart line" src="https://c.animaapp.com/Od56giCL/img/chart-line.png" />
              <div className="info">
                <div className="div-23">
                  <div className="text-wrapper-13">TVL:</div>
                  <div className="text-wrapper-14">$213.94m</div>
                  <div className="text-wrapper-15">+0.02%</div>
                </div>
                <div className="div-23">
                  <div className="text-wrapper-13">Volume 24h</div>
                  <div className="text-wrapper-14">$171.33m</div>
                  <div className="text-wrapper-15">+30.44%</div>
                </div>
                <div className="div-23">
                  <div className="text-wrapper-13">24H Fees:</div>
                  <div className="text-wrapper-14">85.66k</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="developers">
          <div className="div-24">
            <div className="text-wrapper">DEVELOPERS</div>
            <p className="p">
              Explore our Open-Source Protocol Extensions featuring extensive documentation and tooling for building and
              deploying custom protocol extensions to enhance the platform’s capabilities.
            </p>
          </div>
          <div className="code-snippet-wrapper">
            <div className="code-snippet">
              <div className="sidebar">
                <div className="flexcontainer-2">
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      1<br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      2<br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      3<br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      4<br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      5<br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      6<br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      7<br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      8<br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      9<br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      10
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      11
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      12
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      13
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      14
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      15
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      16
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      17
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      18
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      19
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">
                      20
                      <br />
                    </span>
                  </p>
                  <p className="span-wrapper">
                    <span className="text-wrapper-16">21</span>
                  </p>
                </div>
              </div>
              <div className="content">
                <div className="flexcontainer-3">
                  <p className="text-2">
                    <span className="text-wrapper-17">
                      // Imports
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-18">import</span>
                    <span className="text-wrapper-19"> swap, liquidity_pools </span>
                    <span className="text-wrapper-18">from</span>
                    <span className="text-wrapper-19">
                      {" "}
                      &#39;versadex&#39;
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-17">
                      // Collection name
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-18">export const</span>
                    <span className="text-wrapper-19">&nbsp;</span>
                    <span className="text-wrapper-20">collection</span>
                    <span className="text-wrapper-19">
                      {" "}
                      = &#39;Design&#39;|
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-17">
                      // Schema
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-18">const</span>
                    <span className="text-wrapper-19">&nbsp;</span>
                    <span className="text-wrapper-20">schema</span>
                    <span className="text-wrapper-19"> = </span>
                    <span className="text-wrapper-18">new</span>
                    <span className="text-wrapper-19">
                      {" "}
                      Schema({"{"}
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">&nbsp;&nbsp;</span>
                    <span className="text-wrapper-20">name</span>
                    <span className="text-wrapper-19">
                      : {"{"}
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="text-wrapper-20">type</span>
                    <span className="text-wrapper-19">
                      : String,
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="text-wrapper-20">required</span>
                    <span className="text-wrapper-19">
                      : true
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">
                      &nbsp;&nbsp;{"}"},<br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">&nbsp;&nbsp;</span>
                    <span className="text-wrapper-20">description</span>
                    <span className="text-wrapper-19">
                      : {"{"}
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="text-wrapper-20">type</span>
                    <span className="text-wrapper-19">
                      : String
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">
                      &nbsp;&nbsp;{"}"}
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">
                      {"}"}, {"{"}
                    </span>
                    <span className="text-wrapper-20">timestamps</span>
                    <span className="text-wrapper-19">
                      : true{"}"})<br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-17">
                      // Model
                      <br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-18">export default</span>
                    <span className="text-wrapper-19"> untitled.model(</span>
                    <span className="text-wrapper-20">collection</span>
                    <span className="text-wrapper-19">, </span>
                    <span className="text-wrapper-20">schema</span>
                    <span className="text-wrapper-19">, </span>
                    <span className="text-wrapper-20">collection</span>
                    <span className="text-wrapper-19">
                      )<br />
                    </span>
                  </p>
                  <p className="text-2">
                    <span className="text-wrapper-19">{""}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default SectionThree