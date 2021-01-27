import {Fragment} from 'react'
import routes from './routes'
import {renderRoutes} from '../../utils/router.config'
import {Layout as UI} from '../../components/nav/index'

const router = renderRoutes(routes)
export const Layout = ()=>{
    return (
        <Fragment>
            <UI/>
            {router}
        </Fragment>
    )
}

