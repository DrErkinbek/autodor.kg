import React, { useState } from 'react';
import winterImg from '../images/winter-tire.jpg';
import summerImg from '../images/summer-tire.jpg';

const SeasonTires = () => {
    const [brands] = useState({
        wt: 'winter',
        sm: 'summer'
    });
    const { wt, sm} = brands;
    
    return(
        <>
        <div className="row">
            <div className="col s12 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <a href={`/tires/${sm}`}>
                            <img src={summerImg} alt="summer" />
                        </a>
                    </div>
                    <div className="card-content center">
                        <a href={`/tires/${sm}`}>
                            <p className="blue-text product-title">Летние шины</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col s12 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <a href={`/tires/${wt}`}>
                            <img src={winterImg} alt="winter" />
                        </a>
                    </div>
                    <div className="card-content center">
                        <a href={`/tires/${wt}`}>
                            <p className="blue-text product-title">Зимние шины</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SeasonTires;