import { Component } from 'react';
import Header from '../../components/header/header';
import Proposal from '../../components/proposal/proposal';
import CardFilter from '../../components/card-filter/card-filter';
import CardList from '../../components/card-list/card-list';
import Footer from '../../components/footer/footer';

import './coffee.scss';

const p1 = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`;
const p2 = `Afraid at highly months do things on at. Situation recommend objection do intention
      so questions. As greatly removed calling pleased improve an. Last ask him cold feel
      met spot shy want. Children me laughing we prospect answered followed. At it went
      is song that held help face.`

export class Coffee extends Component {
    render() {
        return (
            <>
                <Header background={'/img/background-images/coffee-bg.png'} title={'Our Coffee'}/>
                <Proposal src={'img/component-images/girl.jpg'} 
                       alt={'girl'}
                       title={'About our beans'}
                       p1={p1} p2={p2} />
                <CardFilter/>
                <div className="offset-2 col-8 offset-2 coffee-wrapper">
                    <CardList data={this.props.data} onOpenDescription={this.onOpenDescription}/>
                </div>
                <Footer />
            </>
        )
    }
}
