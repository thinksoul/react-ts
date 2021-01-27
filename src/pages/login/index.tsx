import {Fragment} from 'react'
import routes from './routes'
import {renderRoutes} from '../../utils/router.config'

const router = renderRoutes(routes)
export const Layout = ()=>{
    return (
        <Fragment>
            {router}
        </Fragment>
    )
}

