import { Component, type ErrorInfo, type ReactNode, Suspense } from 'react'

interface ErrorBoundaryProps {
    children: ReactNode
    fallback: ReactNode
}

interface ErrorBoundaryState {
    hasError: boolean
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor (props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError (): ErrorBoundaryState {
        // Update state so the next render will show the fallback UI.
        return { hasError: true }
    }

    componentDidCatch (error: Error, info: ErrorInfo): void {
        // Example "componentStack":
        //   in ComponentThatThrows (created by App)
        //   in ErrorBoundary (created by App)
        //   in div (created by App)
        //   in App
        console.log(error)
    }

    render (): ReactNode {
        if (this.state.hasError) {
            console.log('errrrrrrrror')
            // You can render any custom fallback UI
            // return this.props.fallback;
            return <Suspense fallback={''}>{this.props.fallback}</Suspense>
        }

        return this.props.children
    }
}

export default ErrorBoundary
