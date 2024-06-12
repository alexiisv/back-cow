import { Fragment, Suspense } from 'react'
import { Outlet, Route } from 'react-router-dom'

function renderRoutes (routes) {
  return routes.map((route, index) => {
    const Component = route.element || Fragment
    const Layout = route.layout || Fragment
    const Guard = route.guard || Fragment

    return (
      <Route
        key={index}
        path={route.path}
        element={
          <Suspense fallback={null}>
            <Guard>
              <Layout>
                {route.children ? <Outlet /> : <Component />}
              </Layout>
            </Guard>
          </Suspense>
        }
      >
        {route.children && renderRoutes(route.children)}
      </Route>
    )
  })
}

export default renderRoutes
