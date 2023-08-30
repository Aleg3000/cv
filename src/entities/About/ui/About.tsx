import SocialMedia from 'widgets/SocialMedia/SocialMedia'
import { type FC, useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { getIsAboutClosing, getIsAboutOpen, getIsAboutOpening } from '../model/selectors/getIsAboutOpen/getIsAboutOpen'
import { aboutActions } from '../model/slice/aboutSlice'
import cls from './About.module.scss'
import gsap from 'gsap'
import { getIsWorksOpen } from 'entities/Works/model/selectors/getIsWorksOpen/getIsWorksOpen'

interface AboutProps {
    className?: string
}

export const About: FC<AboutProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const isAboutOpened = useSelector(getIsAboutOpen)
    const isAboutOpening = useSelector(getIsAboutOpening)
    const isAboutClosing = useSelector(getIsAboutClosing)

    const isWorksOpen = useSelector(getIsWorksOpen)

    const description = useRef(null)
    const wrapper = useRef(null)
    const tl = useRef<GSAPTimeline>()

    const onClick = (): void => {
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

    return (
        <div ref={wrapper} onClick={onClick} className={classNames(cls.About, [className])}>
            <div className={cls.wrapper}>
                <h1>about me</h1>
                <section ref={description} className={cls.description}>
                    <h2>oleg ganin</h2>
                    <p>I&aposm a creative developer with years of experience in building products and appealing web experiences. I&aposve collaborated with individuals and teams to build experiences for SMEs and large enterprises including Wise, Google, Interswitch and Intelia.Each project is an opportuinity to learn new concepts across multiple domains including arts, maths and physics.</p>
                </section>
                <SocialMedia />
            </div>
        </div>
    )
}
