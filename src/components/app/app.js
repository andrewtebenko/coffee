import { Component } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import { goods } from "../../goods";

import Home from '../../pages/home/home';
import {Coffee} from '../../pages/coffee/coffee';
import {Pleasure} from '../../pages/pleasure/pleasure';

import '../../index.scss';
import '../../reset-bootstrap.scss';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: goods
        }
    }

    render() {

        const {data} = this.state;
        const recommendedProducts = data.filter(item => item.recommended === true)

        return (
            <div className="app">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home data={recommendedProducts} />}/>
                        <Route exact path="/coffee" element={<Coffee />}/>
                        <Route exact path="/pleasure"element={<Pleasure />}/>
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default App;
