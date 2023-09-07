import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './NotFoundPage.module.scss'

interface NotFoundPageProps {
    className?: string
}

const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.NotFoundPage, [className])}>
            {'Page not found'}
            <Link to={'/'}>To main page</Link>
        </div>
    )
}

export default NotFoundPage
