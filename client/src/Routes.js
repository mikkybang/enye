import React from "react";
import { Route, Switch } from "react-router-dom";
//Components import
import NotFound from "./components/NotFound/NotFound";
import UserView from "./components/UserView/UserView";
import UserForm from "./components/UserForm/UserForm";

class Routes extends React.Component {
    render(){
        return(

            <Switch>
            <Route exact path="/" component={UserForm} />
            <Route exact path="/all" component={UserView} />
            <Route path="*" component={NotFound} />
            </Switch>
        )
    }

}
export default Routes