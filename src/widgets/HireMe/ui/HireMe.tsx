import { useLayoutEffect, useRef, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { zIndexes } from 'shared/lib/zIndexes/zIndexes'
import cls from './HireMe.module.scss'
import gsap from 'gsap'
import { typedMemo } from 'app/types/memo'

interface HireMeProps {
    className?: string
}

export const HireMe: FC<HireMeProps> = typedMemo(({ className }) => {
    const wrapper = useRef()
    const tl = useRef<GSAPTimeline>()

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({ repeat: -1, yoyo: true, paused: true })
            tl.current.to(wrapper.current, {
                keyframes: [
                    { rotate: -5 },
                    { rotate: 5 }
                ],
                ease: 'none'
            })
        }, wrapper)

        return () => { ctx.revert() }
    })

    const onMouseEnter = () => {
        tl.current.play()
    }
    const onMouseLeave = () => {
        tl.current.pause()
    }
    return (
        <a target="_blank" href='https://t.me/aleg3000' rel="noreferrer">
            <div ref={wrapper} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{ zIndex: zIndexes.hire }} className={classNames(cls.HireMe, [className])}>
                <svg xmlns="http://www.w3.org/2000/svg" width="301" height="216" viewBox="0 0 301 216" fill="none">
                    <path d="M162.758 182.116L161.833 182.012L161.158 182.652L136.59 205.956L117.556 194.402L116.527 193.777L115.493 194.394L84.5203 212.87L77.0923 195.296L76.3651 193.576L74.5991 194.184L42.1256 205.363L46.2512 184.402L46.7705 181.763L44.0943 182.025L14.5688 184.912L29.4978 162.665L31.1223 160.244L28.279 159.6L4.96395 154.318L29.405 133.231L31.1496 131.726L29.4141 130.21L14.6447 117.313L45.9885 100.307L47.2921 99.5998L46.9939 98.147L42.9653 78.5192L76.9497 68.4305L77.934 68.1383L78.2702 67.1681L86.5431 43.2952L117.969 41.9378L118.869 41.8989L119.437 41.1992L139.247 16.765L163.35 24.34L164.329 24.6479L165.151 24.0313L193.496 2.74382L206.851 17.6757L207.84 18.7819L209.185 18.1557L241.527 3.10311L243.089 22.6488L243.273 24.9456L245.521 24.4409L277.017 17.3694L267.372 39.2431L266.196 41.9106L269.108 42.0478L295.871 43.3081L275.964 65.3044L274.16 67.2982L276.589 68.4527L295.883 77.6247L267.56 97.0494L266.02 98.1058L266.969 99.7147L276.66 116.15L243.358 130.028L242.246 130.492L242.136 131.691L240.09 153.855L206.738 159.708L205.821 159.868L205.354 160.674L191.06 185.308L162.758 182.116Z" fill="#FBFF35" stroke="#FFB800" />
                    <text x="20" y="135">hire<br></br>me</text>
                </svg>
                <span>hire me</span>
            </div>
        </a>

    )
})
