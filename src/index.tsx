import 'app/styles/index.scss'

import { createRoot } from 'react-dom/client'
import { App } from 'app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { PageError } from 'widgets/PageError'
import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider'

document.body.innerHTML = '<div id="app"></div>'

const root = createRoot(document.getElementById('app'))
root.render(
    <StoreProvider>
        <BrowserRouter basename='/cv'>
            <ErrorBoundary fallback={<PageError />}>
                <ThemeProvider>
                    <App />
                </ThemeProvider>
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>
)
