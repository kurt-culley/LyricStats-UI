import React, {Component} from 'react';
import ResultContainer from './resultContainer';
import SearchContainer from './searchContainer';
import '../Styling/App.css';

class App extends Component {

    render() {
        return (
            <div id="container" className="container">
                <div className="row">
                    <div className="col-sm-10 offset-sm-1 text-center">
                        <SearchContainer/>
                        <ResultContainer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
