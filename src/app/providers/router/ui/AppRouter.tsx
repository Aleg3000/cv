import { Suspense, type ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig, routerConfigMobile } from 'shared/config/routerConfig/routerConfig'
import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia/useMatchMedia'

function AppRouter (): ReactElement {
    const { isMobile } = useMatchMedia()

    const currentRouterConfig = isMobile ? routerConfigMobile : routerConfig
    return (
        <Routes>
            {Object.values(currentRouterConfig).map(({ path, element }) => <Route
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
