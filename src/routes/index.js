import React from "react";
import {Route, Switch} from "react-router-dom";
import Login from "./login";
import Settings from "./routesManagers/settings";
import Category from "./routesManagers/category";
import CategoryItem from "./routesManagers/category-item";
import asyncComponent from "../utils/asyncComponent";
import Home from "./routesManagers/home";



const App = ({match}) => (
    <div className="gx-main-content-wrapper">
        {console.log("match ---" , match)}
        <Switch>
            <Route path={`${match.url}login`} component={Login}/>
            <Route path={`${match.url}settings`} component={Settings}/>
            <Route path={`${match.url}categories`} component={asyncComponent(()=>import('./routesManagers/category'))}/>
            <Route path={`${match.url}category/:id`} component={asyncComponent(()=>import('./routesManagers/category/product-addition'))}/>
            <Route path={`${match.url}product`} component={asyncComponent(()=>import('./routesManagers/product'))}/>
            <Route path={`${match.url}category-item`} component={CategoryItem}/>
        </Switch>
    </div>
);

export default App;
