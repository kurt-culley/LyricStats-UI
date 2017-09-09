import React, {Component} from 'react';
import '../Styling/App.css';
import {Chart} from 'react-google-charts';
import {connect} from 'react-redux';

class ChartContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: {
                chartArea: {
                    width: '60%',
                    height: '80%'
                },
                hAxis: {
                    title: 'Count',
                    minValue: 0
                },
                vAxis: {
                    title: 'Word'
                },
                legend: {
                    position: 'none'
                }
            }
        };
    }

    render() {
        if (!this.props.chart.data) {
            return (
                <div></div>
            );
        }

        return (
            <div className="chart-container">
                <div className="justify-content-center">
                    <h1>{this.props.chart.artist}</h1>
                    <h2>{this.props.chart.title}</h2>
                    <Chart
                        chartType="BarChart"
                        data={this.props.chart.data}
                        options={this.state.options}
                        graph_id="BarChart"
                        width="800px"
                        height="600px"
                    />
                </div>
            </div>
        );
    }
}

function mapStateToProps({chart}) {
    return {chart};
}

export default connect(mapStateToProps)(ChartContainer);


