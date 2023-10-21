import { forwardRef, useLayoutEffect, useRef, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './WorksMobile.module.scss'
import gsap from 'gsap'
import { typedMemo } from 'app/types/memo'
import { useSelector } from 'react-redux'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { worksActions } from 'entities/Works/model/slice/worksSlice'
import CloseButton from 'shared/ui/CloseButton/CloseButton'
import { WorksSlider } from 'features/WorksSlider'
import { zIndexes } from 'shared/lib/zIndexes/zIndexes'
import { getWorks } from 'entities/Works/model/selectors/getWorks/getWorks'
import { getAbout } from 'entities/About/model/selectors/getAbout/getAbout'

interface WorksMobileProps {
    className?: string
}

const WorksMobile: FC<WorksMobileProps> = ({ className }) => {
    const dispatch = useAppDispatch()
    const {
        isOpen: isWorksOpened,
        isClosing: isWorksClosing,
        isOpening: isWorksOpening
    } = useSelector(getWorks)
    const {
        isOpen: isAboutOpened,
        isOpening: isAboutOpening,
        isClosing: isAboutClosing
    } = useSelector(getAbout)

    const logo = useRef(null)
    const wrapper = useRef()
    const logoWrapper = useRef()
    const sliderWrapper = useRef<HTMLDivElement>(null)
    const closeButton = useRef(null)

    useLayoutEffect(() => {
        gsap.fromTo(wrapper.current, {
            autoAlpha: 0
        },
        {
            delay: 0.5,
            autoAlpha: 1,
            duration: 0.8
        })
    }, [])

    useLayoutEffect(() => {
        if (isAboutOpening) {
            gsap.to(logo.current, {
                duration: 0.4,
                scaleY: 0.36,
                ease: 'none'
            })
            gsap.to([wrapper.current, logoWrapper.current], {
                duration: 0.4,
                height: '20.1svh',
                ease: 'none'
            })
        } else if (isAboutClosing) {
            gsap.to(logo.current, {
                duration: 0.4,
                delay: 1, // sum of about description animation
                scaleY: 1,
                ease: 'none'
            })
            gsap.to([wrapper.current, logoWrapper.current], {
                duration: 0.4,
                delay: 1, // sum of about description animation
                height: '52.1svh',
                ease: 'none'
            })
        }
    }, [isAboutClosing, isAboutOpening])

    useLayoutEffect(() => {
        if (isWorksOpening) {
            gsap.to(wrapper.current, {
                height: '100svh',
                onComplete: () => dispatch(worksActions.setIsOpen(true))
            })
            gsap.to(logoWrapper.current, {
                height: '17rem'
            })
            gsap.to(logo.current, {
                scaleY: 0.36,
                scaleX: 0.65,
                ease: 'none'
            })
            gsap.to(sliderWrapper.current, {
                delay: 0.5,
                opacity: 1
            })
        } else if (isWorksClosing) {
            gsap.to(wrapper.current, {
                height: '52.1svh',
                onComplete: () => dispatch(worksActions.setIsOpen(false))
            })
            gsap.to(logoWrapper.current, {
                height: '52.1svh'
            })
            gsap.to(logo.current, {
                scaleY: 1,
                scaleX: 1,
                ease: 'none'
            })
            gsap.to(sliderWrapper.current, {
                opacity: 0
            })
        }
    }, [dispatch, isWorksClosing, isWorksOpening])

    const openWorks = (): void => {
        if (!isAboutOpened && !isWorksOpening && !isWorksOpened) {
            dispatch(worksActions.open())
        }
    }

    const closeWorks = (): void => {
        if (isWorksOpened) {
            dispatch(worksActions.close())
        }
    }

    useLayoutEffect(() => {
        if (isWorksOpened && isWorksClosing) {
            gsap.to(closeButton.current, {
                x: 100,
                duration: 1,
                rotate: 360
            })
        }
        if (isWorksOpened && !isWorksClosing) {
            gsap.fromTo(closeButton.current, {
                delay: 2,
                duration: 1,
                x: 100
            }, {
                x: 0,
                rotate: -360
            })
        }
    }, [isWorksOpened, isWorksClosing])

    return (
        <div style={{ zIndex: zIndexes.works }} ref={wrapper} onClick={openWorks} className={classNames(cls.WorksMobile, [className])}>
            <WorksSlider ref={sliderWrapper}/>
            <div ref={logoWrapper} className={cls.logoWrapper}>
                <WorkLogoMobile ref={logo} />
            </div>
            {isWorksOpened && <CloseButton ref={closeButton} onClick={closeWorks}/>}
        </div>
    )
}

const WorkLogoMobile = typedMemo(forwardRef<SVGSVGElement>((_, ref) => {
    return (
        <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width='21.5rem' height='29.6rem' viewBox="0 0 213 296" fill="none">
            <g filter="url(#filter0_d_488_818)">
                <path d="M6 5H18.9292L21.5884 187.996H21.7718L26.4483 5H40.4779L44.1458 187.996H44.3292L47.6303 5H60.5595L51.4815 284H36.6267L32.2252 89.2486H32.0418L27.0902 284H12.6022L6 5Z" fill="white"/>
                <path d="M63.3641 238.545V50.4551C63.3641 13.2289 70.6081 5 78.5857 5C86.5633 5 93.8074 13.2289 93.8074 50.4551V238.545C93.8074 275.771 86.5633 284 78.5857 284C70.6081 284 63.3641 275.771 63.3641 238.545ZM80.8782 229.532V59.4677C80.8782 51.6306 80.6031 41.0506 78.5857 41.0506C76.5684 41.0506 76.2933 51.6306 76.2933 59.4677V229.532C76.2933 237.369 76.5684 247.949 78.5857 247.949C80.6031 247.949 80.8782 237.369 80.8782 229.532Z" fill="white"/>
                <path d="M99.0978 284V5H114.319C122.297 5 129.541 18.7149 129.541 61.427V86.1138C129.541 106.882 127.34 129.61 119.546 131.569V132.353C127.707 134.312 129.541 147.635 129.541 179.375V234.626C129.541 261.664 130.733 273.028 131.467 284H118.354C117.437 276.163 116.612 267.15 116.612 247.949V184.469C116.612 166.836 116.429 153.513 112.027 153.513V284H99.0978ZM112.027 44.9691V121.381H113.586C115.695 121.381 116.612 117.07 116.612 103.747V62.6025C116.612 49.2795 115.695 44.9691 113.586 44.9691H112.027Z" fill="white"/>
                <path d="M147.667 5V128.434H147.85L154.361 5H167.107L159.221 120.597L167.198 284H154.361L147.85 137.838H147.667V284H134.738V5H147.667Z" fill="white"/>
                <path d="M201 104.531H188.071V59.0759C188.071 51.2388 187.337 41.0506 185.32 41.0506C183.303 41.0506 183.027 51.6306 183.027 59.4677C183.027 137.447 201 111.584 201 214.25V238.545C201 275.771 193.756 284 185.778 284C177.801 284 170.098 274.987 170.098 237.761V174.281H183.027V229.14C183.027 240.504 183.761 247.949 185.778 247.949C187.796 247.949 188.071 237.369 188.071 229.532C188.071 139.798 170.098 149.594 170.098 85.3301V50.4551C170.098 13.2289 177.342 5.00001 185.32 5.00001C193.297 5.00001 201 12.4452 201 49.6713V104.531Z" fill="white"/>
                <path d="M6 2.5H3.44014L3.5007 5.05914L10.1029 284.059L10.1606 286.5H12.6022H27.0902H29.5275L29.5894 284.064L31.9919 189.571L34.1273 284.056L34.1825 286.5H36.6267H51.4815H53.9015L53.9802 284.081L60.8641 72.5128V238.545C60.8641 257.232 62.6694 269.01 65.6771 276.197C67.1957 279.826 69.0819 282.435 71.3401 284.131C73.6337 285.855 76.1292 286.5 78.5857 286.5C81.0423 286.5 83.5378 285.855 85.8314 284.131C88.0896 282.435 89.9758 279.826 91.4944 276.197C94.5021 269.01 96.3074 257.232 96.3074 238.545V50.4551C96.3074 31.7678 94.5021 19.9898 91.4944 12.8026C89.9758 9.1738 88.0896 6.56537 85.8314 4.8687C83.5378 3.14548 81.0423 2.5 78.5857 2.5C76.1292 2.5 73.6337 3.14548 71.3401 4.8687C69.0819 6.56537 67.1957 9.1738 65.6771 12.8026C64.3176 16.0513 63.2038 20.2378 62.3913 25.5764L63.0582 5.0813L63.1422 2.5H60.5595H47.6303H45.1749L45.1307 4.95491L44.1108 61.4938L42.9774 4.9499L42.9283 2.5H40.4779H26.4483H24.0114L23.9492 4.93613L22.3423 67.8146L21.429 4.96368L21.3932 2.5H18.9292H6ZM96.5978 284V286.5H99.0978H112.027H114.527V284V268.172C114.857 274.986 115.348 279.824 115.871 284.291L116.13 286.5H118.354H131.467H132.238H134.139H134.738H147.667H150.167V284V246.028L151.863 284.111L151.97 286.5H154.361H167.198H169.823L169.695 283.878L168.301 255.323C169.125 264.431 170.637 271.071 172.644 275.815C174.218 279.533 176.153 282.224 178.433 283.987C180.749 285.78 183.276 286.5 185.778 286.5C188.235 286.5 190.73 285.855 193.024 284.131C195.282 282.435 197.168 279.826 198.687 276.197C201.695 269.01 203.5 257.232 203.5 238.545V214.25C203.5 162.723 198.984 143.293 194.422 126.93C194.111 125.814 193.8 124.715 193.491 123.62C191.995 118.328 190.537 113.17 189.286 107.031H201H203.5V104.531V49.6713C203.5 30.9789 201.581 19.369 198.432 12.3525C196.839 8.80174 194.874 6.29666 192.561 4.6911C190.224 3.06963 187.726 2.50001 185.32 2.50001C182.863 2.50001 180.368 3.14549 178.074 4.86871C175.816 6.56537 173.93 9.17381 172.411 12.8026C169.404 19.9898 167.598 31.7678 167.598 50.4551V85.3301C167.598 115.117 171.441 129.259 175.553 144.393C175.923 145.759 176.297 147.132 176.669 148.526C178.473 155.268 180.28 162.535 181.791 171.781H170.098H167.598V174.281V237.761C167.598 239.024 167.607 240.256 167.624 241.457L161.725 120.621L169.601 5.17015L169.783 2.5H167.107H154.361H151.989L151.864 4.86832L150.167 37.0482V5V2.5H147.667H134.738H132.238V5V252.132C132.115 247.115 132.041 241.36 132.041 234.626V179.375C132.041 163.528 131.589 152.03 130.057 144.215C128.939 138.51 127.116 134.141 123.941 131.716C125.048 130.574 125.935 129.141 126.653 127.637C128.094 124.614 129.149 120.689 129.927 116.335C131.49 107.598 132.041 96.5542 132.041 86.1138V61.427C132.041 39.9866 130.23 25.5723 127.303 16.4339C124.44 7.49698 120.089 2.5 114.319 2.5H99.0978H96.5978V5V284ZM185.527 222.082C185.556 224.486 185.571 226.968 185.571 229.532C185.571 230.544 185.566 231.596 185.554 232.66C185.536 231.541 185.527 230.366 185.527 229.14V222.082ZM185.527 59.4677C185.527 58.4873 185.532 57.4694 185.543 56.4392C185.562 57.3331 185.571 58.2176 185.571 59.0759V65.9012C185.542 63.8389 185.527 61.6963 185.527 59.4677Z" stroke="#FD1EBC" strokeWidth="5"/>
            </g>
            <defs>
                <filter id="filter0_d_488_818" x="0.880371" y="0" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="7" dy="7"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.117647 0 0 0 0 0.73858 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_488_818"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_488_818" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}))

export default WorksMobile
