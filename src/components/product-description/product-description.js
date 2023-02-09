import Beans from '../beans/beans';

import './product-description.scss';

const ProductDescription = ({src, title, country, isOpen, description, price}) => {
    return (
        <div className="product">
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 col-lg-12 m-auto">
                        <div className="product_wrapper">
                            <img src={src} alt="coffee" className="product-img"/>
                            <div className="product-description_block">
                                <h2 className="title-description">{title}</h2>
                                <Beans color={{color: "#000000"}} 
                                       img={"./img/component-images/coffee-beans-black.png"} />
                                <p className="product_country">Country:<span> {country}</span></p>
                                <p className="product_description">Description:<span> {description}</span></p>
                                <p className="product_price">Price:<span> {price}</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;