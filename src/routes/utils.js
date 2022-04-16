/**
 * Returns formatted route object for react-router
 * @param {string} path URL path
 * @param {ReactNode} component Page component
 * @param {string} name Route namespace
 * @param {ReactNode} layout Layout component
 * @returns
 */
export const makeRoute = (path, name, component, layout = null) => {
    if (!path || !component || !name) throw new Error('Path, component and name are required')
    return {
        path: path,
        element: component,
        name: name,
        layout: layout
    }
}