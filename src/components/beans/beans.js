import {Image} from 'react-bootstrap';

import '../beans/beans.scss';

const Beans = (props) => {
    return (
        <div className="row">
            <div className="offset-5 col-2 offset-5 beans">
                <hr style={props.color} className="beans-line"/>
                <Image src={props.img}/>
                <hr style={props.color} className="beans-line"/>
            </div>
        </div>
    )
}

export default Beans;