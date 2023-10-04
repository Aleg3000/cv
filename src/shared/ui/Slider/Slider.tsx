import { useState, useLayoutEffect, useEffect, useRef, type ReactElement, type FC, type MutableRefObject } from 'react'
import gsap from 'gsap'

let currentCard = 0

interface SliderProps {
    className: string
    children: JSX.Element[]
    main: MutableRefObject<HTMLDivElement>
}

const Slider: FC<SliderProps> = ({ className, children, main }): ReactElement => {
    const cont = useRef<HTMLDivElement>(null)

    const [startPos, setStartPos] = useState(0)

    const [lastTouch, setLastTouch] = useState(0)
    const [lastPos, setLastPos] = useState(0)

    const [touches, setTouches] = useState([])

    const [anchors, setAnchors] = useState([])

    const getVelocity2 = (touches: any): number => {
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

    const touchEnd = (): void => {
        const velocity = getVelocity2(touches)
        setTouches([])

        if (velocity === undefined) {
            getToPoint(cont.current, velocity, anchors[currentCard])
            return
        } else if (Math.abs(velocity) > 0.1) {
            currentCard += velocity < 0 ? 1 : -1
            if (currentCard < 0) currentCard = 0
            if (currentCard >= anchors.length) currentCard = anchors.length - 1
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
            currentCard = next
        }

        getToPoint(cont.current, velocity, anchors[currentCard])
    }

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

    function update () {
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
