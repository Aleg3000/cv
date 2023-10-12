import { getCurrentProject, getIsProjectChanging } from 'entities/Works/model/selectors/getCurrentProject/getCurrentProject'
import { getIsWorksClosing, getIsWorksOpen } from 'entities/Works/model/selectors/getIsWorksOpen/getIsWorksOpen'
import { type FC, useRef, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
// import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Work.module.scss'
import gsap from 'gsap'
import { projectData } from 'entities/Works/data/data'
// import Paragraph from 'shared/ui/Paragraph/Paragraph'
import { typedMemo } from 'app/types/memo'
import { ProjectLinks } from 'widgets/ProjectLinks'

interface WorkProps {
    className?: string
}

export const Work: FC<WorkProps> = typedMemo(() => {
    const isProjectChanging = useSelector(getIsProjectChanging)
    const isWorksClosing = useSelector(getIsWorksClosing)
    const isWorksOpened = useSelector(getIsWorksOpen)
    const currentProject = useSelector(getCurrentProject)
    // const description = projectData[currentProject].description
    const { description, imageD: image } = projectData[currentProject]
    const text = useRef(null)
    const wrapper = useRef(null)
    const q = gsap.utils.selector(text)

    useLayoutEffect(() => {
        if (isWorksClosing) {
            gsap.to(wrapper.current, {
                onComplete: () => { wrapper.current.style.visibility = 'hidden' },
                opacity: 0,
                duration: 1
            })
        }
    }, [isWorksClosing, wrapper])

    useLayoutEffect(() => {
        if (isWorksClosing || !isWorksOpened) return
        if (isProjectChanging) {
            gsap.to(wrapper.current, {
                duration: 1,
                y: 20,
                opacity: 0,
                delay: 0.5
            })
            // gsap.to(q('.paragraphSpan'), {
            //     duration: 0.5,
            //     opacity: 0,
            //     stagger: 0.03,
            //     transform: 'translateY(100%)'
            // })
        } else {
            gsap.to(wrapper.current, {
                onStart: () => { wrapper.current.style.visibility = 'visible' },
                duration: 1,
                opacity: 1,
                y: 0
            })
            // gsap.to(q('.paragraphSpan'), {
            //     duration: 0.5,
            //     delay: 1,
            //     opacity: 1,
            //     stagger: 0.03,
            //     transform: 'translateY(0%)'
            // })
        }
    }, [isProjectChanging, isWorksClosing, isWorksOpened, q, text, wrapper])

    return (
        <div ref={wrapper} className={cls.work}>
            <figure className={cls.figure}>
                <img src={image} className={cls.image}></img>
            </figure>
            <div className={cls.descriptionWrapper}>
                <div ref={text} className={cls.description}>
                    <p>{description}</p>
                    <ProjectLinks currentProject={currentProject}/>
                    {/* <Paragraph text={description} /> */}
                </div>
            </div>
        </div>
    )
})
