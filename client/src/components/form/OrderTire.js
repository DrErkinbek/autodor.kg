import React from 'react';

const OrderTire = () => {
    return(
        <div className="container">
            <div className="row">
                <form>
                    <div className="col s12 m6 l6 xl6">
                        <div className="form-group">
                            <label>Ваше имя</label>
                            <input className="form-control" type="text" />
                        </div>
                    </div>
                    <div className="col s12 m6 l6 xl6">
                        <div className="form-group">
                            <label>Ваш номер</label>
                            <input className="form-control" type="tel" />
                        </div>
                    </div>
                    <div className="col s6 m6 l6 xl6">
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Доставка</span>
                            </label>
                        </p>
                    </div>
                    <div className="col s6 m6 l6 xl6">
                        <p>
                            <label>
                                <input type="checkbox" />
                                <span>Самовывоз</span>
                            </label>
                        </p>
                    </div>
                    <div className="form-group">
                        <a href="#!" className="waves-effect blue waves-light btn right">Оставить заявку</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderTire;