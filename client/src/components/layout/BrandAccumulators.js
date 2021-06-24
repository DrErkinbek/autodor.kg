import React, { useState } from 'react';
import exideBr from '../images/brand-exide.png';
import bostBr from '../images/brand-bost.png';
import tuborBr from '../images/brand-tubor.png';
import istaBr from '../images/brand-ista.png';
import gladiatorBr from '../images/brand-gladiator.png';
import kainarBr from '../images/brand-kainar.png';
import westaBr from '../images/brand-westa.png';
import veslineBr from '../images/brand-vesline.png';

const BrandAccumulators = () => {
    const [brands] = useState({
        exide: 'exide',
        bost: 'bost',
        tubor: 'tubor',
        ista: 'ista',
        westa: 'westa',
        gladiator: 'gladiator',
        kainar: 'kainar',
        vesline: 'vesline'
    });
    const {exide, bost, tubor, ista, westa, gladiator, kainar, vesline } = brands;
    
    return(
        <>
        <div className="row">
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <a href={`/brands/${kainar}`}>
                            <img src={kainarBr} alt="kainar" />
                        </a>
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${kainar}`}>
                            <p className="blue-text product-title">KAINAR Казакстан</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <a href={`/brands/${gladiator}`}>
                            <img src={gladiatorBr} alt="gadiator" />
                        </a>
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${gladiator}`}>
                            <p className="blue-text product-title">GLADIATOR Россия</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <a href={`/brands/${tubor}`}>
                            <img src={tuborBr} alt="tubor" />
                        </a>
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${tubor}`}>
                            <p className="blue-text product-title">TUBOR Россия</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <a href={`/brands/${ista}`}>
                            <img src={istaBr} alt="ista" />
                        </a>
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${ista}`}>
                            <p className="blue-text product-title">ISTA Украина</p>
                        </a>
                    </div>
                </div>
            </div>    
        </div>
        <div className="row">
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <a href={`/brands/${westa}`}>
                            <img src={westaBr} alt="westa" />
                        </a>
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${westa}`}>
                            <p className="blue-text product-title">Westa Украина</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <a href={`/brands/${bost}`}>
                            <img src={bostBr} alt="bost" />
                        </a>
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${bost}`}>
                            <p className="blue-text product-title">BOST Корея</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <a href={`/brands/${exide}`}>
                            <img src={exideBr} alt="exide" />
                        </a>
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${exide}`}>
                            <p className="blue-text product-title">EXIDE Европа</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="col s6 m3 l3 xl3">
                <div className="card">
                    <div className="card-image">
                        <a href={`/brands/${vesline}`}>
                            <img src={veslineBr} alt="vesline" />
                        </a>
                    </div>
                    <div className="card-content center">
                        <a href={`/brands/${exide}`}>
                            <p className="blue-text product-title">Vesline Турция</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BrandAccumulators;