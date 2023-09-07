import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { getZIndex } from 'shared/lib/zIndexes/zIndexes'
import { Dude } from 'widgets/Dude'
import cls from './MainPageMobile.module.scss'

interface MainPageProps {
    className?: string
}

const MainPageMobile: FC<MainPageProps> = ({ className }) => {
    return (
        <div style={{ zIndex: getZIndex('main') }} className={classNames(cls.MainPageMobile, [className])}>
            <Dude />
        </div>
    )
}

export default MainPageMobile
