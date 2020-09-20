import React, { useState } from 'react';
import exideBr from '../images/brand-exide.png';
import bostBr from '../images/brand-bost.png';
import tuborBr from '../images/brand-tubor.png';
import istaBr from '../images/brand-ista.png';
import gladiatorBr from '../images/brand-gladiator.png';
import kainarBr from '../images/brand-kainar.png';

const BrandAccumulators = () => {
    const [brands] = useState({
        exide: 'exide',
        bost: 'bost',
        tubor: 'tubor',
        ista: 'ista',
        gladiator: 'gladiator',
        kainar: 'kainar'
    });
    const {exide, bost, tubor, ista, gladiator, kainar } = brands;
    
    return(
        <>
        <div className="row">
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <img src={exideBr} alt="exide" />
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${exide}`}><p className="blue-text product-title">EXIDE Европа</p></a>
                    </div>
                </div>
            </div>
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <img src={bostBr} alt="exide" />
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${bost}`}><p className="blue-text product-title">BOST Корея</p></a>
                    </div>
                </div>
            </div>
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <img src={tuborBr} alt="exide" />
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${tubor}`}><p className="blue-text product-title">TUBOR Россия</p></a>
                    </div>
                </div>
            </div>
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <img src={istaBr} alt="exide" />
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${ista}`}><p className="blue-text product-title">ISTA Украина</p></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <img src={gladiatorBr} alt="exide" />
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${gladiator}`}><p className="blue-text product-title">GLADIATOR Россия</p></a>
                    </div>
                </div>
            </div>
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <img src={kainarBr} alt="exide" />
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${kainar}`}><p className="blue-text product-title">KAINAR Казакстан</p></a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BrandAccumulators;