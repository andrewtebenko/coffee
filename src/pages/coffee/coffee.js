import { Component } from 'react';
import Header from '../../components/header/header';
import Proposal from '../../components/proposal/proposal';
import CardFilter from '../../components/card-filter/card-filter';
import CardList from '../../components/card-list/card-list';
import Footer from '../../components/footer/footer';
import ProductDescription from '../../components/product-description/product-description';

import './coffee.scss';

const p1 = `Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.`;
const p2 = `Afraid at highly months do things on at. Situation recommend objection do intention
      so questions. As greatly removed calling pleased improve an. Last ask him cold feel
      met spot shy want. Children me laughing we prospect answered followed. At it went
      is song that held help face.`;

const title = `About it`;

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

const src = 'img/component-images/description-photo1.jpg';

export class Coffee extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            searchStr: ''
        }
    }

    onOpenProducts = (id) => {
        const {data} = this.props
        data.forEach(item => {
            if (item.id === id) {
                this.src= src;
                this.country = item.country;
                this.description = description;
                this.price = item.price;
            }
        })
        this.setState({
            isOpen: true
        })
    }

    render() {
        const {isOpen} = this.state;
        const {onUpdateSearchProduct, onUpdateFilter, filterProduct} = this.props;
        return (
            <>
                <Header background={'/img/background-images/coffee-bg.png'} title={'Our Coffee'}/>
                {isOpen ?
                    <ProductDescription title={title} isOpen={isOpen} src={this.src} country={this.country} 
                        description={this.description} price={this.price}/>
                    :
                    <>
                        <Proposal src={'img/component-images/girl.jpg'} alt={'girl'}
                            title={'About our beans'} p1={p1} p2={p2} />
                        <CardFilter 
                            onUpdateSearchProduct={onUpdateSearchProduct}
                            filterProduct={filterProduct}
                            onUpdateFilter={onUpdateFilter} />
                        <div className="col-8 coffee-wrapper">
                            <CardList data={this.props.data} onOpenProducts={this.onOpenProducts}/>
                        </div>
                    </>    
                }
                <Footer />
            </>
        )
    }
}
