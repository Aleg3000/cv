import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { type ReactElement, Suspense } from 'react'

export const App = (): ReactElement => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', [theme])}>
            <Suspense>
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}
