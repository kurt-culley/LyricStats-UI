import React, {Component} from 'react';
import '../Styling/App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchChartData} from '../Actions/index';

class SearchContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            requestType: 'album',
            requestURL: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.fetchChartData(this.state.requestType, this.state.requestURL);
    }

    render() {
        return (
            <form className="form-inline justify-content-center" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <div className="">
                        <select
                            className="form-control mb-2 mr-sm-2 mb-sm-0 "
                            name="requestType"
                            value={this.state.requestType}
                            onChange={this.handleInputChange}>
                            <option value="album">Album</option>
                            <option value="album_adlibs">Album Adlibs</option>
                            <option value="track">Track</option>
                            <option value="track_adlibs">Track Adlibs</option>
                            <option value="artist">Artist</option>
                            <option value="artist_adlibs">Artist Adlibs</option>
                        </select>
                    </div>
                </div>
                <div className="form-group input-group">
                    <input
                        placeholder="https://genius.com/albums/Mf-doom/Operation-doomsday"
                        className="form-control"
                        type="text"
                        name="requestURL"
                        value={this.state.requestURL}
                        onChange={this.handleInputChange}
                    />
                    <span className="input-group-btn">
                        <input className="btn btn-secondary" type="submit" value="Submit"/>
                    </span>
                </div>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchChartData}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchContainer);
