import './card-filter.scss';

const CardFilter = () => {
    return(
        <div className="card-filter">
            <div className="container">
                <div className="row">
                    <div className="offset-2 col-8 offset-2 card-filter_wrapper">
                        <div className="search-wrapper">
                            <label htmlFor="search-input">Looking for</label>
                            <input type="text" className="search-input" id="search-input" placeholder="start typing here..."/>
                        </div>
                        <div className="filter">
                            <label htmlFor="filter-block">Or filter</label>
                            <div className="filter-block">
                                <button type="button" className="btn btn-light filter-btn">Brazil</button>
                                <button type="button" className="btn btn-light filter-btn">Kenya</button>
                                <button type="button" className="btn btn-light filter-btn">Columbia</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardFilter;