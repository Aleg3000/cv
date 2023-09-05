import { useEffect, useRef, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Me.module.scss'
import avatar from 'shared/assets/pictures/me.png'
import { useSelector } from 'react-redux'
import { getIsAboutClosing, getIsAboutOpening } from 'entities/About/model/selectors/getIsAboutOpen/getIsAboutOpen'
import gsap from 'gsap'
import { getZIndex } from 'shared/lib/zIndexes/zIndexes'

interface MeProps {
    className?: string
}

export const Me: FC<MeProps> = ({ className }) => {
    const isAboutOpening = useSelector(getIsAboutOpening)
    const isAboutClosing = useSelector(getIsAboutClosing)
    const tl = useRef<GSAPTimeline>()
    const wrapper = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({
                paused: true,
                delay: 2
            })
            tl.current.to(wrapper.current, { left: '51rem', rotate: 720, duration: 2 })
        }, wrapper)

        return () => { ctx.revert() }
    }, [])

    useEffect(() => {
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
}
