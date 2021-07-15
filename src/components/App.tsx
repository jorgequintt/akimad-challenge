import React, { Component } from 'react';
import { Link, HashRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './Pages/SearchPage';
import UserPage from './Pages/UserPage';

// MaterialUI
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//SCSS
import '../styles/main.scss';

// Redux
import { Provider } from 'react-redux';
import store from '../redux/store';
import NavBar from './NavBar';

const theme = createMuiTheme({
    palette: {
        background: {
            default: '#DDD',
        },
    },
});

export class App extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    componentDidMount() {}

    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={theme}>
                    <CssBaseline />
                    <NavBar />
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <SearchPage />
                            </Route>
                            <Route path="/user/:username">
                                <UserPage />
                            </Route>
                        </Switch>
                    </Router>
                </MuiThemeProvider>
            </Provider>
        );
    }
}

export default App;
