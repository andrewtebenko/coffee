import NavBar from '../navbar/navbar';
import Beans from '../beans/beans';

import './footer.scss';

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            <div className="container">
                <div className="row">
                    <div className="mx-auto col-xl-4 col-lg-5 col-md-7">
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

