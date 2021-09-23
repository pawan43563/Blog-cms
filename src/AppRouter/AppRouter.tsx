import {Route,Switch} from 'react-router-dom';
import Blogs from '../pages/Blogs/Blogs';
import Blogdetails from '../components/Blogdetails/Blogdetails';

const AppRouter:React.FC=()=>{

    return(
        <Switch>
            <Route exact path="/">
                <Blogs />
            </Route>
            <Route exact path="/blogs/:id">
                <Blogdetails />
            </Route>
          </Switch>
    )
}

export default AppRouter;