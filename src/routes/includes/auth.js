import { lazy } from 'react'
import { makeRoute } from '../utils'


export default [
    makeRoute('/login', 'login:index',lazy(() => import('@/pages/login')))
]