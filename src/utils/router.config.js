import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {
  setStorage,
  getStorage,
  removeStorage,
} from './storage'

function redirectToLogin(){
  let token = getStorage('token');
  if(!token){
    return <Redirect to="/login" />
  }else{
    return false
  }
}

export const renderRoutes = (routes)=>{
    return( 
          <Switch>
             { routes.map(item=>{
                return(
                  <div>
                    <Route 
                      path={item.path} 
                      component={item.component}
                      exact={item.exact}
                    >
                    </Route>
                    {redirectToLogin()} 
                  </div> 
                )
              })
            }
          </Switch>
    )
}
