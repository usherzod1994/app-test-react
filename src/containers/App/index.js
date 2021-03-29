import React, {Component, Fragment} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import MainApp from "./MainApp";
import Login from "../../routes/login";
import Header from "../../components/Headers";
import Home from "../../routes/routesObservers/home";
import config from "../../utils/config"
import "../../styles/index.scss";
import Post from "../../routes/routesObservers/post";
import Footer from "../../components/Footer";
import Search from "../../routes/routesObservers/search";

const RestrictedRoute = ({component: Component, authUser, ...rest}) => (
    <Route{...rest} render={props => <Component {...props} />}/>);

const {openPages} = config;
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            auth:false
        };
        this.getInitPage = this.getInitPage.bind(this);
    }

    getClientPages = () => {
        return <Fragment>
            <div
                id="page" className="body-wrapper">
                <div className="slz-wrapper-content">
                    <Header/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/post' component={Post}/>
                    <Route exact path='/search' component={Search}/>
                    {/*<Route exact path='/services' component={Services}/>*/}
                    {/*<Route exact path='/service/:id' component={ServiceInfo}/>*/}
                    {/*<Route exact path='/blog' component={Blog}/>*/}
                    {/*<Route exact path='/tracking' component={Tracking}/>*/}
                    {/*<Route exact path='/blog/:page' component={Blog}/>*/}
                    {/*<Route exact path='/news/:id' component={NewsInfo}/>*/}
                    {/*<Route exact path='/contact' component={Contact}/>*/}
                    <Footer/>
                </div>
            </div>
        </Fragment>
    };


    getInitPage = (path) => {

        if (openPages.includes(path) || path.includes('/service/') || path.includes('/news/') || path.includes('/blog/')) {
            return this.getClientPages();
        }

        if (path.includes('/login')){
            return  <Route exact path={'/login'} component={Login}/>
        }
        if (path.includes('/manager')) {
            return <RestrictedRoute path={`${this.props.match.url}`} component={MainApp}/>
        }

    };

    render() {
        const {location} = this.props;
        if (location.pathname === '/' ||  location.pathname === '') {
            return (<Redirect to={'/home'}/>);
        }
        return (
            <div>
                <Switch>
                    {this.getInitPage(location.pathname)}
                </Switch>
            </div>
        );
    }
}

export default App;