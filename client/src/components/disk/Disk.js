import React, { useContext, useEffect} from 'react';
import DiskContext from '../../context/disk/DiskContext';
import Spinner from '../layout/Spinner'
import M from 'materialize-css/dist/js/materialize.min.js';
import Cookies from 'js-cookie';

const Disk = (props) => {
    const diskContext = useContext(DiskContext);
    const {disk, getDisk, loading } = diskContext;

    useEffect(() => {
        const productCode = props.match.params.productCode;
        Cookies.set('servingDisk', 'keepServingDisk=true', 
        { secure: true, expires: 7, path: `/disks/${productCode}` });
        getDisk(productCode);
        // eslint-disable-next-line
    }, []);

    const showImg = () => {
        const elems = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(elems, {})
    }

    if(loading){
        return <Spinner />
    } else {
        return(
            <div className="container">
                <div className="row">
                    <h4 className="center">{disk.name}</h4>
                    <div className="col s12 m6 l6 xl6">
                        <img src="http://autodor.net.kg/dist/disks/disk1.png" 
                        className="materialboxed responsive-img"
                        alt="demo" onClick={() => showImg() } />
                    </div>
                    <div className="col s12 m6 l6 xl6 left">
                        <h5>Описание:</h5>
                        <hr />
                        <blockquote className="product-description">{disk.description}</blockquote>
                        <hr />
                        <table>
                            <tbody>
                                <tr>
                                    <td> Ширина:</td>
                                    <td>{disk.width}</td>
                                </tr>
                                <tr>
                                    <td>Вылет:</td>
                                    <td>{disk.offset}</td>
                                </tr>
                                <tr>
                                    <td>Разбалтовка:</td>
                                    <td>{disk.boltPattern}</td>
                                </tr>
                                <tr>
                                    <td>Цена за комплект:</td>
                                    <td className="flow-text">$ {disk.price}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Disk;