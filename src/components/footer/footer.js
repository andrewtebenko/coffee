import NavBar from '../navbar/navbar';
import Beans from '../beans/beans';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="offset-4 col-4 offset-4">
                        <NavBar margin={{marginBottom: "30px"}} 
                                transform={{transform: "translate(-6px, -6px)"}} 
                                img={"./img/component-images/logo-black.png"} 
                                color={{color: "#000000"}} />
                        <Beans color={{color: "#000000"}} 
                               img={"./img/component-images/coffee-beans-black.png"} />
                    </div>
                </div>
            </div>
        </footer> 
    )
}

export default Footer;

