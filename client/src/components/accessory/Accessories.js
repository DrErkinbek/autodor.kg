import React from 'react';

const Accessories = () => {
    return(
        <div className="row">
            <div className="col s12 m3 l3 xl3">
                <div className="card z-depth-4">
                    <div className="card-image">
                        <img alt="" src="https://cocky-lumiere-ce787a.netlify.app/images/accessories/14.png" />
                    </div>
                    <div className="card-content">
                        <a href={`/accessories/1`}>
                            <p className="center product-title">Знак аварийной остановки</p>
                        </a>
                        <p className="center">220 сом</p>
                    </div>
                    <div className="card-action">
                        <div className="center">
                            <a href={`/accessories/1`} className="waves-effect waves-light blue btn-small center">Подробнее</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accessories;