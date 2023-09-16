/* eslint-disable react-hooks/exhaustive-deps */
import { getIsAboutOpen } from 'entities/About/model/selectors/getIsAboutOpen/getIsAboutOpen'
import { projectData } from 'entities/Works/data/data'
import { getCurrentProject, getIsProjectChanging } from 'entities/Works/model/selectors/getCurrentProject/getCurrentProject'
import { getIsWorksOpen } from 'entities/Works/model/selectors/getIsWorksOpen/getIsWorksOpen'
import { useLayoutEffect, useRef, useState, type FC } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { getZIndex } from 'shared/lib/zIndexes/zIndexes'
import cls from './StackClouds.module.scss'
import gsap from 'gsap'
import { getTime } from 'shared/lib/getTime/getTime'
import { typedMemo } from 'app/types/memo'

interface StackCloudsProps {
    className?: string
}

const fullStack = ['react', 'js', 'redux', 'three.js', 'css', 'scss', 'html', 'git', 'storybook']

export const StackClouds: FC<StackCloudsProps> = typedMemo(({ className }) => {
    const currentProject = useSelector(getCurrentProject)
    const isWorksOpened = useSelector(getIsWorksOpen)
    const isAboutOpened = useSelector(getIsAboutOpen)
    const clouds = useRef(null)
    const isProjectChanging = useSelector(getIsProjectChanging)
    const q = gsap.utils.selector(clouds)

    const [stack, setStack] = useState<string[]>([])

    useLayoutEffect(() => {
        if (isAboutOpened) {
            setStack(fullStack)
        }
        if (isWorksOpened) {
            setStack(projectData[currentProject].stack)
        }
        // eslint-disable-next-line no-mixed-operators
        if (isProjectChanging || !isAboutOpened && !isWorksOpened && stack.length) {
            gsap.to(q('.cloud'), {
                y: '-20rem',
                duration: 0.5,
                stagger: 0.05,
                ease: 'back.in(3)',
                onComplete: () => { setStack([]) }
            })
        }
    }, [isAboutOpened, isWorksOpened, currentProject, isProjectChanging])

    return (
        <div ref={clouds} style={{ zIndex: getZIndex('clouds') }} className={classNames(cls.StackClouds, [className])}>
            {stack.map((stack, key, arr) => <Cloud q={arr.length} key={stack} index={key} name={stack}/>)}
        </div>
    )
})

const Cloud = typedMemo(({ name, index, q }: { name: string, index: number, q: number }) => {
    const cloud = useRef(null)
    const height = window.innerHeight * 0.2 * Math.random() // 0.2 how low from the top of screen clouds will be

    useLayoutEffect(() => {
        const cloudWidth = cloud.current.getBoundingClientRect().width
        const width = document.documentElement.clientWidth - cloudWidth

        const direction = Math.random() > 0.5 ? 'right' : 'left'
        const leftPos = (width / (q - 1)) * index
        const fullTime = 7.5 + Math.random() * 7.5
        const time = getTime(leftPos, document.documentElement.clientWidth, cloudWidth, direction, fullTime)

        gsap.fromTo(cloud.current,
            { y: '-10rem', left: `${leftPos}px` },
            {
                y: `${height}px`,
                delay: 0.1 * index,
                ease: 'elastic.out(1.2, 0.4)',
                duration: 1.5
            })

        gsap.to(cloud.current, {
            delay: 2,
            keyframes: [
                {
                    repeat: 0,
                    left: direction === 'left' ? '0px' : `${width}px`,
                    duration: time,
                    ease: 'none'
                },
                {
                    repeat: -1,
                    yoyo: true,
                    left: direction === 'left' ? `${width}px` : '0px',
                    duration: fullTime,
                    ease: 'none'
                }
            ]
        })
    }, [])

    return (
        <div ref={cloud} className={classNames(cls.cloud, ['cloud'])}>
            <svg viewBox="0 0 209 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M179.677 32.28L180.157 33.1383L179.984 33.3033L184.378 32.8247C189.964 32.2164 195.732 34.6284 200.147 38.8395C204.558 43.0468 207.465 48.9097 207.465 54.9531C207.465 67.0978 197.132 77.0727 184.216 77.0727C181.394 77.0727 178.71 76.5623 176.193 75.6887L174.91 75.2434L174.339 76.4761C170.754 84.2297 162.602 89.6984 153.058 89.6984C148.225 89.6984 143.755 88.2859 140.034 85.8978L139.094 85.2946L138.247 86.022C129.239 93.754 117.304 98.4836 104.198 98.4836C92.2008 98.4836 81.1713 94.5076 72.4806 87.8949L71.6219 87.2416L70.7294 87.8478C67.0144 90.3714 62.4878 91.8741 57.5825 91.8741C48.9991 91.8741 41.5496 87.3141 37.707 80.6578L37.1327 79.663L36.0225 79.9581C33.7228 80.5695 31.2962 80.9132 28.7913 80.9132C13.646 80.9132 1.5 69.2234 1.5 54.9367C1.5 40.6495 13.6458 28.9617 28.7881 28.9931H28.7913C31.2291 28.9931 33.5912 29.3209 35.8633 29.9023L37.0491 30.2057L37.5842 29.1049C40.4405 23.2293 46.685 19.1035 53.9901 19.1035C56.8809 19.1035 59.5998 19.7737 62.0385 20.922L63.105 21.4242L63.8451 20.5067C73.1496 8.97123 87.714 1.5166 104.215 1.5166C120.717 1.5166 135.382 9.00459 144.668 20.6014L145.365 21.4717L146.399 21.0553C149.541 19.7903 152.978 19.0871 156.599 19.0871C166.629 19.0871 175.298 24.4499 179.677 32.28Z" fill="url(#paint0_linear_31_352)" stroke="#4ECAFF" strokeWidth="3"/>
                <defs>
                    <linearGradient id="paint0_linear_31_352" x1="104.483" y1="0.0166016" x2="104.483" y2="99.9836" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D8F6FF"/>
                        <stop offset="1" stopColor="#96E6FF"/>
                    </linearGradient>
                </defs>
            </svg>
            <p>{name}</p>
        </div>
    )
})
