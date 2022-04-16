import HomeRoutes from './includes/home'
import AuthRoutes from './includes/auth'
import { generatePath, useNavigate } from 'react-router-dom'
import { makeRoute } from './utils'
import { lazy } from 'react'


/**
 * All routes compiled here.
 */
const allRoutes = [
    ...HomeRoutes,
    ...AuthRoutes,
    makeRoute('*', 'error:index', lazy(() => import('@/pages/not-found')))
]

export default allRoutes

/**
 * Returns a formatted route string
 * @param {string} name Named route
 * @param {Object} params Params eg. :id
 * @param {Object} query Query eg. ?page=2
 * @returns {string} Resolved path
 */
export const route = (name, params = null, query = null) => {
    if (!allRoutes.length) return 

    const matchedRoute = allRoutes.find(route => route.name === name)
    if (matchedRoute.path.includes(':') && !params) throw new Error('Missing route parameter(s) \'' + matchedRoute.name + '\'')
    
    let queries = ''
    if (query) {
        queries = Object.entries(query).reduce((previous, [key, value], index) => {
            const isLast = index === Object.entries(query).length - 1
            return previous + `${key}=${value}${isLast ? '' : '&'}`
        }, '?')
    } 

    return generatePath(matchedRoute.path, params)?.concat(queries)
}

/**
 * Redirect to the given path. Path MUST be resolved beforehand
 * @param {string} path Resolved path
 */
export const redirect = (path) => {
    const navigate = useNavigate()
    navigate(path)
}

