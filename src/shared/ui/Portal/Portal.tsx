import { type ReactPortal, type FC, type ReactNode } from 'react'
import { createPortal } from 'react-dom'

interface PortalProps {
    children: ReactNode
    target?: HTMLElement
}

const Portal: FC<PortalProps> = ({ children, target = document.body }): ReactPortal => {
    return createPortal(children, target)
}

export default Portal
