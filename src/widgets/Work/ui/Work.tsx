import { type MutableRefObject, type FC } from 'react'
// import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Work.module.scss'

interface WorkProps {
    className?: string
    image: string
    description: string
    text: MutableRefObject<HTMLDivElement>
    wrapper: MutableRefObject<HTMLDivElement>
}

export const Work: FC<WorkProps> = ({ className, description, wrapper, image, text }) => {
    return (
        <div ref={wrapper} className={cls.work}>
            <figure className={cls.figure}>
                <img src={image} className={cls.image}></img>
            </figure>
            <div ref={text} className={cls.description}>
                {description}
            </div>
        </div>
    )
}
