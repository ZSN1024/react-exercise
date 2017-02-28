import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'whatwg-fetch';
import List from 'components/List'



import "index.scss";

class App extends React.Component {

    constructor(props) {
        super(props)
    }


    render() {

        return (

                <div className="wrapper">

                    <div className="scrollContainer">
                        <div className="app clearFix">
                            {/*<Aside/>*/}
                            <div className="main clearFix">
                                {this.props.children}
                            </div>
                        </div>
                    </div>

                </div>

        )
    }
}

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={List}/>

        </Route>
    </Router>,
    document.getElementById('root')
);