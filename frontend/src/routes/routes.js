import { lazy } from 'react'
import { PATHS } from './paths'

export const routes = [
  {
    path: PATHS.LOGIN,
    element: lazy(async () => await import('@/pages/Auth/Login'))
  },
  {
    path: PATHS.HOME,
    layout: lazy(async () => await import('@/pages/Shared/Layout')),
    guard: lazy(async () => await import('@/routes/guards/AuthGuard')),
    children: [
      {
        path: PATHS.HOME,
        element: lazy(async () => await import('@/pages/Home'))
      },
      {
        path: PATHS.COWS,
        children: [
          {
            path: '',
            element: lazy(async () => await import('@/pages/Cows'))
          },
          {
            path: ':id',
            element: lazy(async () => await import('@/pages/Cows/pages/Cow'))
          },
          {
            path: ':id/:property',
            element: lazy(async () => await import('@/pages/Cows/pages/Graph'))
          }
        ]
      },
      {
        path: PATHS.USERS,
        layout: lazy(async () => await import('@/pages/Users')),
        children: [
          {
            path: '',
            element: lazy(async () => await import('@/pages/Users/pages/Home'))
          },
          {
            path: 'edit/:username',
            element: lazy(async () => await import('@/pages/Users/pages/Edit'))
          },
          {
            path: 'create',
            element: lazy(async () => await import('@/pages/Users/pages/Create'))
          }
        ]
      }
    ]
  }
]
