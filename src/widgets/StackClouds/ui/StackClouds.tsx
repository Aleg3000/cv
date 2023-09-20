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

const Cloud1 = typedMemo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud1} viewBox="0 0 93 63" fill="none">
            <path d="M92 34.8903C92 29.1903 87.42 24.5702 81.74 24.5002C81.74 24.3702 81.76 24.2402 81.76 24.1102C81.76 18.2802 77.03 13.5502 71.2 13.5502C70.4 13.5502 69.62 13.6503 68.87 13.8203C66.49 6.38025 59.52 0.990234 51.29 0.990234C43.94 0.990234 37.59 5.29025 34.62 11.5103C32.23 9.98025 29.39 9.09024 26.34 9.09024C17.83 9.09024 10.94 15.9802 10.94 24.4902C10.94 25.4302 11.03 26.3502 11.19 27.2402C4.79 28.6102 0 34.3002 0 41.1102C0 48.9402 6.35 55.2903 14.18 55.2903C16.31 55.2903 18.34 54.8202 20.15 53.9702C22.3 58.6702 27.05 61.9402 32.56 61.9402C35.91 61.9402 38.97 60.7303 41.35 58.7303C42.88 60.7203 45.27 62.0103 47.98 62.0103C51.73 62.0103 54.9 59.5403 55.96 56.1403C58.69 58.7903 62.41 60.4302 66.51 60.4302C74.87 60.4302 81.65 53.6503 81.65 45.2903C87.37 45.2603 92.01 40.6203 92.01 34.8903H92Z"/>
        </svg>
    )
})

const Cloud2 = typedMemo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud2} viewBox="0 0 117 70" fill="none">
            <path d="M116.92 38.7498C116.92 31.3398 110.91 25.3298 103.5 25.3298C103.14 25.3298 102.79 25.3598 102.43 25.3798C102.43 25.3598 102.43 25.3398 102.43 25.3298C102.43 16.3798 95.18 9.12982 86.23 9.12982C82.86 9.12982 79.73 10.1598 77.14 11.9198C73.47 5.29982 66.41 0.819824 58.31 0.819824C50.21 0.819824 43.51 5.07981 39.77 11.4198C37.26 9.96982 34.35 9.12982 31.25 9.12982C21.93 9.12982 14.37 16.5998 14.21 25.8798C6.36999 27.8698 0.559998 34.9698 0.559998 43.4398C0.559998 53.4398 8.67001 61.5498 18.67 61.5498C19.35 61.5498 20.02 61.5098 20.69 61.4398C23.26 64.3698 27.04 66.2198 31.24 66.2198C35.44 66.2198 38.87 64.5298 41.43 61.8298C45.43 66.6998 51.5 69.8098 58.3 69.8098C63.61 69.8098 68.48 67.9098 72.26 64.7598C75.64 66.5998 79.51 67.6498 83.63 67.6498C93.94 67.6498 102.71 61.0898 106.02 51.9198C112.22 50.7298 116.91 45.2898 116.91 38.7398L116.92 38.7498Z"/>
        </svg>
    )
})

const Cloud3 = typedMemo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud3} viewBox="0 0 160 82" fill="none">
            <path d="M159.43 42.9199C159.43 38.9299 157.21 35.4599 153.94 33.6899C154.88 32.0999 155.43 30.2399 155.43 28.2499C155.43 22.3399 150.64 17.5499 144.73 17.5499C141.23 17.5499 138.14 19.2299 136.19 21.8299C135.7 21.8899 135.21 21.9899 134.75 22.1299C134.75 21.9999 134.77 21.8799 134.77 21.7499C134.77 14.9399 129.25 9.41992 122.44 9.41992C119.42 9.41992 116.65 10.5099 114.51 12.3199C111.5 5.31992 104.55 0.419922 96.4399 0.419922C90.4599 0.419922 85.11 3.09992 81.5 7.31992C80.04 6.74992 78.44 6.41992 76.78 6.41992C69.6 6.41992 63.78 12.2399 63.78 19.4199C63.78 19.6699 63.8 19.9099 63.82 20.1499C63.5 20.1099 63.18 20.0899 62.85 20.0899C58.53 20.0899 54.99 23.3999 54.62 27.6199C53.08 25.8699 50.83 24.7499 48.31 24.7499C46.27 24.7499 44.4 25.4799 42.95 26.6799C41.53 25.4699 39.69 24.7499 37.68 24.7499C34.17 24.7499 31.18 26.9699 30.03 30.0799C28.6 28.9299 26.79 28.2499 24.81 28.2499C21.17 28.2499 18.08 30.5799 16.93 33.8399C15.31 32.9399 13.44 32.4199 11.45 32.4199C5.19001 32.4199 0.119995 37.4899 0.119995 43.7499C0.119995 50.0099 5.19001 55.0799 11.45 55.0799C14.56 55.0799 17.37 53.8299 19.42 51.7999C20.52 56.3599 24.62 59.7499 29.52 59.7499C30.23 59.7499 30.92 59.6799 31.59 59.5399C33.63 64.1399 38.23 67.3399 43.59 67.3399C47.46 67.3399 50.92 65.6599 53.33 62.9999C55.23 68.0399 60.09 71.6299 65.79 71.6299C68.84 71.6299 71.63 70.5999 73.88 68.8799C75.83 71.0399 78.65 72.4099 81.79 72.4099C82.99 72.4099 84.14 72.1999 85.21 71.8399C87.08 77.3199 92.27 81.2699 98.38 81.2699C105.33 81.2699 111.08 76.1799 112.12 69.5199C114.66 71.5299 117.87 72.7399 121.36 72.7399C127.12 72.7399 132.11 69.4699 134.6 64.6799C134.99 64.7099 135.38 64.7399 135.78 64.7399C142.91 64.7399 148.89 59.8599 150.6 53.2599C155.61 52.4599 159.44 48.1399 159.44 42.8999L159.43 42.9199Z"/>
        </svg>
    )
})

