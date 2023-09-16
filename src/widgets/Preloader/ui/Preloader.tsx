import { type Dispatch, type SetStateAction, useLayoutEffect, useRef, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { getZIndex } from 'shared/lib/zIndexes/zIndexes'
import cls from './Preloader.module.scss'
import gsap from 'gsap'
import og from 'shared/assets/pictures/og.png'
import { typedMemo } from 'app/types/memo'

interface PreloaderProps {
    className?: string
    onPreloaded: Dispatch<SetStateAction<boolean>>
}

export const Preloader: FC<PreloaderProps> = ({ className, onPreloaded }) => {
    const a = useRef(null)
    const q = gsap.utils.selector(a)
    useLayoutEffect(() => {
        gsap.timeline().from(q('path'), {
            opacity: 0,
            duration: 2,
            stagger: 0.1
        })
            .fromTo(q('img'),
                {
                    opacity: 0,
                    scale: 0.3
                },
                {
                    opacity: 1,
                    duration: 2,
                    scale: 1,
                    ease: 'back.out(3)'
                })
            .to(['path'], {
                opacity: 0,
                y: -100,
                scale: 0.5,
                stagger: 0.1,
                duration: 1.5
            })
            .to('img', {
                opacity: 0,
                y: -100,
                scale: 0.3
            })
            .to(a.current, {
                // delay: 0.7,
                opacity: 0,
                duration: 1,
                onComplete: () => { onPreloaded(true) }
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div ref={a} style={{ zIndex: getZIndex('preloader') }} className={classNames(cls.Preloader, [className])}>
            <MyNameIs />
            <img src={og}></img>
        </div>
    )
}

const MyNameIs = typedMemo(() => {
    return (
        <svg className={cls.myNameIs} viewBox="0 0 438 93" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.6898 68.91C11.9398 67.26 12.0898 65.65 12.1398 64.09C12.3598 55.12 12.4798 50.63 12.7598 41.66C16.5698 41.08 18.4698 40.8 22.2898 40.25C21.9598 49.22 21.7998 53.71 21.5198 62.68C21.4598 64.24 21.5398 65.82 21.7498 67.39C21.9598 68.97 22.7598 70.46 24.1498 71.87C18.0998 72.76 15.0798 73.22 9.02979 74.18C10.5498 72.33 11.4398 70.58 11.6998 68.92L11.6898 68.91ZM22.2798 40.24C18.4698 40.79 16.5598 41.07 12.7498 41.65C12.9698 34.88 13.0898 31.5 13.3498 24.73C13.3998 23.11 13.3498 21.52 13.1698 19.97C12.9898 18.42 12.1598 16.94 10.6498 15.56C16.9598 14.61 20.1098 14.15 26.4298 13.28C24.8598 15.11 23.9098 16.84 23.5798 18.46C23.2498 20.09 23.0598 21.71 22.9898 23.33C22.6898 30.1 22.5398 33.48 22.2698 40.25L22.2798 40.24ZM19.1498 46.11C19.2298 43.4 19.2798 42.04 19.3698 39.33C28.7298 37.95 38.1098 36.67 47.4998 35.5C47.3198 38.21 47.2298 39.57 47.0598 42.28C37.7498 43.45 28.4398 44.72 19.1498 46.11ZM43.3098 64.37C43.5998 62.72 43.7898 61.12 43.8698 59.56C44.2998 50.6 44.5298 46.11 45.0198 37.15C48.8398 36.66 50.7498 36.43 54.5698 35.97C54.0198 44.93 53.7598 49.41 53.2698 58.37C53.1798 59.93 53.2198 61.5 53.3798 63.09C53.5498 64.67 54.3198 66.18 55.6798 67.62C49.6098 68.36 46.5798 68.75 40.5298 69.56C42.0898 67.74 43.0298 66.02 43.3198 64.37H43.3098ZM54.5698 35.96C50.7498 36.42 48.8398 36.66 45.0198 37.14C45.3998 30.38 45.5998 27 46.0198 20.24C46.1098 18.62 46.0898 17.03 45.9498 15.47C45.8098 13.91 45.0098 12.42 43.5398 11C49.8598 10.2 53.0298 9.81997 59.3598 9.08997C57.7398 10.88 56.7598 12.58 56.3898 14.2C56.0198 15.82 55.7898 17.44 55.6898 19.05C55.2298 25.81 54.9998 29.19 54.5698 35.94V35.96Z" fill="white"/>
            <path d="M74.6899 49.68C74.5099 52.18 74.4299 53.44 74.2499 55.94C74.1299 57.5 74.1499 59.07 74.2899 60.66C74.4299 62.25 75.1799 63.77 76.5099 65.23C70.6699 65.85 67.7499 66.18 61.9199 66.87C63.4599 65.09 64.3999 63.37 64.7499 61.73C65.0999 60.09 65.3199 58.49 65.4299 56.92C65.5999 54.28 65.6899 52.96 65.8699 50.32C69.3999 50.05 71.1599 49.93 74.6799 49.68H74.6899ZM65.8799 50.32C66.0499 47.61 66.1399 46.26 66.3199 43.55C66.3999 42.77 66.4599 41.97 66.4799 41.17C66.4999 40.37 66.4199 39.59 66.2199 38.84C66.0199 38.09 65.7099 37.34 65.2799 36.58C64.8499 35.83 64.1899 35.09 63.2999 34.36C68.3899 33.78 70.9299 33.5 76.0299 32.97C75.4799 39.65 75.2199 43 74.6999 49.68C71.1699 49.92 69.4099 50.05 65.8899 50.32H65.8799ZM75.9999 22.78C74.8599 24.06 73.4799 24.78 71.8799 24.95C70.2199 25.13 68.9099 24.69 67.9499 23.63C66.9899 22.57 66.5499 21.25 66.6899 19.71C66.8399 18.05 67.5099 16.55 68.6499 15.27C69.7899 13.99 71.1799 13.26 72.7999 13.09C74.4799 12.91 75.7799 13.36 76.6999 14.42C77.6299 15.48 78.0399 16.86 77.9099 18.52C77.7899 20.07 77.1399 21.5 75.9999 22.78Z" fill="white"/>
            <path d="M109.07 46.4499C108.8 48.9499 108.66 50.1999 108.39 52.7099C108.29 54.2599 108.28 55.8299 108.35 57.4299C108.42 59.0199 109.11 60.5599 110.41 62.0599C104.56 62.5299 101.64 62.7899 95.79 63.3199C97.42 61.5699 98.44 59.8799 98.83 58.2499C99.22 56.6199 99.46 55.0199 99.55 53.4699C99.79 50.8299 99.91 49.5199 100.16 46.8799C103.72 46.6999 105.5 46.6199 109.07 46.4599V46.4499ZM100.16 46.8699C100.4 44.1699 100.52 42.8199 100.77 40.1199C100.87 39.3399 100.95 38.5499 100.99 37.7399C101.03 36.9399 100.99 36.1599 100.83 35.3999C100.68 34.6399 100.38 33.8799 99.94 33.1199C99.5 32.3599 98.85 31.5999 97.98 30.8499C103.08 30.3999 105.63 30.1899 110.73 29.7799C110.05 36.4499 109.72 39.7799 109.07 46.4399C105.51 46.5999 103.73 46.6799 100.16 46.8599V46.8699ZM124.16 28.5899C125.15 28.8799 125.99 29.5099 126.65 30.4899C127.32 31.4599 127.78 32.8399 128.04 34.6099C128.3 36.3799 128.27 38.6799 127.94 41.5099C127.49 45.4399 127.26 47.3999 126.82 51.3299C123.32 51.5699 121.56 51.6899 118.06 51.9599C118.45 48.1599 118.65 46.2599 119.06 42.4699C119.19 41.1899 119.23 40.0899 119.16 39.1599C119.09 38.2299 118.91 37.4999 118.61 36.9699C118.31 36.4399 117.93 36.0599 117.45 35.8199C116.98 35.5799 116.42 35.4799 115.8 35.5299C114.89 35.5999 113.97 35.9299 113.05 36.5199C112.12 37.1199 111.27 37.8299 110.48 38.6599C109.76 39.4499 109.39 39.8399 108.67 40.6199C108.84 38.4899 108.92 37.4199 109.1 35.2899C110.59 33.8999 111.91 32.7799 113.04 31.9199C114.18 31.0599 115.2 30.3599 116.11 29.8299C117.02 29.2899 117.86 28.9199 118.65 28.6899C119.44 28.4699 120.2 28.3299 120.95 28.2799C122.09 28.1999 123.16 28.2999 124.16 28.5899ZM126.83 51.3299C126.71 52.8799 126.68 54.4499 126.73 56.0399C126.78 57.6299 127.45 59.1799 128.73 60.6899C122.91 61.0799 120 61.2899 114.18 61.7499C115.84 60.0199 116.88 58.3499 117.29 56.7199C117.7 55.0899 117.96 53.4999 118.07 51.9499C121.57 51.6899 123.32 51.5599 126.83 51.3199V51.3299ZM143.18 27.4199C144.17 27.7199 144.99 28.3699 145.65 29.3499C146.3 30.3299 146.75 31.7099 146.98 33.4899C147.22 35.2699 147.15 37.5699 146.79 40.3899C146.28 44.3099 146.03 46.2699 145.53 50.1899C141.99 50.3799 140.22 50.4799 136.68 50.6999C137.16 46.9099 137.4 45.0099 137.89 41.2199C138.04 39.9499 138.09 38.8399 138.04 37.9099C137.98 36.9799 137.81 36.2499 137.52 35.7099C137.23 35.1799 136.85 34.7899 136.38 34.5399C135.91 34.2899 135.33 34.1899 134.65 34.2299C133.74 34.2899 132.83 34.5999 131.93 35.1799C131.03 35.7599 130.17 36.4599 129.37 37.2899C128.6 38.0699 128.22 38.4599 127.45 39.2299C127.52 37.2099 127.55 36.1999 127.63 34.1799C129.25 32.7499 130.65 31.5899 131.82 30.6899C132.99 29.7899 134.07 29.0799 135.04 28.5499C136.01 28.0199 136.88 27.6599 137.64 27.4499C138.4 27.2399 139.18 27.1099 139.98 27.0699C141.12 26.9999 142.19 27.1199 143.18 27.4299V27.4199ZM145.53 50.1899C145.39 51.7399 145.33 53.3099 145.36 54.8999C145.39 56.4899 146.04 58.0499 147.29 59.5799C141.43 59.8899 138.5 60.0599 132.65 60.4399C134.33 58.7399 135.39 57.0699 135.83 55.4499C136.26 53.8299 136.55 52.2399 136.68 50.6899C140.22 50.4699 141.99 50.3699 145.53 50.1799V50.1899Z" fill="white"/>
            <path d="M166.44 69.6899C167.61 69.1199 168.63 68.3299 169.51 67.3099C170.39 66.2899 171.14 65.0699 171.76 63.6399C172.38 62.2199 172.83 60.6199 173.1 58.8499C174.1 51.7899 174.61 48.2599 175.64 41.2099C179.14 41.1699 180.89 41.1499 184.38 41.1299C183.42 47.5199 182.95 50.7099 182.01 57.0999C181.53 60.1899 180.73 62.9499 179.61 65.3699C178.49 67.7899 177.12 69.8499 175.52 71.5499C173.92 73.2499 172.07 74.5499 169.98 75.4499C167.89 76.3499 165.61 76.8499 163.13 76.9599C161.75 77.0199 160.54 76.9599 159.48 76.7899C158.42 76.6199 157.5 76.4399 156.72 76.2599C155.94 76.0799 155.26 75.8899 154.7 75.6999C154.14 75.5099 153.69 75.4199 153.36 75.4299C152.92 75.4499 152.59 75.5799 152.38 75.8099C152.17 76.0399 152.04 76.2099 151.99 76.3199C152.61 71.4999 152.92 69.0999 153.56 64.2799C154.38 66.3299 155.6 67.9199 157.21 69.0599C158.82 70.1899 160.64 70.7199 162.69 70.6299C164.02 70.5699 165.27 70.2599 166.44 69.6899ZM159.32 59.2699C158.27 58.9599 157.39 58.2999 156.67 57.2899C155.95 56.2799 155.47 54.8899 155.21 53.1099C154.96 51.3399 155.04 49.0399 155.48 46.2099C155.63 45.0499 155.7 44.4699 155.85 43.3099C159.41 43.2099 161.19 43.1699 164.75 43.0899C164.62 44.0499 164.55 44.5299 164.42 45.4899C164.24 46.7599 164.18 47.8799 164.22 48.8399C164.26 49.7999 164.4 50.5599 164.65 51.1299C164.9 51.6999 165.25 52.1199 165.71 52.4099C166.17 52.6899 166.71 52.8199 167.33 52.7999C168.28 52.7599 169.24 52.4399 170.2 51.8299C171.16 51.2199 172.1 50.4799 173.03 49.6299C173.81 48.8799 174.21 48.4999 174.99 47.7499C174.69 49.8699 174.54 50.9299 174.24 53.0499C172.82 54.3099 171.57 55.3399 170.48 56.1499C169.39 56.9599 168.41 57.6299 167.53 58.1599C166.66 58.6899 165.83 59.0599 165.06 59.2899C164.29 59.5099 163.51 59.6399 162.73 59.6699C161.5 59.7199 160.37 59.5899 159.32 59.2799V59.2699ZM155.86 43.2999C156.24 40.5399 156.43 39.1699 156.82 36.4099C156.96 35.6299 157.06 34.8499 157.14 34.0399C157.22 33.2399 157.18 32.4599 157.03 31.6899C156.88 30.9299 156.62 30.1599 156.24 29.3699C155.86 28.5899 155.25 27.8099 154.42 27.0199C159.53 26.7799 162.08 26.6699 167.19 26.4799C166.2 33.1099 165.71 36.4299 164.76 43.0599C161.2 43.1399 159.42 43.1799 155.86 43.2799V43.2999ZM175.64 41.2099C175.94 38.9899 176.1 37.8799 176.4 35.6599C176.55 34.8899 176.66 34.0999 176.75 33.2999C176.84 32.4999 176.82 31.7199 176.68 30.9499C176.54 30.1899 176.29 29.4099 175.92 28.6199C175.55 27.8399 174.96 27.0399 174.13 26.2399C179.21 26.0799 181.75 26.0099 186.82 25.8899C185.83 31.9799 185.34 35.0199 184.37 41.1099C180.87 41.1299 179.13 41.1499 175.63 41.1899L175.64 41.2099Z" fill="white"/>
            <path d="M218.06 42.02C217.59 44.49 217.35 45.73 216.88 48.2C216.66 49.74 216.52 51.3 216.47 52.9C216.42 54.49 216.98 56.08 218.15 57.68C212.29 57.68 209.35 57.7 203.49 57.76C205.26 56.15 206.41 54.55 206.93 52.95C207.45 51.35 207.82 49.78 208.03 48.24C208.48 45.63 208.71 44.33 209.17 41.72C212.73 41.83 214.51 41.89 218.07 42.02H218.06ZM209.16 41.72C209.62 39.05 209.85 37.71 210.31 35.04C210.48 34.27 210.61 33.49 210.72 32.69C210.83 31.89 210.84 31.11 210.75 30.34C210.66 29.57 210.43 28.79 210.05 28C209.67 27.21 209.08 26.4 208.28 25.58C213.39 25.54 215.95 25.53 221.06 25.54C219.85 32.13 219.25 35.42 218.06 42.02C214.5 41.89 212.72 41.83 209.16 41.72ZM234.96 25.35C235.99 25.72 236.81 26.43 237.42 27.48C238.03 28.53 238.4 29.95 238.51 31.74C238.63 33.53 238.41 35.82 237.86 38.61C237.09 42.49 236.71 44.43 235.95 48.31C232.44 48.26 230.69 48.25 227.18 48.23C227.91 44.48 228.28 42.6 229.02 38.85C229.26 37.59 229.38 36.48 229.39 35.52C229.39 34.56 229.29 33.79 229.07 33.21C228.85 32.63 228.49 32.19 228.01 31.88C227.53 31.58 226.97 31.42 226.35 31.42C225.38 31.42 224.4 31.7 223.4 32.27C222.4 32.84 221.45 33.54 220.54 34.36C219.69 35.08 219.26 35.45 218.41 36.17C218.78 34.06 218.97 33.01 219.35 30.9C220.89 29.69 222.23 28.71 223.38 27.94C224.52 27.18 225.57 26.55 226.52 26.06C227.47 25.57 228.37 25.24 229.23 25.05C230.09 24.86 230.92 24.78 231.72 24.78C232.86 24.79 233.95 24.98 234.98 25.35H234.96ZM235.95 48.31C235.71 49.84 235.54 51.41 235.47 53C235.39 54.59 235.93 56.19 237.09 57.8C231.26 57.72 228.34 57.69 222.51 57.68C224.3 56.09 225.47 54.51 226.01 52.92C226.55 51.33 226.94 49.77 227.18 48.23C230.69 48.25 232.44 48.27 235.95 48.31Z" fill="white"/>
            <path d="M269.07 36.37C268.16 34.91 267.13 33.82 265.99 33.13C264.85 32.43 263.68 32.06 262.48 32.02C261.57 31.99 260.69 32.17 259.86 32.56C259.02 32.95 258.25 33.56 257.54 34.39C256.83 35.22 256.19 36.25 255.62 37.47C255.05 38.69 254.6 40.09 254.28 41.68C254.2 42.01 254.16 42.17 254.09 42.5C253.76 44.14 253.63 45.58 253.68 46.82C253.73 48.06 253.93 49.09 254.27 49.93C254.61 50.76 255.12 51.4 255.78 51.83C256.44 52.26 257.22 52.49 258.12 52.52C259.3 52.55 260.58 52.26 261.98 51.65C263.38 51.04 264.86 50.04 266.43 48.67C265.99 50.53 265.77 51.47 265.34 53.33C263.7 55.25 262.03 56.69 260.32 57.66C258.61 58.62 256.7 59.08 254.58 59.02C252.74 58.97 251.03 58.57 249.46 57.82C247.88 57.07 246.62 55.96 245.67 54.48C244.72 53.01 244.12 51.15 243.88 48.92C243.64 46.69 243.88 44.04 244.62 40.98C244.69 40.75 244.73 40.64 244.8 40.41C245.47 37.73 246.36 35.44 247.45 33.54C248.54 31.64 249.79 30.07 251.19 28.84C252.59 27.61 254.11 26.72 255.76 26.15C257.41 25.59 259.14 25.34 260.98 25.39C263.15 25.46 265 26.01 266.51 27.06C268.02 28.1 269.22 29.63 270.11 31.64C269.7 33.54 269.49 34.49 269.08 36.38L269.07 36.37ZM265.99 41.45C269.52 41.57 271.28 41.64 274.81 41.79C274.11 44.8 273.76 46.3 273.06 49.3C272.92 50.06 272.77 50.84 272.63 51.63C272.49 52.42 272.45 53.21 272.54 53.98C272.62 54.75 272.83 55.55 273.16 56.35C273.49 57.16 274.06 57.99 274.86 58.85C270.34 58.66 268.08 58.57 263.56 58.42C263.45 56.57 263.4 55.64 263.29 53.79C264.36 48.85 264.9 46.38 265.99 41.43V41.45ZM265.99 41.45C267.32 35.46 267.99 32.47 269.35 26.48C274.43 26.67 276.96 26.77 282.04 27.01C280.86 27.78 279.92 28.55 279.23 29.32C278.54 30.09 277.98 30.85 277.55 31.6C277.12 32.35 276.8 33.12 276.6 33.91C276.4 34.7 276.19 35.47 275.99 36.23C275.52 38.45 275.29 39.56 274.82 41.79C271.29 41.64 269.53 41.58 266 41.45H265.99Z" fill="white"/>
            <path d="M294.57 44.1499C293.96 46.5899 293.65 47.8099 293.04 50.2499C292.73 51.7699 292.5 53.3299 292.36 54.9199C292.22 56.5099 292.69 58.1299 293.77 59.7799C287.91 59.4499 284.98 59.2999 279.12 59.0399C280.98 57.5299 282.21 55.9999 282.82 54.4299C283.43 52.8599 283.88 51.3199 284.18 49.7899C284.78 47.2099 285.08 45.9199 285.68 43.3499C289.23 43.6599 291.01 43.8199 294.55 44.1499H294.57ZM285.7 43.3499C286.31 40.7099 286.61 39.3899 287.22 36.7399C287.43 35.9799 287.61 35.2099 287.76 34.4199C287.91 33.6299 287.97 32.8499 287.92 32.0799C287.87 31.3099 287.69 30.5099 287.35 29.6999C287.02 28.8899 286.47 28.0499 285.72 27.1899C290.83 27.4399 293.38 27.5799 298.49 27.8799C296.91 34.3899 296.12 37.6499 294.57 44.1599C291.02 43.8299 289.25 43.6699 285.7 43.3599V43.3499ZM311.96 28.5199C312.9 28.9399 313.64 29.6799 314.17 30.7399C314.7 31.7999 314.97 33.2199 314.98 35.0099C315 36.7999 314.65 39.0799 313.94 41.8299C312.95 45.6599 312.46 47.5699 311.49 51.4099C307.99 51.1699 306.23 51.0499 302.73 50.8299C303.64 47.1199 304.09 45.2699 305.01 41.5599C305.32 40.3099 305.5 39.2299 305.56 38.2899C305.62 37.3599 305.54 36.6099 305.32 36.0499C305.1 35.4899 304.77 35.0499 304.33 34.7499C303.89 34.4499 303.36 34.2799 302.74 34.2399C301.83 34.1799 300.87 34.3899 299.88 34.8499C298.88 35.3099 297.94 35.8999 297.04 36.6199C296.21 37.2999 295.8 37.6399 294.98 38.3199C295.44 36.2299 295.67 35.1899 296.13 33.0999C297.79 31.9299 299.25 30.9999 300.49 30.2999C301.73 29.5999 302.84 29.0499 303.81 28.6499C304.78 28.2399 305.67 27.9799 306.48 27.8699C307.29 27.7599 308.07 27.7199 308.81 27.7699C309.95 27.8499 311 28.0899 311.94 28.5199H311.96ZM311.5 51.4099C311.17 52.9299 310.92 54.4799 310.76 56.0699C310.59 57.6499 311.05 59.2799 312.1 60.9499C306.28 60.5399 303.37 60.3499 297.55 60.0099C299.43 58.5299 300.69 57.0099 301.32 55.4499C301.95 53.8899 302.43 52.3499 302.75 50.8299C306.25 51.0499 308.01 51.1599 311.51 51.4099H311.5ZM330.97 29.9499C331.91 30.3899 332.64 31.1399 333.15 32.1999C333.66 33.2599 333.91 34.6899 333.91 36.4799C333.91 38.2699 333.52 40.5399 332.78 43.2899C331.74 47.1099 331.22 49.0099 330.2 52.8299C326.67 52.5399 324.9 52.3999 321.36 52.1299C322.35 48.4399 322.85 46.5899 323.86 42.8999C324.18 41.6599 324.38 40.5699 324.46 39.6399C324.53 38.7099 324.46 37.9599 324.25 37.3899C324.04 36.8199 323.71 36.3799 323.28 36.0799C322.85 35.7799 322.29 35.5899 321.61 35.5399C320.7 35.4699 319.76 35.6599 318.78 36.1099C317.8 36.5599 316.86 37.1399 315.96 37.8499C315.09 38.5099 314.66 38.8499 313.79 39.5099C314.13 37.5199 314.31 36.5199 314.65 34.5299C316.45 33.3399 317.99 32.3699 319.28 31.6399C320.57 30.9099 321.73 30.3499 322.76 29.9599C323.79 29.5699 324.7 29.3199 325.49 29.2199C326.27 29.1199 327.06 29.0999 327.86 29.1599C329 29.2499 330.04 29.5099 330.98 29.9499H330.97ZM330.19 52.8299C329.84 54.3399 329.57 55.8899 329.38 57.4799C329.19 59.0599 329.62 60.6999 330.66 62.3799C324.81 61.8899 321.88 61.6599 316.03 61.2299C317.93 59.7699 319.21 58.2699 319.86 56.7199C320.51 55.1699 321.01 53.6399 321.35 52.1199C324.89 52.3899 326.65 52.5299 330.19 52.8199V52.8299Z" fill="white"/>
            <path d="M345.91 49.7601C346.43 47.8901 346.69 46.9501 347.21 45.0801C349.45 45.2901 350.56 45.4001 352.8 45.6201C353.87 45.7301 354.84 45.7401 355.7 45.6601C356.56 45.5801 357.32 45.4001 357.98 45.1101C358.64 44.8201 359.19 44.4201 359.65 43.9201C360.1 43.4201 360.42 42.8101 360.61 42.1101C360.97 40.7701 360.88 39.6501 360.32 38.7701C359.75 37.8801 358.79 37.3701 357.42 37.2301C356.34 37.1201 355.38 37.3001 354.53 37.7701C353.68 38.2401 352.91 38.9201 352.22 39.8201C351.53 40.7201 350.9 41.7901 350.32 43.0301C349.74 44.2701 349.24 45.6401 348.81 47.1501C348.29 48.9801 348.01 50.6001 347.96 52.0301C347.91 53.4601 348.11 54.6901 348.58 55.7301C349.04 56.7701 349.81 57.6001 350.88 58.2301C351.95 58.8601 353.37 59.2601 355.16 59.4501C356.56 59.5901 358.02 59.6101 359.56 59.4901C361.1 59.3801 362.65 59.1601 364.21 58.8301C362.63 61.2101 361.84 62.4001 360.27 64.7901C358.94 65.1501 357.47 65.3201 355.87 65.3201C354.27 65.3201 352.58 65.2301 350.8 65.0601C345.74 64.5601 342.16 62.7101 340.03 59.4801C337.9 56.2501 337.64 51.7401 339.3 45.9301C339.98 43.4501 340.95 41.2801 342.24 39.4101C343.53 37.5401 345 36.0101 346.66 34.8101C348.32 33.6101 350.17 32.7701 352.2 32.2801C354.23 31.7901 356.42 31.6601 358.76 31.9001C360.87 32.1201 362.62 32.5801 364.02 33.2801C365.41 33.9801 366.5 34.8701 367.27 35.9501C368.04 37.0301 368.49 38.2101 368.6 39.4901C368.71 40.7701 368.6 42.1801 368.19 43.5901C367.87 44.6901 367.29 45.7401 366.56 46.6901C365.83 47.6301 364.82 48.4201 363.52 49.0501C362.23 49.6801 360.59 50.1201 358.6 50.3501C356.61 50.5901 354.25 50.5601 351.49 50.2901C349.26 50.0701 348.15 49.9601 345.92 49.7501L345.91 49.7601Z" fill="white"/>
            <path d="M398.37 54.01C397.6 56.4 397.22 57.6 396.46 59.99C395.98 61.48 395.62 63.01 395.38 64.58C395.14 66.16 395.5 67.81 396.46 69.54C390.63 68.76 387.72 68.38 381.89 67.67C383.81 66.3 385.13 64.86 385.86 63.35C386.59 61.84 387.19 60.33 387.66 58.84C388.46 56.32 388.86 55.05 389.66 52.53C393.15 53.11 394.89 53.4 398.38 54L398.37 54.01ZM389.65 52.54C390.46 49.95 390.86 48.66 391.68 46.07C391.95 45.33 392.19 44.57 392.4 43.79C392.61 43.02 392.71 42.24 392.7 41.46C392.68 40.68 392.56 39.88 392.32 39.04C392.08 38.21 391.62 37.33 390.92 36.41C396 37.05 398.54 37.39 403.62 38.08C401.5 44.44 400.45 47.63 398.37 54C394.88 53.4 393.14 53.11 389.65 52.53V52.54ZM406.02 28.19C404.6 29.16 403.1 29.54 401.5 29.32C399.84 29.1 398.67 28.36 397.99 27.11C397.31 25.86 397.2 24.47 397.7 23C398.23 21.42 399.24 20.13 400.66 19.15C402.08 18.17 403.6 17.79 405.21 18.01C406.88 18.24 408.04 18.98 408.69 20.23C409.34 21.48 409.41 22.92 408.89 24.5C408.4 25.98 407.43 27.21 406.02 28.18V28.19Z" fill="white"/>
            <path d="M405.43 58.72C405.72 59.92 406.16 61.03 406.76 62.03C407.36 63.03 408.03 63.92 408.77 64.69C409.51 65.46 410.3 66.09 411.14 66.57C411.98 67.05 412.81 67.35 413.65 67.48C414.82 67.65 415.78 67.48 416.54 66.95C417.3 66.43 417.82 65.73 418.13 64.9C418.49 63.91 418.45 63.02 417.97 62.25C417.49 61.48 416.83 60.72 416 59.96C415.17 59.2 414.25 58.44 413.25 57.68C412.25 56.92 411.37 56.05 410.62 55.05C409.87 54.06 409.35 52.9 409.05 51.58C408.75 50.26 408.89 48.69 409.5 46.9C410.36 44.37 411.95 42.45 414.21 41.16C416.48 39.88 419.41 39.5 422.98 40.04C424.23 40.23 425.29 40.47 426.18 40.78C427.06 41.08 427.78 41.39 428.35 41.7C428.91 42.01 429.4 42.29 429.83 42.56C430.25 42.82 430.66 42.98 431.06 43.04C431.68 43.14 432.13 43.04 432.41 42.75C432.69 42.46 432.91 42.33 433.08 42.36C431.64 46.4 430.92 48.42 429.49 52.47C429.22 51.65 428.82 50.84 428.31 50.03C427.8 49.22 427.23 48.5 426.61 47.85C425.99 47.2 425.29 46.63 424.53 46.16C423.76 45.68 422.99 45.38 422.2 45.26C421.29 45.12 420.49 45.26 419.8 45.65C419.11 46.05 418.61 46.69 418.3 47.59C417.99 48.49 418.09 49.31 418.58 50.05C419.08 50.79 419.75 51.5 420.59 52.18C421.44 52.86 422.36 53.59 423.37 54.35C424.37 55.11 425.24 56.01 425.97 57.04C426.7 58.07 427.18 59.29 427.42 60.68C427.66 62.08 427.47 63.75 426.82 65.63C426.33 67.04 425.61 68.26 424.72 69.26C423.83 70.26 422.77 71.06 421.54 71.65C420.31 72.24 418.98 72.62 417.54 72.79C416.1 72.96 414.6 72.93 413.05 72.71C411.66 72.51 410.5 72.24 409.56 71.91C408.62 71.58 407.8 71.25 407.11 70.94C406.42 70.62 405.83 70.33 405.33 70.06C404.83 69.8 404.36 69.63 403.91 69.57C403.3 69.48 402.81 69.58 402.43 69.86C402.05 70.14 401.78 70.27 401.61 70.25C403.13 65.64 403.89 63.33 405.42 58.72H405.43Z" fill="white"/>
        </svg>
    )
})