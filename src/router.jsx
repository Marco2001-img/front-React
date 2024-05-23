import {createBrowserRouter} from 'react-router-dom'
import Menu from './Layouts/Menu'
import Novedades from './Components/Novedades'
import Inicio from './Views/Inicio'
import Logear from './Views/Logear'
import Registro from './Views/Registro'
import Now from './Components/Now'
import Reciente from './Views/Reciente'
import Quien from './Views/Quien'
import Soporte from './Views/Soporte'
import Register from './Views/Register'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Menu/>,
        children:[
            {
                index:true,
                element:<Inicio/>
            }
        ]
    },
    {
        path:'/miTienda',
        element: <Novedades/>,
        children:[
            {
                path:'/miTienda/login',
                element:<Logear/>
            },
            {
                path:'/miTienda/inicio',
                element:<Registro/>
            },
            {
                path:'/miTienda/Registar',
                element:<Register/>
            }
        ]
    },
    {
        path:'/miTienda/novedades',
        element:<Now/>,
        children:[
            {
                path:'/miTienda/novedades/reciente',
                element:<Reciente/>
            },
            {
                path:'/miTienda/novedades/quienSomos',
                element:<Quien/>
            },
            {
                path:'/miTienda/novedades/soporte',
                element:<Soporte/>
            }
        ]
    }
])

export default router