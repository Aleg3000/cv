import { createElement, type FC } from 'react'
import cls from './Paragraph.module.scss'

interface TextProps {
    className?: string
    text: string
}

const Paragraph: FC<TextProps> = ({ className, text }) => {
    return (
        <div className={cls.Text}>
            {text.split(' ').map((letter, index) => {
                return <span key={letter + String(index)}>
                    {
                        // eslint-disable-next-line react/no-children-prop
                        letter.split('').map(a => createElement('span', {
                            children: a,
                            className: 'paragraphSpan'
                        }))
                    }{' '}
                </span>
            })}
        </div>
    )
}

export default Paragraph
