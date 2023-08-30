import { getIsAboutOpen } from 'entities/About/model/selectors/getIsAboutOpen/getIsAboutOpen'
import { type FC, type RefObject, useEffect, useLayoutEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { worksActions } from '../model'
import { getIsWorksClosing, getIsWorksOpen, getIsWorksOpening } from '../model/selectors/getIsWorksOpen/getIsWorksOpen'
import cls from './Works.module.scss'
import gsap from 'gsap'
import { aboutActions } from 'entities/About'

interface WorksProps {
    className?: string
}

export const Works: FC<WorksProps> = ({ className }) => {
    const isAboutOpened = useSelector(getIsAboutOpen)

    const logo = useRef(null)
    const wrapper = useRef(null)
    const work = useRef(null)
    const text = useRef(null)
    const tl = useRef<GSAPTimeline>()

    const isWorksOpened = useSelector(getIsWorksOpen)
    const isWorksOpening = useSelector(getIsWorksOpening)
    const isWorksClosing = useSelector(getIsWorksClosing)
    const dispatch = useAppDispatch()

    useEffect(() => {
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
                    transform: 'translateX(0%)'
                })
                .to(wrapper.current, {
                    width: '108rem'
                })
                .to(work.current, {
                    opacity: 1
                })
                .to(text.current, {
                    opacity: 1
                })
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

    const onClick = () => {
        if (isWorksOpened) {
            dispatch(worksActions.close())
        } else {
            dispatch(worksActions.open())
        }
    }

    return (
        <div ref={wrapper} onClick={onClick} className={classNames(cls.Works, [className])}>
            <WorksLogo logoRef={logo} />
            <div ref={work} className={cls.work}>
                <figure className={cls.figure}>
                    <image className={cls.image}></image>
                </figure>
                <div ref={text} className={cls.description}>
                    I&aposm a creative developer with years of experience in building products and appealing web experiences. I&aposve collaborated with individuals and teams to build experiences
                </div>
            </div>
        </div>
    )
}

const WorksLogo = ({ logoRef }: { logoRef: RefObject<SVGSVGElement> }) => {
    return (
        <svg ref={logoRef} className={cls.logo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 293 483" fill="none">
            <g filter="url(#filter0_d_99_107)">
                <path d="M6 5H24.2335L27.9837 310.443H28.2423L34.8374 5H54.6227L59.7953 310.443H60.054L64.7093 5H82.9429L70.1406 470.686H49.1915L42.9843 145.622H42.7257L35.7426 470.686H15.3107L6 5Z" fill="white"/>
                <path d="M86.8981 394.816V80.8703C86.8981 18.7351 97.114 5 108.365 5C119.615 5 129.831 18.7351 129.831 80.8703V394.816C129.831 456.951 119.615 470.686 108.365 470.686C97.114 470.686 86.8981 456.951 86.8981 394.816ZM111.597 379.773V95.9135C111.597 82.8324 111.209 65.173 108.365 65.173C105.52 65.173 105.132 82.8324 105.132 95.9135V379.773C105.132 392.854 105.52 410.513 108.365 410.513C111.209 410.513 111.597 392.854 111.597 379.773Z" fill="white"/>
                <path d="M137.292 470.686V5H158.758C170.009 5 180.225 27.8919 180.225 99.1838V140.389C180.225 175.054 177.121 212.989 166.129 216.259V217.568C177.638 220.838 180.225 243.076 180.225 296.054V388.276C180.225 433.405 181.906 452.373 182.94 470.686H164.448C163.155 457.605 161.991 442.562 161.991 410.513V304.557C161.991 275.124 161.733 252.886 155.525 252.886V470.686H137.292ZM155.525 71.7135V199.254H157.724C160.698 199.254 161.991 192.059 161.991 169.822V101.146C161.991 78.9081 160.698 71.7135 157.724 71.7135H155.525Z" fill="white"/>
                <path d="M205.787 5V211.027H206.045L215.227 5H233.202L222.081 197.946L233.331 470.686H215.227L206.045 226.724H205.787V470.686H187.553V5H205.787Z" fill="white"/>
                <path d="M281 171.13H262.766V95.2595C262.766 82.1784 261.732 65.173 258.887 65.173C256.042 65.173 255.654 82.8324 255.654 95.9135C255.654 226.07 281 182.903 281 354.265V394.816C281 456.951 270.784 470.686 259.534 470.686C248.283 470.686 237.421 455.643 237.421 393.508V287.551H255.654V379.119C255.654 398.086 256.689 410.513 259.534 410.513C262.379 410.513 262.766 392.854 262.766 379.773C262.766 229.995 237.421 246.346 237.421 139.081V80.8703C237.421 18.7351 247.637 5.00002 258.887 5.00002C270.137 5.00002 281 17.427 281 79.5621V171.13Z" fill="white"/>
                <path d="M6 2.5H3.44952L3.5005 5.04997L12.8112 470.736L12.8602 473.186H15.3107H35.7426H38.1895L38.242 470.74L42.7156 262.495L46.6919 470.734L46.7387 473.186H49.1915H70.1406H72.5728L72.6397 470.755L85.4419 5.0687L85.5125 2.5H82.9429H64.7093H62.2472L62.2096 4.9619L59.7999 163.066L57.1224 4.95767L57.0807 2.5H54.6227H34.8374H32.3908L32.338 4.94603L28.7648 170.432L26.7333 4.96931L26.703 2.5H24.2335H6ZM134.792 470.686V473.186H137.292H155.525H158.025V470.686V263.067C158.243 264.506 158.433 266.122 158.596 267.911C159.424 277.013 159.491 289.805 159.491 304.557V410.513C159.491 442.64 160.659 457.766 161.96 470.932L162.183 473.186H164.448H182.94H185.053H185.586H187.553H205.787H208.287V470.686V352.756L212.729 470.78L212.819 473.186H215.227H233.331H235.936L235.829 470.583L224.584 197.966L235.698 5.14386L235.85 2.5H233.202H215.227H212.836L212.729 4.8887L208.287 104.577V5V2.5H205.787H187.553H185.053V5V464.096C185.008 463.353 184.962 462.605 184.915 461.85C183.92 445.701 182.725 426.311 182.725 388.276V296.054C182.725 269.585 182.083 250.584 179.959 237.762C178.898 231.354 177.437 226.289 175.376 222.553C173.988 220.038 172.295 218.073 170.245 216.728C172.392 214.851 174.016 211.989 175.288 208.834C177.231 204.013 178.684 197.66 179.771 190.471C181.948 176.063 182.725 157.769 182.725 140.389V99.1838C182.725 63.4688 180.171 39.6604 176.124 24.7044C174.103 17.2365 171.661 11.7869 168.831 8.15434C165.961 4.47015 162.548 2.5 158.758 2.5H137.292H134.792V5V470.686ZM281 173.63H283.5V171.13V79.5621C283.5 48.4335 280.791 29.4124 276.5 18.0943C274.345 12.4081 271.724 8.48452 268.675 5.98071C265.575 3.43395 262.206 2.50002 258.887 2.50002C255.506 2.50002 252.155 3.55492 249.125 6.24879C246.159 8.88697 243.639 12.9718 241.578 18.8011C237.469 30.4216 234.921 49.745 234.921 80.8703V139.081C234.921 188.528 240.293 211.932 246.078 237.129C246.602 239.41 247.128 241.705 247.655 244.035C250.322 255.837 252.992 268.592 255.184 285.051H237.421H234.921V287.551V393.508C234.921 424.649 237.633 444.295 241.904 456.24C244.045 462.227 246.639 466.457 249.644 469.209C252.707 472.014 256.099 473.186 259.534 473.186C262.915 473.186 266.266 472.132 269.295 469.438C272.262 466.799 274.782 462.715 276.843 456.885C280.951 445.265 283.5 425.941 283.5 394.816V354.265C283.5 268.42 277.147 236.176 270.76 209.064C270.324 207.209 269.887 205.38 269.452 203.56C267.192 194.092 264.99 184.87 263.139 173.63H281ZM260.266 95.2595V150.898C258.953 136.599 258.154 119.002 258.154 95.9135C258.154 89.3788 258.252 81.774 258.697 75.8243C258.789 74.5888 258.895 73.4444 259.016 72.4095C259.157 73.371 259.288 74.4295 259.407 75.5703C260.009 81.3384 260.266 88.7657 260.266 95.2595ZM260.167 67.0919C260.167 67.0934 260.158 67.1081 260.139 67.1321C260.157 67.1025 260.166 67.0905 260.167 67.0919ZM257.714 67.1966C257.696 67.1753 257.688 67.1622 257.688 67.161C257.688 67.1597 257.697 67.1704 257.714 67.1966ZM258.154 314.187C259.467 331.881 260.266 353.199 260.266 379.773C260.266 386.308 260.169 393.912 259.724 399.862C259.61 401.385 259.475 402.77 259.319 403.982C259.21 403.281 259.107 402.504 259.011 401.65C258.413 396.317 258.154 388.584 258.154 379.119V314.187ZM258.254 408.595C258.254 408.593 258.263 408.578 258.281 408.554C258.263 408.584 258.254 408.596 258.254 408.595ZM84.3981 80.8703V394.816C84.3981 425.941 86.9466 445.265 91.0554 456.885C93.1165 462.715 95.636 466.799 98.6028 469.438C101.632 472.132 104.984 473.186 108.365 473.186C111.746 473.186 115.097 472.132 118.126 469.438C121.093 466.799 123.613 462.715 125.674 456.885C129.782 445.265 132.331 425.941 132.331 394.816V80.8703C132.331 49.745 129.782 30.4216 125.674 18.8011C123.613 12.9717 121.093 8.88696 118.126 6.24878C115.097 3.5549 111.746 2.5 108.365 2.5C104.984 2.5 101.632 3.5549 98.6028 6.24878C95.636 8.88696 93.1165 12.9717 91.0554 18.8011C86.9466 30.4216 84.3981 49.745 84.3981 80.8703ZM109.097 95.9135V379.773C109.097 386.308 109 393.912 108.555 399.862C108.497 400.637 108.433 401.377 108.365 402.076C108.296 401.377 108.232 400.637 108.174 399.862C107.729 393.912 107.632 386.308 107.632 379.773V95.9135C107.632 89.3788 107.729 81.774 108.174 75.8243C108.232 75.049 108.296 74.3096 108.365 73.6107C108.433 74.3096 108.497 75.049 108.555 75.8243C109 81.774 109.097 89.3788 109.097 95.9135ZM107.085 408.595C107.085 408.593 107.094 408.578 107.112 408.554C107.094 408.584 107.085 408.596 107.085 408.595ZM109.617 408.554C109.635 408.578 109.644 408.593 109.644 408.594C109.644 408.596 109.635 408.585 109.617 408.554ZM109.644 67.0919C109.644 67.0934 109.635 67.1081 109.617 67.132C109.635 67.1025 109.644 67.0905 109.644 67.0919ZM107.112 67.1321C107.094 67.1081 107.085 67.0934 107.085 67.0919C107.085 67.0905 107.094 67.1025 107.112 67.1321ZM158.501 192.502C158.35 193.495 158.189 194.295 158.025 194.933V76.0341C158.189 76.6727 158.35 77.4729 158.501 78.4658C159.165 82.8381 159.491 90.0266 159.491 101.146V169.822C159.491 180.941 159.165 188.129 158.501 192.502Z" stroke="#FD1EBC" strokeWidth="5"/>
            </g>
            <defs>
                <filter id="filter0_d_99_107" x="0.898926" y="0" width="292.101" height="482.687" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                    <feOffset dx="7" dy="7"/>
                    <feComposite in2="hardAlpha" operator="out"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 0.992157 0 0 0 0 0.117647 0 0 0 0 0.73858 0 0 0 1 0"/>
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_99_107"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_99_107" result="shape"/>
                </filter>
            </defs>
        </svg>
    )
}
