import SocialMedia from 'widgets/SocialMedia/SocialMedia'
import { type FC, useRef, useLayoutEffect } from 'react'
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
import { getZIndex } from 'shared/lib/zIndexes/zIndexes'
// import Paragraph from 'shared/ui/Paragraph/Paragraph'

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
    const q = gsap.utils.selector(wrapper)
    // const a = gsap.utils.selector(description)

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
                // .to(q('.paragraphSpan'), {
                //     duration: 1,
                //     ease: 'power1.in',
                //     opacity: 1,
                //     transform: 'translateY(0%)',
                //     stagger: 0.01,
                //     onComplete: () => { console.log('start878787 anim') }
                // })
        }, wrapper)

        return () => { ctx.revert() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    // const onMouseEnter = () => {
    // }

    // const onMouseLeave = () => {
    // }

    return (
        <div
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            onClick={onClick}
            ref={wrapper}
            className={classNames(cls.About, [className])}
            style={{ zIndex: getZIndex('about') }}
        >
            {isWorksOpen ? <ProjectNavigation /> : <Title ref={title} className={cls.title} text='ABOUT ME' />}
            <section ref={description} className={cls.description}>
                <h2>oleg ganin</h2>
                {/* <Paragraph text='Im a creative developer with years of experience in building products and appealing web experiences. I&aposve collaborated with individuals and teams to build experiences for SMEs and large enterprises including Wise, Google, Interswitch and Intelia.Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics.' /> */}
                <p>I&aposm a creative developer with years of experience in building products and appealing web experiences. I&aposve collaborated with individuals and teams to build experiences for SMEs and large enterprises including Wise, Google, Interswitch and Intelia.Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics.</p>
            </section>
            <SocialMedia />
        </div>
    )
}
