import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Tire = () => {
    const showImg = () => {
        const elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems, {})
    }
    return(
        <div className="container">
            <div className="row">
                <h4 className="center">HILO 175/64/14</h4>
                <div className="col s12 m6 l6 xl6">
                    <img src="https://cocky-lumiere-ce787a.netlify.app/images/tires/2.png" width="100%" alt="demo"
                    onClick={() => showImg()} className="materialboxed responsive-img" />
                </div>
                <div className="col s12 m6 l6 xl6 left">
                    <h5>Описание:</h5>
                    <hr />
                    <blockquote className="product-description">Durun 175/64/14 RW 501 – это зимная модель, 
                        созданная для применения на полноприводных автомобилях. 
                        Она имеет достаточно крупный, агрессивный протектор, 
                        который специально разработан для применения в условиях 
                        бездорожья. Ее необходимо устанавливать на настоящие 
                        внедорожники имеющие колесную формулу 4х4, владельцы 
                        которых любят часто съезжать с асфальта и совершают 
                        это в любую погоду или сезон.
                    </blockquote>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td>Ширина:</td>
                                <td>215</td>
                            </tr>
                            <tr>
                                <td>Высота:</td>
                                <td>65</td>
                            </tr>
                            <tr>
                                <td>Диаметр:</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>Сезонность:</td>
                                <td>Зима</td>
                            </tr>
                            <tr>
                                <td>Цена:</td>
                                <td className="flow-text">3200 сом</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tire;