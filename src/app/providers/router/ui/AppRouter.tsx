import { Suspense, useEffect, useState, type ReactElement } from 'react'
import { Routes, Route } from 'react-router-dom'
import { routerConfig, routerConfigMobile } from 'shared/config/routerConfig/routerConfig'
import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia/useMatchMedia'

function AppRouter (): ReactElement {
    const { isMobile } = useMatchMedia()

    // const [isNormal, setIsNormal] = useState(true)

    // const checkOrientation = () => {
    //     // setIsNormal(window.orientation === 90 || window.orientation === -90)
    //     if (window.orientation === 90 || window.orientation === -90) {
    //         setIsNormal(false)
    //     } else {
    //         setIsNormal(true)
    //     }
    // }

    // useEffect(() => {
    //     window.addEventListener('orientationchange', checkOrientation, false)
    //     window.addEventListener('resize', checkOrientation, false)

    //     checkOrientation()

    //     return () => {
    //         window.removeEventListener('orientationchange', checkOrientation)
    //         window.removeEventListener('resize', checkOrientation)
    //     }
    // }, [])

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
