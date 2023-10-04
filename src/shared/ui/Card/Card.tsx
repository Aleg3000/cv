import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Card.module.scss'
import { ProjectLinks } from 'widgets/ProjectLinks'

interface CardProps {
    className?: string
    title: string
    description: string
    image: string
    currentProject: number
}

const Card: FC<CardProps> = ({ className, title, description, image, currentProject }) => {
    return (
        <div className={classNames(cls.Card, [className])}>
            <img src={image}></img>
            <div className={cls.fadeBox}></div>
            <section className={cls.description}>
                <ProjectLinks currentProject={currentProject}/>
                <h2>{title}</h2>
                <p>{description}</p>
            </section>
        </div>
    )
}

export default Card
