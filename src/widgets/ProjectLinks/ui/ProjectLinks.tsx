import { typedMemo } from 'app/types/memo'
import { projectData } from 'entities/Works/data/data'
import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { useMatchMedia } from 'shared/lib/hooks/useMatchMedia/useMatchMedia'
import cls from './ProjectLinks.module.scss'

interface ProjectLinksProps {
    className?: string
    currentProject: number
}

export const ProjectLinks: FC<ProjectLinksProps> = ({ className, currentProject }) => {
    const { github, worldWide } = projectData[currentProject]
    const { isMobile } = useMatchMedia()

    return (
        <div className={classNames(cls.ProjectLinks, [className])}>
            <Github link={github} isMobile={isMobile} />
            <WorldWide link={worldWide} isMobile={isMobile} />
        </div>
    )
}

const Github = typedMemo(({ link, isMobile }: { link: string, isMobile: boolean }) => {
    return (
        <a target="_blank" href={link} rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                <path d="M12 0C5.373 0 0 5.373 0 12C0 17.623 3.872 22.328 9.092 23.63C9.036 23.468 9 23.28 9 23.047V20.996C8.513 20.996 7.697 20.996 7.492 20.996C6.671 20.996 5.941 20.643 5.587 19.987C5.194 19.258 5.126 18.143 4.152 17.461C3.863 17.234 4.083 16.975 4.416 17.01C5.031 17.184 5.541 17.606 6.021 18.232C6.499 18.859 6.724 19.001 7.617 19.001C8.05 19.001 8.698 18.976 9.308 18.88C9.636 18.047 10.203 17.28 10.896 16.918C6.9 16.507 4.993 14.519 4.993 11.82C4.993 10.658 5.488 9.534 6.329 8.587C6.053 7.647 5.706 5.73 6.435 5C8.233 5 9.32 6.166 9.581 6.481C10.477 6.174 11.461 6 12.495 6C13.531 6 14.519 6.174 15.417 6.483C15.675 6.17 16.763 5 18.565 5C19.297 5.731 18.946 7.656 18.667 8.594C19.503 9.539 19.995 10.66 19.995 11.82C19.995 14.517 18.091 16.504 14.101 16.917C15.199 17.49 16 19.1 16 20.313V23.047C16 23.151 15.977 23.226 15.965 23.315C20.641 21.676 24 17.236 24 12C24 5.373 18.627 0 12 0Z" fill={isMobile ? '#FFFFFF' : '#80FF00'}/>
            </svg>
        </a>

    )
})

const WorldWide = typedMemo(({ link, isMobile }: { link: string, isMobile: boolean }) => {
    return (
        <a target="_blank" href={link} rel="noreferrer">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 30C12.925 30 10.975 29.6062 9.15 28.8187C7.325 28.0312 5.7375 26.9625 4.3875 25.6125C3.0375 24.2625 1.96875 22.675 1.18125 20.85C0.39375 19.025 0 17.075 0 15C0 12.925 0.39375 10.975 1.18125 9.15C1.96875 7.325 3.0375 5.7375 4.3875 4.3875C5.7375 3.0375 7.325 1.96875 9.15 1.18125C10.975 0.39375 12.925 0 15 0C17.075 0 19.025 0.39375 20.85 1.18125C22.675 1.96875 24.2625 3.0375 25.6125 4.3875C26.9625 5.7375 28.0312 7.325 28.8187 9.15C29.6062 10.975 30 12.925 30 15C30 17.075 29.6062 19.025 28.8187 20.85C28.0312 22.675 26.9625 24.2625 25.6125 25.6125C24.2625 26.9625 22.675 28.0312 20.85 28.8187C19.025 29.6062 17.075 30 15 30ZM13.5 26.925V24C12.675 24 11.9688 23.7063 11.3813 23.1188C10.7937 22.5312 10.5 21.825 10.5 21V19.5L3.3 12.3C3.225 12.75 3.15625 13.2 3.09375 13.65C3.03125 14.1 3 14.55 3 15C3 18.025 3.99375 20.675 5.98125 22.95C7.96875 25.225 10.475 26.55 13.5 26.925ZM23.85 23.1C24.35 22.55 24.8 21.9563 25.2 21.3188C25.6 20.6813 25.9312 20.0187 26.1937 19.3312C26.4562 18.6437 26.6563 17.9375 26.7938 17.2125C26.9313 16.4875 27 15.75 27 15C27 12.55 26.3188 10.3125 24.9563 8.2875C23.5938 6.2625 21.775 4.8 19.5 3.9V4.5C19.5 5.325 19.2063 6.03125 18.6188 6.61875C18.0312 7.20625 17.325 7.5 16.5 7.5H13.5V10.5C13.5 10.925 13.3563 11.2812 13.0688 11.5688C12.7813 11.8562 12.425 12 12 12H9V15H18C18.425 15 18.7812 15.1438 19.0688 15.4313C19.3563 15.7188 19.5 16.075 19.5 16.5V21H21C21.65 21 22.2375 21.1938 22.7625 21.5812C23.2875 21.9688 23.65 22.475 23.85 23.1Z" fill={isMobile ? '#FFFFFF' : '#80FF00'}/>
            </svg>
        </a>

    )
})
