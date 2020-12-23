import React from 'react';

const Footer = () => {
    return(
        <footer className="page-footer blue darken-3">
            <div className="container">
                <div className="row ">
                    <div className="col s12 m4 l4 xl4">
                        <h5 className="yellow-text center">Наш адрес:</h5>
                        <p className="grey-text text-lighten-4 center">Рынок Дордой Автозапчасти, <br />боковой ряд контейнер 15-16</p>
                        <div className="center">
                            <a className="blue darken-1 btn"
                            href="https://2gis.kg/bishkek/search/%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D1%82%D0%B0%D1%80%D1%82%20%D0%B4%D0%BE%D1%80%D0%B4%D0%BE%D0%B9/firm/70000001041801737/74.621242%2C42.947197?m=74.621263%2C42.947176%2F15.54">
                            Как добраться?
                            </a>
                        </div>
                    </div>
                    <div className="col s12 m4 l4 xl4 offset-l2">
                        <h5 className="yellow-text center">Подпишитесь на нас:</h5>
                        <ul>
                            <li>
                                <p className="white-text center"><a href="https://www.instagram.com/autodor.kg/" className="white-text"><i className="fab fa-instagram fa-1x" aria-hidden="true"></i> Instagram</a> </p>
                            </li>
                            <li>
                                <p className="center"><a href="https://www.facebook.com/avtostartkgdordoi-111240577147993/" className="white-text"><i className="fab fa-facebook fa-1x"></i>  Facebook</a></p>
                            </li>
                        </ul>
                    </div>
                    <div className="col s12 l4 m4 xl4">
                        <h5 className="yellow-text center">Свяжитесь с нами:</h5>
                        <ul>
                            <li>
                                <h6 className="white-text center">0770 38 72 34</h6>
                            </li>
                            <li>
                                <h6 className="white-text center">0700 38 72 34</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright blue darken-4">
                <div className="container">
                    <a href="#!" className="white-text">© 2020 Все права защищены.</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;