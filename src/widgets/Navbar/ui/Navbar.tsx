import { useCallback, useState, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import Modal from 'shared/ui/Modal/Modal'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

const Navbar: FC<NavbarProps> = ({ className }) => {
    const [isAuthModal, setIsAuthModal] = useState(false)

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev)
    }, [])

    return (
        <div className={classNames(cls.Navbar, [className])}>
            <div className={cls.links}>
                {/* <AppLink to={RouterPaths.main} theme={AppLinkTheme.SECONDARY}>{t('Главная страница')}</AppLink> */}
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    className={cls.links}
                    onClick={onToggleModal}
                >
                    {'Войти'}
                </Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    {/* eslint-disable-next-line */}
                {'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid commodi consequatur eligendi impedit incidunt necessitatibus possimus quis saepe sunt totam.'}
                </Modal>
            </div>
        </div>
    )
}

export default Navbar