const Cloud4 = typedMemo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud4} viewBox="0 0 138 66" fill="none">
            <path d="M86.2 1.65022C96.72 5.16022 98.23 14.5302 100.33 23.7202C107.38 12.2302 118.04 24.2302 115.07 33.7902C114.75 33.9002 115.19 33.8402 115.31 33.5202C117.96 26.2602 137.51 33.1002 137.92 41.4702C138.51 53.4502 122.37 54.6302 114.58 50.3002C122.94 67.1902 86.5 65.3702 89.73 52.3202C85.59 69.0502 41.45 70.1202 42.25 51.0702C42 56.9602 12.25 62.6502 14.26 48.0802C-9.30999 55.7502 1.58002 24.2102 12.93 36.8502C7.38002 27.2602 20.3 24.1302 26.01 30.8202C15.69 18.7302 44.27 6.02018 51.76 20.2402C47.17 10.9902 59.91 7.17022 62.61 16.3402C60.91 7.01022 71.03 1.70021 78.88 0.890209C81.53 0.620209 83.97 0.920167 86.19 1.66017L86.2 1.65022Z"/>
        </svg>
    )
})

const Cloud5 = typedMemo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud5} viewBox="0 0 117 80" fill="none">
            <path d="M108.38 37.23C108.44 36.57 108.47 35.9 108.47 35.22C108.47 22.6 98.24 12.36 85.61 12.36C79.4 12.36 73.77 14.84 69.65 18.87C67.73 8.41 58.57 0.47998 47.55 0.47998C38.96 0.47998 31.5 5.29999 27.72 12.37C12.43 12.5 0.0700073 24.94 0.0700073 40.26C0.0700073 55.58 12.56 68.16 27.97 68.16C33.14 68.16 37.98 66.75 42.13 64.29C45 73.26 53.41 79.76 63.34 79.76C73.27 79.76 81.64 73.29 84.53 64.34C86.23 65.18 88.13 65.66 90.15 65.66C91.96 65.66 93.69 65.27 95.25 64.59C96.98 65.28 98.86 65.66 100.84 65.66C109.25 65.66 116.07 58.84 116.07 50.43C116.07 44.76 112.97 39.83 108.38 37.21V37.23Z"/>
        </svg>
    )
})

const clouds = [Cloud1, Cloud2, Cloud3, Cloud4, Cloud5]

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
    const CloudElement = clouds[index % clouds.length]

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
            {/* <svg viewBox="0 0 209 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M179.677 32.28L180.157 33.1383L179.984 33.3033L184.378 32.8247C189.964 32.2164 195.732 34.6284 200.147 38.8395C204.558 43.0468 207.465 48.9097 207.465 54.9531C207.465 67.0978 197.132 77.0727 184.216 77.0727C181.394 77.0727 178.71 76.5623 176.193 75.6887L174.91 75.2434L174.339 76.4761C170.754 84.2297 162.602 89.6984 153.058 89.6984C148.225 89.6984 143.755 88.2859 140.034 85.8978L139.094 85.2946L138.247 86.022C129.239 93.754 117.304 98.4836 104.198 98.4836C92.2008 98.4836 81.1713 94.5076 72.4806 87.8949L71.6219 87.2416L70.7294 87.8478C67.0144 90.3714 62.4878 91.8741 57.5825 91.8741C48.9991 91.8741 41.5496 87.3141 37.707 80.6578L37.1327 79.663L36.0225 79.9581C33.7228 80.5695 31.2962 80.9132 28.7913 80.9132C13.646 80.9132 1.5 69.2234 1.5 54.9367C1.5 40.6495 13.6458 28.9617 28.7881 28.9931H28.7913C31.2291 28.9931 33.5912 29.3209 35.8633 29.9023L37.0491 30.2057L37.5842 29.1049C40.4405 23.2293 46.685 19.1035 53.9901 19.1035C56.8809 19.1035 59.5998 19.7737 62.0385 20.922L63.105 21.4242L63.8451 20.5067C73.1496 8.97123 87.714 1.5166 104.215 1.5166C120.717 1.5166 135.382 9.00459 144.668 20.6014L145.365 21.4717L146.399 21.0553C149.541 19.7903 152.978 19.0871 156.599 19.0871C166.629 19.0871 175.298 24.4499 179.677 32.28Z" fill="url(#paint0_linear_31_352)" stroke="#4ECAFF" strokeWidth="3"/>
                <defs>
                    <linearGradient id="paint0_linear_31_352" x1="104.483" y1="0.0166016" x2="104.483" y2="99.9836" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#D8F6FF"/>
                        <stop offset="1" stopColor="#96E6FF"/>
                    </linearGradient>
                </defs>
            </svg> */}
            <CloudElement />
            <p>{name}</p>
        </div>
    )
})
