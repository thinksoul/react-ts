import Sidebar from './containers/sidebar/sidebar'
import Navbar from './containers/navbar/navbar'
import Footbar from './containers/footbar/footbar'
import{Fragment} from 'react'
import './index.css'

export  const Layout = ()=>{
    return (
        <Fragment>
            <div className="navbar-box">
                <Navbar/>
            </div>
            <div className="sidebar-box">
                <Sidebar/>
            </div>
            <div className="footbar-box">
                <Footbar/>
            </div>
        </Fragment>
    )
}

