import React, { Component } from 'react';
import Header from './Header/Header';
import ForecastList from './Forecast/ForecastList';
import Landing from './Landing/Landing';
import Modal from './Modal/Modal';
import AddCity from './AddCity/AddCity';
import getCity from '../utils/getCity';
import locationString from '../utils/locationString';

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
        });
    }

    async handleOk(val) {
        const coords = await getCity(val);
        if (!coords) {
            alert("Oh nuh uh! Please use the format <city, state>.");
        }
        else {
            const concatenated = this.state.forecasts.concat({
                name: locationString(val),
                coords
            });
            this.setState({
                showModal: false,
                forecasts: concatenated
            });
        }
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