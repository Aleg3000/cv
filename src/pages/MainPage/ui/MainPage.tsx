import { About } from 'entities/About'
import { Works } from 'entities/Works'
import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { zIndexes } from 'shared/lib/zIndexes/zIndexes'
import { Dude } from 'widgets/Dude'
import { Flowers } from 'widgets/Flowers'
import { HireMe } from 'widgets/HireMe'
import { Me } from 'widgets/Me'
import { StackClouds } from 'widgets/StackClouds'
import cls from './MainPage.module.scss'

interface MainPageProps {
    className?: string
}

const MainPage: FC<MainPageProps> = ({ className }) => {
    return (
        <div style={{ zIndex: zIndexes.main }} className={classNames(cls.MainPage, [className])}>
            <Dude />
            <Me />
            <Flowers />
            <StackClouds />
            <About />
            <Works />
            <HireMe />
        </div>
    )
}

export default MainPage
