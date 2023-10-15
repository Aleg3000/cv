import { getIsAboutOpen } from 'entities/About/model/selectors/getIsAboutOpen/getIsAboutOpen'
import { type FC, useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import cls from './Works.module.scss'
import gsap from 'gsap'
import { aboutActions } from 'entities/About'
import { Work } from 'widgets/Work'
import { getWorks } from '../../model/selectors/getWorks/getWorks'
import { getZIndex } from 'shared/lib/zIndexes/zIndexes'
import { typedMemo } from 'app/types/memo'

import { worksActions } from 'entities/Works'
import WorksLogo from 'shared/ui/WorksLogo/WorksLogo'

interface WorksProps {
    className?: string
}

export const Works: FC<WorksProps> = typedMemo(({ className }) => {
    const dispatch = useAppDispatch()
    const {
        isOpen: isWorksOpened,
        isClosing: isWorksClosing,
        isOpening: isWorksOpening
    } = useSelector(getWorks)
    const isAboutOpened = useSelector(getIsAboutOpen)

    const logo = useRef<HTMLDivElement>()
    const wrapper = useRef(null)
    const tl = useRef<GSAPTimeline>()

    useLayoutEffect(() => {
        if (isAboutOpened) {
            gsap.to(logo.current, {
                transform: 'translateX(0%)'
            })
        } else if (!isAboutOpened && !isWorksOpened && !isWorksOpening) {
            gsap.to(logo.current, {
                transform: 'translateX(-60%)'
            })
        }
    }, [dispatch, isAboutOpened, isWorksOpened, isWorksOpening])

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                paused: true,
                onComplete: () => dispatch(worksActions.setIsOpen(true)),
                onReverseComplete: () => dispatch(worksActions.setIsOpen(false))
            })
            tl.current
                .to(logo.current, {
                    transform: 'translateX(0%)',
                    ease: 'back.out(3)',
                    duration: 1
                })
                .to(wrapper.current, {
                    width: '108rem',
                    duration: 1.7,
                    ease: 'back.out(1.4)'
                }, '>-0.1')
        }, wrapper)

        return () => { ctx.revert() }
    }, [dispatch])

    useLayoutEffect(() => {
        if (isWorksOpening) {
            if (isAboutOpened) {
                dispatch(aboutActions.close())
                return
            }
            tl.current.play()
        }
        if (isWorksClosing) tl.current.reverse()
    }, [dispatch, isWorksOpening, isWorksClosing, isAboutOpened])

    const onClick = (): void => {
        if (!isWorksOpened && !isAboutOpened) {
            dispatch(worksActions.open())
        }
    }

    return (
        <div
            ref={wrapper}
            onClick={onClick}
            className={classNames(cls.Works, [className])}
            style={{ zIndex: getZIndex('works') }}
        >
            <WorksLogo ref={logo} />
            <Work/>
            {isWorksOpened && <div onClick={() => { dispatch(worksActions.close()) }} className={cls.close}></div>}
        </div>
    )
})
