import { lazy } from 'react'
import { makeRoute } from '../utils'

import Authenticated from '@/layout/authenticated'
import Guest from '@/layout/guest'


export default [
    makeRoute('/', 'home:index', lazy(() => import('@/pages/home')), [Authenticated, Guest]),
    makeRoute('/page2', 'home:page2:index', lazy(() => import('@/pages/home')), Authenticated),
    makeRoute('/page2/:id', 'home:page2:show', lazy(() => import('@/pages/home')), Guest)
]