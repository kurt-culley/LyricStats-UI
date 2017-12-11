import React, {Component} from 'react';
import '../Styling/App.css';
import {connect} from 'react-redux';
import ResultFilter from './resultFilter';

class ResultContainer extends Component {

    render() {

        if (this.props.isLoading) {
            return (
                <div>
                    <img className=""
                         src="https://www.usana.com/images/loading-spinner-black.gif"
                         height="32" width="32"/>
                </div>
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

function mapStateToProps({chart, isLoading}) {
    return {chart, isLoading};
}

export default connect(mapStateToProps)(ResultContainer);
