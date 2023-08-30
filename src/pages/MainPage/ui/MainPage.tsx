import HireMe from 'widgets/HireMe/HireMe'
import { About } from 'entities/About'
import { Works } from 'entities/Works'
import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './MainPage.module.scss'

interface MainPageProps {
    className?: string
}

const MainPage: FC<MainPageProps> = ({ className }) => {
    return (
        <div className={classNames(cls.MainPage, [className])}>
            <About />
            <Works />
            <HireMe />
        </div>
    )
}

export default MainPage
