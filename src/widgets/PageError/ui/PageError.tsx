import { type ReactElement, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface PageErrorProps {
    className?: string
}

const PageError: FC<PageErrorProps> = ({ className }): ReactElement => {
    const reloadPage = (): void => { location.reload() }

    return (
        <div className={classNames(cls.PageError, [className])}>
            {'Произошла ошибка'}
            <Button onClick={reloadPage}>{'перезагрузить страницу'}</Button>
        </div>
    )
}

export default PageError
