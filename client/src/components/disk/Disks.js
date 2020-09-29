import React, { useContext, useEffect} from 'react';
import DiskContext from '../../context/disk/DiskContext';
import Spinner from '../layout/Spinner';
import Cookies from 'js-cookie';

const Disks = () => {
    const diskContext = useContext(DiskContext);
    const { disks, loading, getDisks } = diskContext;

    useEffect(() => {
        Cookies.set('servingDisks', 'keepServingDisks=true', 
        { secure: true, expires: 7, path: '/disks' });
        getDisks()
        // eslint-disable-next-line
    }, []);

    if(loading){
        return <Spinner />
    } else {
        return(
            <div className="row">
                {disks.map(disk => {
                    return (
                        <div className="col s12 m3 l3 xl3" key={disk._id}>
                            <div className="card z-depth-4">
                                <div className="card-image">
                                    <a href={`/disks/${disk.productCode}`}>
                                        <img alt="disk" src={disk.imageUrl} />
                                    </a>
                                </div>
                                <div className="card-content">
                                    <p className="center product-title">{disk.name}</p>
                                    <p className="center">$ {disk.price}</p>
                                </div>
                                <div className="card-action">
                                    <div className="center">
                                        <a href={`/disks/${disk.productCode}`} className="blue btn-small center">Подробнее</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Disks;