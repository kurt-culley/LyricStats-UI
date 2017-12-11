import React, {Component} from 'react';
import '../Styling/App.css';
import ChartContainer from './chartContainer';
import _ from 'lodash';

class ResultFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numResult: 10,
            searchFilters: [],
            chartDataFilters: [],
            chartData: ''
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.renderFilters = this.renderFilters.bind(this);
    }

    componentDidMount() {
        this.setState({
            chartData: this.props.chartData
        });
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            chartData: nextProps.chartData
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSearch() {
        if (this.state.searchFilters.length < 1) {
            this.setState({
                chartData: this.props.chartData,
                chartDataFilters: []
            });

        } else {
            let chartData = [...this.props.chartData];
            let searchFiltersSplit = [...this.state.searchFilters.split(/\s+/)];
            let chartDataFiltered = [];
            let searchFiltersDisplay = [...this.state.searchFilters.split(/\s+/)];

            searchFiltersDisplay = _.chunk(searchFiltersDisplay, 1);
            for (let i = 0; i < searchFiltersDisplay.length; i++) {
                searchFiltersDisplay[i].push(false)
            }

            for (let i = 0; i < this.props.chartData.length; i++) {
                for (let j = 0; j < searchFiltersSplit.length; j++) {
                    if (chartData[i][0] === searchFiltersSplit[j].toLowerCase()) {
                        chartDataFiltered[0] = ["word", "count"];
                        chartDataFiltered.push(chartData[i]);
                        searchFiltersDisplay[j][1] = true;
                    }
                }
            }

            if ((chartDataFiltered.length - 1) < 1) {
                this.setState({
                    chartDataFilters: searchFiltersDisplay
                });
            } else {
                this.setState({
                    chartData: chartDataFiltered,
                    chartDataFilters: searchFiltersDisplay
                });
            }
        }
    }

    renderFilters() {
        let filterTagList = [];
        for (let i = 0; i < this.state.chartDataFilters.length; i++) {
            filterTagList.push(
                <span key={i}
                      className={this.state.chartDataFilters[i][1] ? "badge badge-success" : "badge badge-danger"}>
                    {this.state.chartDataFilters[i][0]}
                </span>
            )
        }
        return (
            <div className="filter-tag-container">{filterTagList}</div>
        )
    }

    render() {
        if (!this.props.chartData) {
            return (
                <div></div>
            );
        }

        return (
            <div className="filter-container ">
                <div className="form-inline justify-content-center">
                    <div className="form-group">
                        <select
                            disabled={this.state.searchFilters.length > 0}
                            className="form-control mb-2 mr-sm-2 mb-sm-0 disabled "
                            name="numResult"
                            value={this.state.numResult}
                            onChange={this.handleInputChange}>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value={this.props.chartData.length}>All ({this.props.chartData.length})</option>
                        </select>
                    </div>
                    <div className="form-group input-group">
                        <input
                            placeholder="Metal Face Doom"
                            className="form-control"
                            type="textbox"
                            name="searchFilters"
                            value={this.state.searchFilters}
                            onChange={this.handleInputChange}
                        />
                        <span className="input-group-btn">
                        <input
                            className="btn btn-secondary"
                            type="submit"
                            value="Search"
                            onClick={this.handleSearch}
                        />
                    </span>
                    </div>
                </div>
                {this.renderFilters()}
                <ChartContainer chartData={this.state.chartData.slice(0, this.state.numResult)}/>
            </div>
        );
    }
}

export default ResultFilter;
