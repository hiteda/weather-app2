import React, { Component } from 'react';
import Header from './Header/Header';
import ForecastList from './Forecast/ForecastList';
import Landing from './Landing/Landing';

class Layout extends Component {
    state = {}

    constructor(props) {
        super(props);
        this.handleClicked = this.handleClicked.bind(this);
    }

    handleClicked() {
        this.setState({
            forecasts: ['Lalala', 'Loolooloo', 'Oh wow this is a much longer string', 'and check this one out, it\'s sooooooooooooo long!']
        });
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    { this.state.forecasts && this.state.forecasts.length > 0 && <ForecastList forecasts={this.state.forecasts} /> }
                    { (!this.state.forecasts || this.state.forecasts.length < 1) && <Landing /> }
                    <div className="fixed-action-btn">
                        <button onClick={this.handleClicked} className='btn-floating pulse waves-effect waves-light large cyan darken-3'>
                            <i className='material-icons'>add</i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Layout;