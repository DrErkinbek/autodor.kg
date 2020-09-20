import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Accessory = () => {
    const showImg = () => {
        const elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems, {})
    }
    return(
        <div className="container">
            <div className="row">
                <h4 className="center">Знак аварийной остановки. </h4>
                <div className="col s12 m6 l6 xl6">
                    <img src="https://cocky-lumiere-ce787a.netlify.app/images/accessories/14.png" className="materialboxed responsive-img"
                    alt="demo" onClick={() => showImg() } />
                </div>
                <div className="col s12 m6 l6 xl6 left">
                    <h5>Описание:</h5>
                    <hr />
                    <blockquote className="product-description">Применяется в случае: необходимой остановки 
                        автомашины в местах, которые не предназначены для этого, 
                        или где при условии неудовлетворительной видимости 
                        автомашина может быть не замечена другими водителями. 
                        Расстояние от знака аварийной остановки 
                        до автомобиля не менее 30 м.  
                    </blockquote>
                    <hr />
                    <table>
                        <tbody>
                            <tr>
                                <td>Производитель:</td>
                                <td>AVS Crystal</td>
                            </tr>
                            <tr>
                                <td>Код продукта:</td>
                                <td>A78109S</td>
                            </tr>
                            <tr>
                                <td>Длина:</td>
                                <td>1 м</td>
                            </tr>
                            <tr>
                                <td>Цена:</td>
                                <td className="flow-text">160 сом</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Accessory;