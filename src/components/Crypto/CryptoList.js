import React from 'react'
import "./crypto.css"
import arrow_up from '../../assets/up-arrow.png'
import arrow_down from '../../assets/down-arrow.png'

const price_color = (value) => {

    return (
        <div className="CryptoPrice">
            <div className="CryptoIconPrice">
                <div className="CryptoChangeIcon">
                    <img src={value["price_change_24h"] > 0 ? arrow_up : arrow_down} alt='Price Change Logo' />
                </div>
                € {value["current_price"]}
            </div>
            <div className="CryptoPercentageChange">
                <div className="row" >
                    1h: <div className={value["price_change_percentage_1h_in_currency"] > 0 ? "green" : "red"}> {value["price_change_percentage_1h_in_currency"].toFixed(2)}% </div>
                </div>
                <div className="row" >
                    24h: <div className={value["price_change_percentage_24h_in_currency"] > 0 ? "green" : "red"}> {value["price_change_percentage_24h_in_currency"].toFixed(2)}% </div>
                </div>
                <div className="row" >
                    7d: <div className={value["price_change_percentage_7d_in_currency"] > 0 ? "green" : "red"}> {value["price_change_percentage_7d_in_currency"].toFixed(2)}% </div>
                </div>

            </div>
        </div>

    )

}

const CryptoList = ({ value }) => (
    <div className="CryptoElement">
        {/* Image and Name of the Crypto */}
        <div className="CryptoHead">
            <div className="CryptoImage">
                <img src={value["image"]} alt="Logo" />
            </div>
            <div className="CryptoName">
                {value["name"]}
            </div>
        </div>
        {/* Generates the Price with the right color */}
        {price_color(value)}
        {/* Generates the high&low value in the last 24h */}
        {/* <div className="HighLow24h">
            <div className="HighLow24hTitle">
                24H
            </div>
            <div className="High24h">
                <img src={arrow_up} /> {value["high_24h"]}
            </div>
            <div className="Low24h">
                <img src={arrow_down} /> {value["low_24h"]}
            </div>
        </div> */}

    </div>
)

export default CryptoList