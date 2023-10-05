import React from 'react';
import './CardDetails.css';

const CardDetails = () => {
  return (
    <>
        <div className="card-section">
            <h1 className="card-feature">
                Our Featured <span>Read!</span>
            </h1>
            <hr className="divider" />
            <div className="card-wrapper">
                <div className="card-item">
                    <img src="./feature01.jpg" alt="feature read" className="feature-pic" />
                    <p className="feature-text">This book is packed with evidence-based strategies. You will learn small changes that will transform your habits and deliver amazing results.</p>
                </div>
                <div className="card-item">
                    <img src="./feature03.jpg" alt="feature read" className="feature-pic" />
                    <p className="feature-text">A must read for every entrepreneur or aspiring entrepreneurs.</p>
                </div>
                <div className="card-item">
                    <img src="./feature04.jpg" alt="feature read" className="feature-pic" />
                    <p className="feature-text">Your go-to book on business. Aid to selling more of your products.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default CardDetails