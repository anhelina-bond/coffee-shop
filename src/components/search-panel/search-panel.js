import {Component} from 'react';

import "./search-panel.scss";

class SearchPanel extends Component {
    constructor (props) {
        super(props);
        this.state = {
            term: ""
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term);
    }

    render() {
        return(
            <>
                <div className="search-wrapper">
                    <div className="search-text">
                        Looking for
                    </div>
                    <input 
                        type="text"
                        className="search-input"
                        placeholder="start typing here..." 
                        value={this.state.term}
                        onChange={this.onUpdateSearch}
                    />
                </div>
            </>
            
        )
    }
}

export default SearchPanel;