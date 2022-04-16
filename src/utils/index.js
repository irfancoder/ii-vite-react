import { Suspense, createElement } from 'react'
import axios from 'axios'
import { redirect } from '@/routes'


/**
 * Default request config
 */
const REQUEST_CONFIG = {
    withCredentials: true
}

/**
 * Performs a GET request and return the result.
 * @param {string} url Request URL      *** Use relative path with '/' at the start
 * @param {Object} config Request config
 * @returns {any} Result
 */
export const get = (url, config = REQUEST_CONFIG) => {
    return new Promise((resolve, reject) => {
        axios
            .get(url, config)
            .then(({ data }) => {
                // if (response.data?.toast) {}
                resolve(data)
                if (data?.redirect) redirect(data.redirect)
            })
            .catch(({ response: { data }, message }) => {
                // if (data?.toast) {}
                if (data?.redirect) redirect(data?.redirect)
                reject(new Error(message))
            })
    })
}

/**
 * Performs a POST request and return the result
 * @param {string} url Request URL      *** Use relative path with '/' at the start
 * @param {Object} payload Request payload
 * @param {Object} config Request config
 * @returns {any} Result
 */
export const post = (url, payload, callback, config = REQUEST_CONFIG) => {
    return new Promise((resolve, reject) => {
        axios
            .post(url, payload, config)
            .then(({ data }) => {
                // if (response.data?.toast) {}
                if (typeof callback === 'function') callback(data)
                resolve(data)
                if (data?.redirect) redirect(data.redirect)
            })
            .catch(({ response: { data }, message }) => {
                // if (payload instanceof Form) {
                const exceptions = window._.uniqBy(data?.errors, 'field')
                payload?.exceptions.add(exceptions)
                // }

                // if (data?.toast) {}
                if (data?.redirect) redirect(data?.redirect)
                reject(new Error(message))
            })
    })
}
/**
 * Renders page with layouts (if available) & apply lazy-loading 
 * @param {ReactNode} page Page component
 * @param {ReactNode} layout Layout(s) component
 * @returns {ReactNode} Wrapped page + layout
 */
export const renderPage = (page, layout = null) => {
    /* No Layout */
    if (!layout) return createElement(Suspense, null, createElement(page))

    /* Nested Layout */
    if (Array.isArray(layout)) {
        const layouts = layout.reduceRight((previousLayout, currentLayout) => {
            return createElement(
                currentLayout,
                null,
                createElement(
                    previousLayout,
                    null,
                    createElement(page)
                ) 
            )
                
        })
        return createElement(Suspense, null, layouts) 
    }

    /* Single Layout */
    return createElement(Suspense, null, createElement(layout, null, createElement(page)))

}