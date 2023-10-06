/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useLayoutEffect, useEffect, useRef, type ReactElement, type FC, type MutableRefObject } from 'react'
import gsap from 'gsap'
import { useSelector } from 'react-redux'
import { getCurrentProject } from 'entities/Works/model/selectors/getCurrentProject/getCurrentProject'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'
import { worksActions } from 'entities/Works'

// let currentCard = 0

interface SliderProps {
    className: string
    children: JSX.Element[]
    main: MutableRefObject<HTMLDivElement>
}

const Slider: FC<SliderProps> = ({ className, children, main }): ReactElement => {
    const cont = useRef<HTMLDivElement>(null)

    const currentCard = useSelector(getCurrentProject)
    const dispatch = useAppDispatch()
    const [startPos, setStartPos] = useState(0)

    const [lastTouch, setLastTouch] = useState(0)
    const [lastPos, setLastPos] = useState(0)

    const [touches, setTouches] = useState([])

    const [anchors, setAnchors] = useState([])

    const getVelocity = (touches: any): number => {
        // if (touches.length < 2) return 'click'
        if (touches.length < 3) return
        const startTime = touches.at(-3).time
        const endTime = touches.at(-1).time

        const startPosX = touches.at(-3).positionX
        const finishPosX = touches.at(-1).positionX

        const velocity = (finishPosX - startPosX) / (endTime - startTime)

        return velocity
    }

    const touchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
        const startPos = e.touches[0].clientX
        setStartPos(startPos)
    }

    const touchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
        const currentPos = e.touches[0].clientX
        const diff = Number((startPos - currentPos).toFixed(2))
        let lastTouch = -lastPos - diff
        if (lastTouch > 0 || lastTouch < -anchors.at(-1)) {
            lastTouch = -lastPos - diff * 0.4
        }
        cont.current.style.transform = `translateX(${lastTouch}px)`

        setLastTouch(lastTouch)

        setTouches((state) => [...state, { time: e.timeStamp, positionX: e.touches[0].clientX }])
    }

    const [velocity, setVelocity] = useState(null)

    const touchEnd = (): void => {
        const velocity = getVelocity(touches)
        setTouches([])
        let nextCard = currentCard

        if (velocity === undefined) {
            getToPoint(cont.current, velocity, anchors[currentCard])
            return
        } else if (Math.abs(velocity) > 0.1) {
            nextCard += velocity < 0 ? 1 : -1
            if (nextCard < 0) nextCard = 0
            if (nextCard >= anchors.length) nextCard = anchors.length - 1
        } else {
            let min = 10000
            let next
            anchors.forEach((el, i) => {
                const diff = Math.abs(Math.abs(lastTouch) - el)
                if (diff < min) {
                    min = diff
                    next = i
                }
            })
            nextCard = next
        }
        dispatch(worksActions.setCurrentProject(nextCard))
        setVelocity(velocity)
    }

    useEffect(() => {
        getToPoint(cont.current, velocity, anchors[currentCard])
    }, [velocity])

    const getToPoint = (cont: HTMLElement, velocity: number, finalPosition: number): void => {
        gsap.fromTo(cont,
            { transform: `translateX(${lastTouch}px)` },
            {
                transform: `translateX(${-finalPosition}px)`,
                duration: 0.2,
                ease: Math.abs(velocity) > 3 ? 'back.out(3)' : 'power2.out'
            })
        setLastPos(finalPosition)
        setLastTouch(-finalPosition)
    }

    const getAnchors = (cont: HTMLDivElement): void => {
        const anchors = Array.from(cont.children).map((el: HTMLElement) => el.offsetLeft /* left padding */)
        setAnchors(anchors)
    }

    function update (): void {
        getAnchors(cont.current)
    }

    useEffect(() => {
        cont.current.style.transform = `translateX(${-anchors[currentCard]}px)`

        setLastPos(anchors[currentCard])
        setLastTouch(-anchors[currentCard])
    }, [anchors])

    const [isUpdated, setIsUpdated] = useState(false)

    useLayoutEffect(() => {
        gsap.registerPlugin()
        window.addEventListener('resize', () => { setIsUpdated((state) => !state) })

        getAnchors(cont.current)

        // setting container width depends on children quantity
        cont.current.style.width = `${children.length * 100}vw`

        // setColors(cardData.map(card => card.color))
    }, [children.length])

    useEffect(update, [isUpdated])

    return (
        <div
            onTouchStart={touchStart}
            onTouchMove={touchMove}
            onTouchEnd={touchEnd}
            ref={cont} className={className}>
            {children}
        </div>
    )
}

export default Slider
