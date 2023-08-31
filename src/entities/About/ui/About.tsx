import SocialMedia from 'widgets/SocialMedia/SocialMedia'
import { type FC, useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getIsAboutClosing, getIsAboutOpen, getIsAboutOpening } from '../model/selectors/getIsAboutOpen/getIsAboutOpen'
import { aboutActions } from '../model/slice/aboutSlice'
import cls from './About.module.scss'
import gsap from 'gsap'
import { getIsWorksOpen, getIsWorksOpening } from 'entities/Works/model/selectors/getIsWorksOpen/getIsWorksOpen'
import Title from 'shared/ui/Title/Title'
import { ProjectNavigation } from 'widgets/ProjectNavigation'

interface AboutProps {
    className?: string
}

export const About: FC<AboutProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const isAboutOpened = useSelector(getIsAboutOpen)
    const isAboutOpening = useSelector(getIsAboutOpening)
    const isAboutClosing = useSelector(getIsAboutClosing)

    const isWorksOpen = useSelector(getIsWorksOpen)
    const isWorksOpening = useSelector(getIsWorksOpening)

    const description = useRef(null)
    const wrapper = useRef(null)
    const tl = useRef<GSAPTimeline>()
    const title = useRef<HTMLHeadingElement>()
    const q = gsap.utils.selector(title)

    const onClick = (): void => {
        console.log('hi')
        if (isAboutOpened) {
            dispatch(aboutActions.close())
        } else if (!isWorksOpen) {
            dispatch(aboutActions.open())
        }
    }

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                paused: true,
                onComplete: () => dispatch(aboutActions.setIsOpen(true)),
                onReverseComplete: () => dispatch(aboutActions.setIsOpen(false))
            })
            tl.current.to(wrapper.current, { height: '68rem' })
                .to(description.current, {
                    opacity: 1
                })
        }, wrapper)

        return () => { ctx.revert() }
    }, [dispatch])

    useLayoutEffect(() => {
        if (isAboutOpening) tl.current.play()
        if (isAboutClosing) tl.current.reverse()
    }, [isAboutOpening, isAboutClosing])

    useLayoutEffect(() => {
        if (isWorksOpening) {
            gsap.to(q('.titleSpan'), {
                duration: 1,
                ease: 'power1.in',
                opacity: 0,
                stagger: 0.05,
                onComplete: () => { console.log('start anim') }
            })
        } else if (!isWorksOpen) {
            gsap.to(q('.titleSpan'), {
                duration: 1,
                opacity: 1,
                stagger: 0.05,
                onComplete: () => { console.log('end anim') }
            })
        }
    }, [isWorksOpening, isWorksOpen, q])
    // useLayoutEffect(() => {
    //     if (isWorksOpening) {
    //         gsap.to(title.current, {
    //             opacity: 0,
    //             duration: 1,
    //             onComplete: () => { console.log('end disappering') }
    //         })
    //     } else if (!isWorksOpen) {
    //         gsap.to(title.current, {
    //             opacity: 1,
    //             duration: 1,
    //             onComplete: () => { console.log('end appering') }
    //         })
    //     }
    // }, [isWorksOpening, isWorksOpen])

    // const onMouseEnter = () => {
    //     gsap.to(q('.titleSpan'), {
    //         duration: 1,
    //         opacity: 0,
    //         stagger: 0.05,
    //         onComplete: () => { console.log('start anim') }
    //     })
    // }

    // const onMouseLeave = () => {
    //     gsap.to(q('.titleSpan'), {
    //         duration: 1,
    //         opacity: 1,
    //         stagger: 0.05,
    //         onComplete: () => { console.log('end anim') }
    //     })
    // }

    return (
        <div
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            onClick={onClick} ref={wrapper} className={classNames(cls.About, [className])}>
            {isWorksOpen ? <ProjectNavigation /> : <Title ref={title} className={cls.title} text='ABOUT ME' />}
            <section ref={description} className={cls.description}>
                <h2>oleg ganin</h2>
                <p>I&aposm a creative developer with years of experience in building products and appealing web experiences. I&aposve collaborated with individuals and teams to build experiences for SMEs and large enterprises including Wise, Google, Interswitch and Intelia.Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics.</p>
            </section>
            <SocialMedia />
        </div>
    )
}
