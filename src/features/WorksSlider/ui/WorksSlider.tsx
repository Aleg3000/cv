import { typedMemo } from 'app/types/memo'
import { projectData } from 'entities/Works/data/data'
import { forwardRef, useRef } from 'react'
import Card from 'shared/ui/Card/Card'
import Slider from 'shared/ui/Slider/Slider'
import cls from './WorksSlider.module.scss'

export const WorksSlider = typedMemo(forwardRef<HTMLDivElement>((_, ref) => {
    const wrapper = useRef<HTMLDivElement>(null)
    return (
        <div ref={ref} className={cls.WorksSliderWrapper}>
            <div className={cls.worksSliderVisibleContainer}>
                <Slider main={wrapper} className={cls.WorksSlider}>
                    {projectData.map((project, index) => <Card key={index} currentProject={index} image={project.imageM} title={project.title} description={project.description} />)}
                </Slider>
            </div>
        </div>
    )
}))
