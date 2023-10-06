import { getCurrentProject, getProjectQuantity } from 'entities/Works/model/selectors/getCurrentProject/getCurrentProject'
import { useEffect, type FC } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './SliderNavigation.module.scss'

interface SliderNavigationProps {
    className?: string
}

export const SliderNavigation: FC<SliderNavigationProps> = ({ className }) => {
    const projectQuantity = useSelector(getProjectQuantity)
    const dots = new Array(projectQuantity).fill(1)
    const currentProject = useSelector(getCurrentProject)

    useEffect(() => {

    }, [currentProject])

    return (
        <div className={classNames(cls.SliderNavigation, [className])}>
            {dots.map((el, index) => {
                return (
                    <div key={index} className={classNames(cls.dotOutside, [], { [cls.dotOutsideActive]: index === currentProject })}>
                        <div className={cls.dotInside}></div>
                    </div>
                )
            })}
        </div>
    )
}
