import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { type ReactElement, Suspense, useState } from 'react'
import { Preloader } from 'widgets/Preloader'

export const App = (): ReactElement => {
    const { theme } = useTheme()

    const [isPreloaded, setIsPreloaded] = useState(false)

    return (
        <div className={classNames('app', [theme])}>
            <Suspense>
                {isPreloaded
                    ? <AppRouter />
                    : <Preloader onPreloaded={setIsPreloaded} />
                }
            </Suspense>
        </div>
    )
}
