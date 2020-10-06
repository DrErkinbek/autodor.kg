import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

import slide1 from '../images/slider1.jpg';
import slide2 from '../images/slider2.jpg';
import slide3 from '../images/slider3.jpg';

import cardImg1 from '../images/card1.jpg';
import cardImg2 from '../images/card2.jpg';
import cardImg3 from '../images/card3.jpg';
import cardImg4 from '../images/card4.jpg';

import bostLogo from '../images/bost-logo.jpg';
import gladiatorLogo from '../images/gladiator-logo.jpg';
import tuborLogo from '../images/tubor-logo.png';

import istaLogo from '../images/ista-logo.png';
import kainarLogo from '../images/kainar-logo.png';
import exideLogo from '../images/exide-logo.png';

import widewayLogo from '../images/wideway-logo.png';
import hiloLogo from '../images/hilo-logo.png';
import durunLogo from '../images/durun-logo.jpg';

const Static = () => {
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.slider');
        M.Slider.init(elems, {
            indicators: false,
            height: 500,
            transition: 500,
            interval: 1500
        });
      });
    return(
        <>
        <div className="slider">
            <ul className="slides">
                <li>
                    <img src={slide1} alt="автопарк бишкек" />
                    <div className="caption center-align">
                        <h4 className="white-text">АККУМУЛЯТОРЫ для любых транспортных средств.</h4>
                    </div>
                </li>
                <li>
                    <img src={slide2} alt="шины бишкек" />
                    <div className="caption center-align">
                        <h4 className="yellow-text">Шины и диски.</h4>
                    </div>
                </li>
                <li>
                    <img src={slide3} alt="автоаксессуары бишкек" />
                    <div className="caption right-align">
                        <h4 className="blue-text">Автоаксессуары.</h4>
                    </div>
                </li>
            </ul>
        </div>
        <section id="popular" className="section section-popular scrollspy">
            <div className="row">
                <h4 className="center">
                <span className="blue-text">Каталог</span> товаров</h4>
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <a href="/brands">
                                <img src={cardImg1} alt="аккумулятор бишкек" />
                            </a>
                        </div>
                        <div className="card-content center">
                            <a href="/brands" className="blue-text flow-text">Аккумуляторы</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <a href="/tires">
                                <img src={cardImg2} alt="шины бишкек" />
                            </a>
                        </div>
                        <div className="card-content center">
                            <a href="/tires" className="blue-text flow-text">Шины</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <a href="/disks">
                                <img src={cardImg3} alt="шины бишкек" />
                            </a>
                        </div>
                        <div className="card-content center">
                            <a href="/disks" className="blue-text flow-text">Диски</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m3">
                    <div className="card">
                        <div className="card-image">
                            <a href="/accessories">
                                <img src={cardImg4} alt="автоаксессуары бишкек" />
                            </a>
                        </div>
                        <div className="card-content center">
                            <a href="/accessories" className="blue-text flow-text center-align">Аксессуары</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="container">
            <div className="section">
                <div className="row">
                    <div><h4 className="center blue-text">Преимущества работа с нами</h4></div>
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center yellow-text"><i className="material-icons">check_box</i></h2>
                            <h5 className="center blue-text">Качественно</h5>
                            
                            <p className="center">Подбор АКБ квалифицированным специалистам, гарантия и обслуживание.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center yellow-text"><i className="material-icons">local_grocery_store</i></h2>
                            <h5 className="center blue-text">Бесплатно</h5>

                            <p className="center">Бесплатная доставка по Бишкеку и замена АКБ, диагностика электрооборудования автомобиля.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center yellow-text"><i className="material-icons">card_giftcard</i></h2>
                            <h5 className="center blue-text">Выгодно</h5>

                            <p className="center">Прием старого АКБ на утилизацию или в за счет нового по выгодной цене.</p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center yellow-text"><i className="material-icons">access_time</i></h2>
                            <h5 className="center blue-text">Надежно</h5>

                            <p className="center">Официальная гарантия и послегарантийное обслуживание.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center yellow-text"><i className="material-icons">monetization_on</i></h2>
                            <h5 className="center blue-text">УДОБНО</h5>

                            <p className="center">Оплата наличными на месте.</p>
                        </div>
                    </div>

                    <div className="col s12 m4">
                        <div className="icon-block">
                            <h2 className="center yellow-text"><i className="material-icons">flash_on</i></h2>
                            <h5 className="center blue-text">ЗАРЯДИМ</h5>

                            <p className="center">Прикуривание автомобиля, диагностика и восстановление старой батареи в нашем центре.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="container">
                <div className="col s12 center">
                    <h5 className="center brown-text">Мы работаем напрямую с производителями</h5>
                        <br />
                        <div className="row">
                            <div className="col s4 center-align">
                                <img className="responsive-img" src={bostLogo}
                                    alt="аккумулятор bost" />
                            </div>
                            <div className="col s4 center-align">
                                <img className="responsive-img" src={exideLogo}
                                    alt="аккумулятор exide" />
                            </div>
                            <div className="col s4 center-align">
                                <img className="responsive-img" src={tuborLogo}
                                    alt="аккумулятор tubor" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4 center-align">
                                <img className="responsive-img" src={istaLogo}
                                    alt="аккумулятор ista" />
                            </div>
                            <div className="col s4 center-align">
                                <img className="responsive-img" src={kainarLogo}
                                    alt="аккумулятор кайнар" />
                            </div>
                            <div className="col s4 center-align">
                                <img className="responsive-img" src={gladiatorLogo}
                                    alt="аккумулятор gladiator" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s4 center-align">
                                <img className="responsive-img" src={widewayLogo}
                                    alt="шина wideway" />
                            </div>
                            <div className="col s4 center-align">
                                <img className="responsive-img" src={hiloLogo}
                                    alt="шина hilo" />
                            </div>
                            <div className="col s4 center-align">
                                <img className="responsive-img" src={durunLogo}
                                    alt="шина durun" />
                            </div>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Static;