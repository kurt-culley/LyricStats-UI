import React, {Component} from 'react';
import '../Styling/App.css';
import {connect} from 'react-redux';
import ResultFilter from './resultFilter';

class ResultContainer extends Component {

    render() {
        if (!this.props.chart.data) {
            return (
                <div></div>
            );
        }

        return (
            <div className="result-container">
                <h1>{this.props.chart.artist}</h1>
                <h2>{this.props.chart.title ? this.props.chart.title : '' }</h2>
                <ResultFilter chartData={this.props.chart.data}/>
            </div>
        );
    }
}

function mapStateToProps({chart}) {
    return {chart};
}

export default connect(mapStateToProps)(ResultContainer);
