
import routes from '@/routes'
import { Routes, Route } from 'react-router-dom'
import { renderPage } from './utils'
import '@/sass/index.scss'


function App() {
    return (
        <Routes>
            {routes.map(route => (
                <Route 
                    exact
                    key={route.path}
                    path={route.path}
                    element={renderPage(route.element, route.layout)}
                />
            ))}
        </Routes>
    )
}

export default App
