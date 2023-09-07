import { MainPage } from 'pages/MainPage'
import { MainPageMobile } from 'pages/MainPageMobile'
import { NotFoundPage } from 'pages/NotFoundPage'
import { type RouteProps } from 'react-router-dom'

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND = 'not_found'
}

export const RouterPaths: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '*'
}

export const routerConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPaths.main,
        element: <MainPage />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPaths.not_found,
        element: <NotFoundPage />
    }
}

export const routerConfigMobile: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RouterPaths.main,
        element: <MainPageMobile />
    },
    [AppRoutes.NOT_FOUND]: {
        path: RouterPaths.not_found,
        element: <NotFoundPage />
    }
}
