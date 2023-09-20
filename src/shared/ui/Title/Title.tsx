import { typedMemo } from 'app/types/memo'
import { forwardRef } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Title.module.scss'

interface TitleProps {
    className?: string
    text: string
    onClick?: () => void
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
    const { className, text, onClick } = props

    return (
        <h1 ref={ref} onClick={onClick} className={classNames(cls.Title, [className])}>
            {text.split('').map((letter, index) => {
                return <span className='titleSpan' key={letter + String(index)}>{letter}</span>
            })}
        </h1>
    )
})

export default typedMemo(Title)
