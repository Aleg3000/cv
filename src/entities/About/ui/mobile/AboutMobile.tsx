import { getIsAboutOpen, getIsAboutOpening, getIsAboutClosing } from 'entities/About/model/selectors/getIsAboutOpen/getIsAboutOpen'
import { useLayoutEffect, useRef, type FC } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import Title from 'shared/ui/Title/Title'
import cls from './AboutMobile.module.scss'
import gsap from 'gsap'
import { aboutActions } from 'entities/About/model/slice/aboutSlice'
import { getIsWorksOpen } from 'entities/Works/model/selectors/getIsWorksOpen/getIsWorksOpen'
import { SocialMedia } from 'widgets/SocialMedia'
import CloseButton from 'shared/ui/CloseButton/CloseButton'

interface AboutMobileProps {
    className?: string
}

const AboutMobile: FC<AboutMobileProps> = ({ className }) => {
    const title = useRef<HTMLHeadingElement>()
    const description = useRef(null)
    const wrapper = useRef(null)
    const dispatch = useAppDispatch()
    const isAboutOpened = useSelector(getIsAboutOpen)
    const isAboutOpening = useSelector(getIsAboutOpening)
    const isAboutClosing = useSelector(getIsAboutClosing)

    const isWorksOpened = useSelector(getIsWorksOpen)

    const tl = useRef<GSAPTimeline>()
    const q = gsap.utils.selector(wrapper)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                paused: true,
                onComplete: () => dispatch(aboutActions.setIsOpen(true)),
                onReverseComplete: () => dispatch(aboutActions.setIsOpen(false))
            })
            tl.current.to(wrapper.current, {
                top: 0,
                height: '80svh',
                ease: 'none'
            })
                .to(description.current, {
                    opacity: 1
                })
                .to(q('svg'), {
                    opacity: 1
                    // stagger: 0.5
                })
        }, wrapper)

        return () => { ctx.revert() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    useLayoutEffect(() => {
        if (isAboutOpening) tl.current.play()
        if (isAboutClosing) tl.current.reverse()
    }, [isAboutOpening, isAboutClosing])

    // const onClick = (): void => {
    //     if (isAboutOpened) {
    //         dispatch(aboutActions.close())
    //     } else if (!isWorksOpened) {
    //         dispatch(aboutActions.open())
    //     }
    // }
    const openAbout = (): void => {
        if (!isWorksOpened && !isAboutOpened) {
            dispatch(aboutActions.open())
        }
    }

    const closeAbout = (): void => {
        dispatch(aboutActions.close())
    }

    return (
        <div ref={wrapper} onClick={openAbout} className={classNames(cls.AboutMobile, [className])}>
            <Title ref={title} className={cls.title} text='ABOUT ME' />
            <section ref={description} className={cls.description}>
                <h2>oleg ganin</h2>
                <div className={cls.fadedText}>
                    <p>Known for my creative prowess in front-end web development, I excel in crafting visually stunning and user-friendly websites. My coding skills turn concepts into captivating digital realities.<br></br><br></br>Beyond the screen, I'm an avid thrill-seeker, finding excitement in snowboarding, tackling enduro trails, and going for runs. These adventures inspire my work, infusing my designs with a sense of thrill and seamless flow.<br></br><br></br> With a commitment to excellence, my portfolio speaks for itself. Whether you need a top-tier web developer or an adventurous companion on the slopes and trails, I'm here to deliver.</p>
                    <p>My Stack: JavaScript, React, Redux, WebGl</p>
                </div>
            </section>
            <SocialMedia />
            {isAboutOpened && <CloseButton onClick={closeAbout} />}
        </div>
    )
}

export default AboutMobile
