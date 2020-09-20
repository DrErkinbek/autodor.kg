import React, { useState } from 'react';

const Tires = () => {
    const [tires] = useState([
        {
            "id": 1,
            "name": "HILO 175/65/14",
            "image": "https://cocky-lumiere-ce787a.netlify.app/images/tires/2.png",
            "width": "175",
            "height": "65",
            "discDiameter": "14",
            "season": "Winter",
            "price": "6100",
            "features": "Компания BFGoodrich предлагает шину Activan Go (Бэ Эф Гудрич Активан Гоу), предназначенную для лёгких грузовиков и микроавтобусов. Как рассказывает специалист компании Авитех, при создании данной модели инженеры пытались добиться надёжного сцепления на сухой и мокрой дороге в совокупности с хорошей прочностью. Для решения поставленной задачи они обратились к опыту, полученному компанией за время участия в раллийных гонках, ведь именно в подобных соревнованиях проверяется прочность покрышки и способность уверенно держать траекторию. Состав резиновой смеси «Activian Go» соответствует составу раллийных шин, поскольку именно эта комбинация придаёт высокую прочность и стойкость к повреждениям. Но учитывая, что шины предназначены для лёгких грузовиков, которым часто приходится выполнять далеко не лёгкие задачи, боковины были дополнительно усилены, а каркас составлен из двух слоёв, что сделало шину ещё более стойкой к повреждениям"
        }
    ]);
    return(
        <div className="row">
            {tires.map(tire => {
                return(
                <div className="col s12 m3 l3 xl3" key={tire.id}>
                    <div className="card">
                        <div className="card-image">
                            <img alt={tires.name}
                            src={tire.image} width="75%" />
                        </div>
                        <div className="card-content center ">
                            <p className="product-title">{tire.name}</p>
                            <p>{tire.price} сом</p>
                        </div>
                        <div className="card-action center">
                            <a className="waves-effect waves-light blue modal-trigger btn-small" href={`/tires/1`}>Подробно</a>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Tires;