import React, { Component } from 'react';
import Header from './Header/Header';
import ForecastList from './Forecast/ForecastList';
import Landing from './Landing/Landing';
import Modal from './Modal/Modal';
import AddCity from './AddCity/AddCity';
import validateCityState from '../utils/validateCityState';

class Layout extends Component {
    state = {
        showModal: false,
        forecasts: []
    }

    constructor(props) {
        super(props);
        this.handleAddClicked = this.handleAddClicked.bind(this);
        this.handleOk = this.handleOk.bind(this);
    }

    handleAddClicked() {
        this.setState({
            showModal: true
            //forecasts: ['Lalala', 'Loolooloo', 'Oh wow this is a much longer string', 'and check this one out, it\'s sooooooooooooo long!']
        });
    }

    handleOk(val) {
        if (!validateCityState(val)) {
            alert("Oh nuh uh! Please use the format <city, state>.");
        }
        else {
            const concatenated = this.state.forecasts.concat(val);
            this.setState({
                showModal: false,
                forecasts: concatenated
            });
        }
    }

    validateVal(val) {

    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    { this.state.forecasts && this.state.forecasts.length > 0 && <ForecastList forecasts={this.state.forecasts} /> }
                    { (!this.state.forecasts || this.state.forecasts.length < 1) && <Landing /> }
                    <Modal
                        show={this.state.showModal}
                        onClose={() => { this.setState({ showModal: false }); }}
                    >
                        <AddCity onOk={this.handleOk} />
                    </Modal>
                    <div className="fixed-action-btn">
                        <button onClick={this.handleAddClicked} className='btn-floating pulse waves-effect waves-light large cyan darken-3'>
                            <i className='material-icons'>add</i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default Layout;