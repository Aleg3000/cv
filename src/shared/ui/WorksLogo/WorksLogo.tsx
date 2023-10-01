import { typedMemo } from 'app/types/memo'
import { forwardRef } from 'react'
import cls from './WorksLogo.module.scss'
import WorksLogoSVG from 'shared/assets/icons/works.svg'

const WorksLogo = typedMemo(forwardRef<HTMLDivElement>((_, ref) => {
    return (
        <div ref={ref} className={cls.logo}>
            <WorksLogoSVG />
        </div>
    )
}))

export default WorksLogo
