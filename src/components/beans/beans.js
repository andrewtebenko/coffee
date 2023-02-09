import {Image} from 'react-bootstrap';

import '../beans/beans.scss';

const Beans = ({color, img}) => {
    return (
        <div className="row">
            <div className="mx-auto col-2 beans">
                <hr style={color} className="beans-line"/>
                <Image src={img}/>
                <hr style={color} className="beans-line"/>
            </div>
        </div>
    )
}

export default Beans;