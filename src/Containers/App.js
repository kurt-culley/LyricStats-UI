import React, {Component} from 'react';
import ChartContainer from './chartContainer';
import SearchContainer from './searchContainer';
import '../Styling/App.css';

class App extends Component {

    render() {
        return (
            <div id="container" className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 text-center">
                        <SearchContainer/>
                        <ChartContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
