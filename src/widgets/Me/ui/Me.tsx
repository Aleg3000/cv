import { useLayoutEffect, useRef, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Me.module.scss'
import avatar from 'shared/assets/pictures/me.png'
import { useSelector } from 'react-redux'
import { getIsAboutClosing, getIsAboutOpening } from 'entities/About/model/selectors/getIsAboutOpen/getIsAboutOpen'
import gsap from 'gsap'
import { getZIndex } from 'shared/lib/zIndexes/zIndexes'
import { typedMemo } from 'app/types/memo'

interface MeProps {
    className?: string
}

export const Me: FC<MeProps> = typedMemo(({ className }) => {
    const isAboutOpening = useSelector(getIsAboutOpening)
    const isAboutClosing = useSelector(getIsAboutClosing)
    const tl = useRef<GSAPTimeline>()
    const wrapper = useRef(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                paused: true,
                delay: 2
            }).to(wrapper.current, { left: '51rem', rotate: 720, duration: 2 })
        }, wrapper)

        return () => { ctx.revert() }
    }, [])

    useLayoutEffect(() => {
        if (isAboutOpening) tl.current.play()
        if (isAboutClosing) tl.current.reverse()
    }, [isAboutClosing, isAboutOpening])

    return (
        <div style={{ zIndex: getZIndex('me') }} ref={wrapper} className={classNames(cls.Me, [className])}>
            <figure>
                <img src={avatar}></img>
            </figure>
        </div>
    )
})
