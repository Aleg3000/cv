import { getCurrentProject, getIsProjectChanging } from 'entities/Works/model/selectors/getCurrentProject/getCurrentProject'
import { getIsWorksClosing, getIsWorksOpen } from 'entities/Works/model/selectors/getIsWorksOpen/getIsWorksOpen'
import { type FC, useRef, useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
// import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Work.module.scss'
import gsap from 'gsap'
import { projectData } from 'entities/Works/data/data'
import image from '../../../shared/assets/pictures/work1.png'
import Paragraph from 'shared/ui/Paragraph/Paragraph'

interface WorkProps {
    className?: string
    // image: string
    // description: string
    // text: MutableRefObject<HTMLDivElement>
    // wrapper: MutableRefObject<HTMLDivElement>
}

export const Work: FC<WorkProps> = ({ className }) => {
    const isProjectChanging = useSelector(getIsProjectChanging)
    const isWorksClosing = useSelector(getIsWorksClosing)
    const isWorksOpened = useSelector(getIsWorksOpen)
    const currentProject = useSelector(getCurrentProject)
    const description = projectData[currentProject].description
    const text = useRef(null)
    const wrapper = useRef(null)
    const q = gsap.utils.selector(text)

    useLayoutEffect(() => {
        console.log('preclosing')
        if (isWorksClosing) {
            console.log('closing')
            gsap.to(wrapper.current, {
                opacity: 0,
                duration: 0.5
            })
        }
    }, [isWorksClosing, wrapper])

    useLayoutEffect(() => {
        if (isWorksClosing || !isWorksOpened) return
        if (isProjectChanging) {
            gsap.to(wrapper.current, {
                duration: 1,
                opacity: 0,
                delay: 1
            })
            gsap.to(q('.paragraphSpan'), {
                duration: 0.5,
                // ease: 'power1.in',
                opacity: 0,
                stagger: 0.03,
                transform: 'translateY(100%)'
            })
        } else {
            console.log('vsdfberfb')
            gsap.to(wrapper.current, {
                duration: 1,
                opacity: 1
            })
            gsap.to(q('.paragraphSpan'), {
                duration: 0.5,
                // ease: 'power1.in',
                delay: 1,
                opacity: 1,
                stagger: 0.03,
                transform: 'translateY(0%)'
            })
        }
    }, [isProjectChanging, isWorksClosing, isWorksOpened, q, text, wrapper])

    return (
        <div ref={wrapper} className={cls.work}>
            <figure className={cls.figure}>
                <img src={image} className={cls.image}></img>
            </figure>
            <div ref={text} className={cls.description}>
                <Paragraph text={description} />
            </div>
        </div>
    )
}
