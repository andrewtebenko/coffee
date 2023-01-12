import './proposal.scss';

import Beans from '../beans/beans';

const Proposal = ({src, alt, title, p1, p2}) => {
    return (
        <section className="proposal">
            <div className="container">
                <div className="row">
                    <div className="proposal_wrapper offset-2 col-8 offset-2">
                        <img src={src} alt={alt} className="proposal_img"/>
                        <div className="proposal_description-wrapper">
                            <h2 className="title-proposal">{title}</h2>
                            <Beans color={{color: "#000000"}} 
                                img={"./img/component-images/coffee-beans-black.png"} />
                            <p className="description-proposal">{p1}</p>
                            <p className="description-proposal">{p2}</p>
                        </div>
                    </div>
                    <hr className="proposal_line"/>
                </div>
            </div>
        </section>
    )
}

export default Proposal;