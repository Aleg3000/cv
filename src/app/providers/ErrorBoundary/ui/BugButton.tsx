import { type FC, useEffect, useState, type ReactElement } from 'react'
import { Button } from 'shared/ui/Button/Button'

interface BugButtonProps {
    className?: string
}

const BugButton: FC<BugButtonProps> = (): ReactElement => {
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        if (error) {
            throw new Error()
        }
    }, [error])

    const onThrow = (): void => { setError(true) }
    return (
        <Button onClick={onThrow}>{'кинуть ошибку'}</Button>
    )
}

export default BugButton
