import { type FC } from 'react'
import cls from './CloseButton.module.scss'

interface CloseButtonProps {
    onClick: () => void
}

const CloseButton: FC<CloseButtonProps> = ({ onClick }) => {
    return (
        <svg onClick={onClick} className={cls.CloseButton} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44" fill="none">
            <path d="M43.0719 21.5503C43.0719 18.2914 41.6805 14.8875 35.7914 15.6494C35.7827 15.6501 35.7732 15.6517 35.7645 15.6533C35.7716 15.6478 35.7787 15.6422 35.7858 15.6367C40.4886 12.0079 39.0672 8.61665 36.7641 6.31201C34.461 4.00737 31.072 2.58499 27.4456 7.29088C27.4401 7.29801 27.4345 7.30514 27.429 7.31227C27.4298 7.30356 27.4314 7.29406 27.433 7.28535C28.1943 1.3915 24.7927 0 21.5359 0C18.2792 0 14.8775 1.39229 15.6389 7.28535C15.6397 7.29406 15.6413 7.30356 15.6429 7.31227C15.6373 7.30514 15.6318 7.29801 15.6262 7.29088C11.9999 2.58499 8.6109 4.00737 6.30781 6.31201C4.00471 8.61665 2.58327 12.0079 7.28602 15.6367C7.29314 15.6422 7.30027 15.6478 7.30739 15.6533C7.29868 15.6525 7.2892 15.6509 7.28049 15.6494C1.39058 14.8875 0 18.2914 0 21.5503C0 24.8093 1.39137 28.2132 7.28049 27.4513C7.2892 27.4505 7.29868 27.4489 7.30739 27.4473C7.30027 27.4529 7.29314 27.4584 7.28602 27.464C2.58327 31.0928 4.00471 34.484 6.30781 36.7886C8.6109 39.0933 11.9999 40.5157 15.6262 35.8098C15.6318 35.8026 15.6373 35.7955 15.6429 35.7884C15.6421 35.7971 15.6405 35.8066 15.6389 35.8153C14.8775 41.7092 18.2792 43.1007 21.5359 43.1007C24.7927 43.1007 28.1943 41.7084 27.433 35.8153C27.4322 35.8066 27.4306 35.7971 27.429 35.7884C27.4345 35.7955 27.4401 35.8026 27.4456 35.8098C31.072 40.5157 34.461 39.0933 36.7641 36.7886C39.0672 34.484 40.4886 31.0928 35.7858 27.464C35.7787 27.4584 35.7716 27.4529 35.7645 27.4473C35.7732 27.4481 35.7827 27.4497 35.7914 27.4513C41.6813 28.2132 43.0719 24.8093 43.0719 21.5503Z" fill="white"/>
            <mask id="mask0_488_512" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="10" y="10" width="24" height="24">
                <rect x="10" y="10" width="24" height="24" fill="#D9D9D9"/>
            </mask>
            <g mask="url(#mask0_488_512)">
                <path d="M16.4002 29.8L14.2002 27.6L19.8002 22L14.2002 16.4L16.4002 14.2L22.0002 19.8L27.6002 14.2L29.8002 16.4L24.2002 22L29.8002 27.6L27.6002 29.8L22.0002 24.2L16.4002 29.8Z" fill="#FFB206"/>
            </g>
        </svg>
    )
}

export default CloseButton