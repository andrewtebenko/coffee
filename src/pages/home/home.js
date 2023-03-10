import { Component } from 'react';

import NavBar from '../../components/navbar/navbar';
import Beans  from '../../components/beans/beans';
import CardList from '../../components/card-list/card-list';
import Footer from '../../components/footer/footer';


import './home.scss';

class Home extends Component {
    render() {
        return (
            <>
                <header className="home">
                    <div className="container">
                        <div className="home-header">
                            <NavBar margin={{marginBottom: "60px"}} 
                                    transform={{transform: "translateY(0px)"}} 
                                    img={"./img/component-images/logo-white.png"} 
                                    color={{color: "#ffffff"}} 
                            />
                            <hr className="col-12 line"/>
                            <h1 className="text-center title-main">
                                Everything You Love About Coffee
                            </h1>
                            <Beans color={{color: "#ffffff"}} 
                                   img={"./img/component-images/coffee-beans-white.png"}
                            />
                            <h2 className="text-center description">
                                We makes every day full of energy and taste
                            </h2>
                            <h2 className="text-center description desire">Want to try our beans?</h2>
                            <a href="#best" variant="outline-primary" className="btn-home col-2">More</a>
                        </div>
                    </div>
                </header>
                <section className="about">
                    <div className="container">
                        <h2 className="text-center title title-about">About Us</h2>
                        <Beans color={{color: "#000000"}} 
                               img={"./img/component-images/coffee-beans-black.png"}
                        />
                        <div className="col-6 description-about">
                            <p>
                                Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                                Afraid at highly months do things on at. Situation recommend objection do intention
                                so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                                met spot shy want. Children me laughing we prospect answered followed. At it went
                                is song that held help face.
                            </p>
                            <p>
                                Now residence dashwoods she excellent you. Shade being under his bed her, Much
                                read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                                horrible but confined day end marriage. Eagerness furniture set preserved far
                                recommend. Did even but nor are most gave hope. Secure active living depend son
                                repair day ladies now.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="best" id="best">
                    <div className="best-background">
                        <div className="container">
                            <div className="best-wrapper">
                                <h2 className="title-best">Our best</h2>
                                <div className="mx-auto col-xl-10 col-lg-12 card-wrapper">
                                    <CardList data={this.props.data} />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </>
        )
    }
}

export default Home;