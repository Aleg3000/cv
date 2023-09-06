import { projectData } from 'entities/Works/data/data'
import { worksActions } from 'entities/Works/model'
import { getCurrentProject, getIsProjectChanging } from 'entities/Works/model/selectors/getCurrentProject/getCurrentProject'
import { type ReactElement, type FC, useRef, useLayoutEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import Title from 'shared/ui/Title/Title'
import cls from './ProjectNavigation.module.scss'
import gsap from 'gsap'
import { getIsWorksClosing } from 'entities/Works/model/selectors/getIsWorksOpen/getIsWorksOpen'

interface ProjectNavigationProps {
    className?: string
}

export const ProjectNavigation: FC<ProjectNavigationProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const currentProject = useSelector(getCurrentProject)
    const currentTitle = projectData[currentProject].title
    const isWorksClosing = useSelector(getIsWorksClosing)
    const title = useRef<HTMLHeadingElement>()
    const q = gsap.utils.selector(title)
    const isProjectChanging = useSelector(getIsProjectChanging)
    const [isNext, setIsNext] = useState<'next' | 'prev'>('next')

    const toNextProject = (e: React.MouseEvent<SVGSVGElement>): void => {
        e.stopPropagation()
        dispatch(worksActions.setIsProjectChanging(true))
        setIsNext('next')
    }
    const toPrevProject = (e: React.MouseEvent<SVGSVGElement>): void => {
        e.stopPropagation()
        dispatch(worksActions.setIsProjectChanging(true))
        setIsNext('prev')
    }

    useLayoutEffect(() => {
        // if (isWorksClosing) return
        if (isProjectChanging || isWorksClosing) {
            console.log('closing')
            gsap.to(q('.titleSpan'), {
                duration: 5,
                ease: 'power1.in',
                opacity: 0,
                stagger: 0.05,
                onComplete: () => {
                    dispatch(worksActions.setIsProjectChanging(false))
                    if (isWorksClosing) return
                    isNext === 'next'
                        ? dispatch(worksActions.toNextProject())
                        : dispatch(worksActions.toPrevProject())
                }
            })
        }
    }, [dispatch, isProjectChanging, isNext, q, isWorksClosing])

    useLayoutEffect(() => {
        if (isProjectChanging || isWorksClosing) return
        gsap.to(q('.titleSpan'), {
            duration: 1,
            opacity: 1,
            stagger: 0.05
        })
    }, [q, isProjectChanging, isWorksClosing])

    return (
        <div className={classNames(cls.ProjectNavigation, [className])}>
            <Arrow onClick={toPrevProject} arrowClassName={cls.arrow} />
            <Title ref={title} text={currentTitle} />
            <Arrow onClick={toNextProject} arrowClassName={cls.arrow}/>
        </div>
    )
}

interface ArrowProps {
    arrowClassName: string
    onClick: (e: React.MouseEvent<SVGSVGElement>) => void
}

const Arrow: FC<ArrowProps> = ({ arrowClassName, onClick }): ReactElement => {
    const arrow = useRef()
    const isWorksClosing = useSelector(getIsWorksClosing)

    useLayoutEffect(() => {
        gsap.to(arrow.current, { opacity: 1, duration: 2, delay: 1 })
    }, [])

    useLayoutEffect(() => {
        if (isWorksClosing) gsap.to(arrow.current, { opacity: 0, duration: 1 })
    }, [isWorksClosing])

    return (
        <svg ref={arrow} onClick={(e) => { onClick(e) }} className={arrowClassName} xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
            <mask id="mask0_31_403" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                <rect x="99.9902" y="99.9902" width="99.9902" height="99.9902" transform="rotate(-180 99.9902 99.9902)" fill="#D9D9D9"/>
                <rect x="99.9902" y="99.9902" width="99.9902" height="99.9902" transform="rotate(-180 99.9902 99.9902)" stroke="#FD1EBC"/>
            </mask>
            <g mask="url(#mask0_31_403)">
                <path d="M38.3298 43.4334L86.8667 43.4334L86.8667 56.5572L38.3298 56.5572L59.3694 77.5968L49.9953 86.8667L13.1239 49.9953L49.9953 13.1239L59.3694 22.3938L38.3298 43.4334Z" fill="#FD1EBC"/>
                <path d="M38.3298 43.4334L86.8667 43.4334L86.8667 56.5572L38.3298 56.5572L59.3694 77.5968L49.9953 86.8667L13.1239 49.9953L49.9953 13.1239L59.3694 22.3938L38.3298 43.4334Z" stroke="#79BFFF"/>
            </g>
        </svg>
    )
}
