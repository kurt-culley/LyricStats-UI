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
        if (!this.props.chartData) {
            return (
                <div></div>
            );
        }

        return (
            <div className="chart-container">
                <div className="justify-content-center">
                    <Chart
                        chartType="BarChart"
                        data={this.props.chartData}
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

export default ChartContainer;
