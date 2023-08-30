import { Suspense, type ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig } from 'shared/config/routerConfig/routerConfig'

function AppRouter (): ReactElement {
    return (
        <Routes>
            {Object.values(routerConfig).map(({ path, element }) => <Route
                key={path}
                path={path}
                element={
                    <Suspense fallback={<div />}>
                        <div className="page-wrapper">{element}</div>
                    </Suspense>
                }
            />)}
        </Routes>
    )
}

export default AppRouter
