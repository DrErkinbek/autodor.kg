import React from 'react';

const Error = () => {
    return(
        <div className="row">
            <div className="container">
                <div className="notfound-wrapper">
                    <h5 className="notfound-title center blue-text center">404</h5>
                    <p className="notfound-tag-1 center center">Страница не найдена!!!</p>
                    <br />
                    <div className="center">
                        <a href="/" className="btn blue"><i className="material-icons left">reply</i>Назад в Главную</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;