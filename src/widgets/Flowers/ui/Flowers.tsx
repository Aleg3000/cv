import { useLayoutEffect, useRef, type FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { zIndexes } from 'shared/lib/zIndexes/zIndexes'
import cls from './Flowers.module.scss'
import gsap from 'gsap'
import { typedMemo } from 'app/types/memo'

interface FlowersProps {
    className?: string
}

export const Flowers: FC<FlowersProps> = typedMemo(({ className }) => {
    const tl = useRef<GSAPTimeline>()
    const wrapper = useRef()
    const a = gsap.utils.selector(wrapper)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline({ repeat: -1 })
            tl.current.to(a('svg'), { rotate: 360, duration: 5, ease: 'none' })
        }, wrapper)

        return () => { ctx.revert() }
    })
    return (
        <div ref={wrapper} style={{ zIndex: zIndexes.flowers }} className={classNames(cls.Flowers, [className])}>
            <FlowerOne />
            <FlowerTwo />
            <FlowerThree />
        </div>
    )
})

const FlowerOne = () => {
    return (
        <svg className={cls.flowerOne} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 132" fill="none">
            <path d="M109.533 70.9422C127.642 70.9422 131.156 68.5594 131.156 65.622C131.156 62.6845 127.642 60.3018 109.533 60.3018C98.8565 60.3018 85.4998 62.1492 76.3295 63.6685C76.3054 63.5335 76.2789 63.396 76.2499 63.2634C85.2925 61.1121 98.3238 57.6441 108.169 53.5129C124.868 46.5021 127.187 42.9449 126.052 40.2342C124.917 37.5234 120.754 36.689 104.055 43.6998C94.2098 47.8334 82.6077 54.7091 74.7388 59.6603C74.681 59.5735 74.6231 59.4867 74.5653 59.3998C82.1233 53.9832 92.8722 45.8389 100.423 38.2855C113.228 25.4722 114.03 21.3 111.953 19.2212C109.875 17.1423 105.708 17.9454 92.9012 30.7587C85.3504 38.3145 77.2116 49.073 71.8009 56.6336C71.6877 56.5541 71.572 56.4793 71.4563 56.4045C76.3295 48.4845 83.0946 36.8144 87.1362 26.9217C93.9905 10.1484 93.1157 5.99064 90.3971 4.87885C87.6785 3.76706 84.1454 6.12087 77.2911 22.8941C73.2518 32.7821 69.9066 45.851 67.8388 54.9213C67.7376 54.8996 67.6339 54.8827 67.5303 54.8634C69.0462 45.6846 70.8948 32.319 70.8948 21.6376C70.8948 3.51623 68.5136 0 65.5781 0C62.6427 0 60.2615 3.51623 60.2615 21.6376C60.2615 32.3214 62.1076 45.687 63.626 54.8634C63.491 54.8876 63.3536 54.9141 63.2211 54.943C61.0713 45.8944 57.6056 32.8544 53.4771 23.0027C46.4711 6.29209 42.9162 3.97205 40.2073 5.10795C37.4984 6.24385 36.6645 10.4089 43.6706 27.1194C47.8014 36.9712 54.6725 48.581 59.6204 56.4552C59.5337 56.513 59.4469 56.5709 59.3601 56.6288C53.9471 49.0658 45.8083 38.3096 38.2599 30.7538C25.4552 17.9405 21.2858 17.1375 19.2083 19.2163C17.1308 21.2952 17.9334 25.465 30.7381 38.2807C38.2889 45.8365 49.0402 53.9808 56.5958 59.395C56.5163 59.5084 56.4415 59.6241 56.3668 59.7399C48.4521 54.8634 36.7898 48.0938 26.9037 44.0494C10.1416 37.1906 5.98665 38.0661 4.87561 40.7864C3.76456 43.5068 6.11678 47.0423 22.8788 53.9012C32.7602 57.9432 45.8204 61.2906 54.8846 63.3598C54.863 63.4611 54.8461 63.5648 54.8268 63.6685C45.6541 62.1516 32.2974 60.3018 21.6232 60.3018C3.51391 60.3018 0 62.6845 0 65.622C0 68.5594 3.51391 70.9422 21.6232 70.9422C32.2998 70.9422 45.6565 69.0948 54.8268 67.5755C54.8509 67.7105 54.8774 67.8456 54.9063 67.9806C45.8637 70.1318 32.8324 73.5999 22.9873 77.7335C6.28788 84.7443 3.96941 88.3015 5.10455 91.0122C6.2397 93.7229 10.4019 94.5574 27.1013 87.5466C36.9465 83.413 48.5486 76.5373 56.4174 71.5861C56.4753 71.6729 56.5331 71.7597 56.591 71.8465C49.033 77.2632 38.284 85.4074 30.7333 92.9608C17.9285 105.774 17.126 109.946 19.2035 112.025C21.281 114.104 25.448 113.301 38.2551 100.488C45.8059 92.9319 53.9447 82.1734 59.3553 74.6127C59.4686 74.6923 59.5843 74.7671 59.7 74.8419C54.8268 82.7618 48.0617 94.432 44.02 104.325C37.1658 121.098 38.0406 125.256 40.7592 126.368C43.4777 127.479 47.0109 125.126 53.8652 108.352C57.9044 98.4643 61.2497 85.3954 63.3175 76.325C63.4187 76.3467 63.5223 76.3636 63.626 76.3829C62.11 85.5618 60.2615 98.9274 60.2615 109.609C60.2615 127.73 62.6427 131.246 65.5781 131.246C68.5136 131.246 70.8948 127.73 70.8948 109.609C70.8948 98.9249 69.0486 85.5594 67.5303 76.3829C67.6653 76.3588 67.8026 76.3323 67.9352 76.3033C70.085 85.352 73.5507 98.392 77.6791 108.244C84.6852 124.954 88.2401 127.274 90.949 126.138C93.6579 125.003 94.4918 120.838 87.4857 104.127C83.3548 94.2752 76.4837 82.6654 71.5358 74.7912C71.6226 74.7333 71.7094 74.6755 71.7961 74.6176C77.2091 82.1806 85.3456 92.9367 92.8963 100.493C105.701 113.306 109.87 114.109 111.948 112.03C114.025 109.951 113.223 105.781 100.418 92.9657C92.8674 85.4099 82.1161 77.2656 74.5605 71.8514C74.64 71.738 74.7147 71.6223 74.7894 71.5065C82.7041 76.3853 94.3665 83.1525 104.253 87.1969C121.015 94.0558 125.17 93.1803 126.281 90.4599C127.392 87.7395 125.039 84.204 108.277 77.3452C98.3961 73.3032 85.3359 69.9558 76.2716 67.8866C76.2933 67.7853 76.3102 67.6815 76.3295 67.5778C85.5022 69.0948 98.8589 70.9446 109.533 70.9446V70.9422Z" fill="white"/>
            <path d="M76.3775 67.3873C77.3447 61.425 73.2985 55.8071 67.3402 54.8392C61.3819 53.8714 55.7677 57.9202 54.8005 63.8825C53.8334 69.8448 57.8795 75.4628 63.8378 76.4306C69.7961 77.3984 75.4103 73.3496 76.3775 67.3873Z" fill="#FFB206"/>
        </svg>
    )
}

const FlowerTwo = () => {
    return (
        <svg className={cls.flowerTwo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 132" fill="none">
            <path d="M109.533 70.9422C127.642 70.9422 131.156 68.5594 131.156 65.622C131.156 62.6845 127.642 60.3018 109.533 60.3018C98.8565 60.3018 85.4998 62.1492 76.3295 63.6685C76.3054 63.5335 76.2789 63.396 76.2499 63.2634C85.2925 61.1121 98.3238 57.6441 108.169 53.5129C124.868 46.5021 127.187 42.9449 126.052 40.2342C124.917 37.5234 120.754 36.689 104.055 43.6998C94.2098 47.8334 82.6077 54.7091 74.7388 59.6603C74.681 59.5735 74.6231 59.4867 74.5653 59.3998C82.1233 53.9832 92.8722 45.8389 100.423 38.2855C113.228 25.4722 114.03 21.3 111.953 19.2212C109.875 17.1423 105.708 17.9454 92.9012 30.7587C85.3504 38.3145 77.2116 49.073 71.8009 56.6336C71.6877 56.5541 71.572 56.4793 71.4563 56.4045C76.3295 48.4845 83.0946 36.8144 87.1362 26.9217C93.9905 10.1484 93.1157 5.99064 90.3971 4.87885C87.6785 3.76706 84.1454 6.12087 77.2911 22.8941C73.2518 32.7821 69.9066 45.851 67.8388 54.9213C67.7376 54.8996 67.6339 54.8827 67.5303 54.8634C69.0462 45.6846 70.8948 32.319 70.8948 21.6376C70.8948 3.51623 68.5136 0 65.5781 0C62.6427 0 60.2615 3.51623 60.2615 21.6376C60.2615 32.3214 62.1076 45.687 63.626 54.8634C63.491 54.8876 63.3536 54.9141 63.2211 54.943C61.0713 45.8944 57.6056 32.8544 53.4771 23.0027C46.4711 6.29209 42.9162 3.97205 40.2073 5.10795C37.4984 6.24385 36.6645 10.4089 43.6706 27.1194C47.8014 36.9712 54.6725 48.581 59.6204 56.4552C59.5337 56.513 59.4469 56.5709 59.3601 56.6288C53.9471 49.0658 45.8083 38.3096 38.2599 30.7538C25.4552 17.9405 21.2858 17.1375 19.2083 19.2163C17.1308 21.2952 17.9334 25.465 30.7381 38.2807C38.2889 45.8365 49.0402 53.9808 56.5958 59.395C56.5163 59.5084 56.4415 59.6241 56.3668 59.7399C48.4521 54.8634 36.7898 48.0938 26.9037 44.0494C10.1416 37.1906 5.98665 38.0661 4.87561 40.7864C3.76456 43.5068 6.11678 47.0423 22.8788 53.9012C32.7602 57.9432 45.8204 61.2906 54.8846 63.3598C54.863 63.4611 54.8461 63.5648 54.8268 63.6685C45.6541 62.1516 32.2974 60.3018 21.6232 60.3018C3.51391 60.3018 0 62.6845 0 65.622C0 68.5594 3.51391 70.9422 21.6232 70.9422C32.2998 70.9422 45.6565 69.0948 54.8268 67.5755C54.8509 67.7105 54.8774 67.8456 54.9063 67.9806C45.8637 70.1318 32.8324 73.5999 22.9873 77.7335C6.28788 84.7443 3.96941 88.3015 5.10455 91.0122C6.2397 93.7229 10.4019 94.5574 27.1013 87.5466C36.9465 83.413 48.5486 76.5373 56.4174 71.5861C56.4753 71.6729 56.5331 71.7597 56.591 71.8465C49.033 77.2632 38.284 85.4074 30.7333 92.9608C17.9285 105.774 17.126 109.946 19.2035 112.025C21.281 114.104 25.448 113.301 38.2551 100.488C45.8059 92.9319 53.9447 82.1734 59.3553 74.6127C59.4686 74.6923 59.5843 74.7671 59.7 74.8419C54.8268 82.7618 48.0617 94.432 44.02 104.325C37.1658 121.098 38.0406 125.256 40.7592 126.368C43.4777 127.479 47.0109 125.126 53.8652 108.352C57.9044 98.4643 61.2497 85.3954 63.3175 76.325C63.4187 76.3467 63.5223 76.3636 63.626 76.3829C62.11 85.5618 60.2615 98.9274 60.2615 109.609C60.2615 127.73 62.6427 131.246 65.5781 131.246C68.5136 131.246 70.8948 127.73 70.8948 109.609C70.8948 98.9249 69.0486 85.5594 67.5303 76.3829C67.6653 76.3588 67.8026 76.3323 67.9352 76.3033C70.085 85.352 73.5507 98.392 77.6791 108.244C84.6852 124.954 88.2401 127.274 90.949 126.138C93.6579 125.003 94.4918 120.838 87.4857 104.127C83.3548 94.2752 76.4837 82.6654 71.5358 74.7912C71.6226 74.7333 71.7094 74.6755 71.7961 74.6176C77.2091 82.1806 85.3456 92.9367 92.8963 100.493C105.701 113.306 109.87 114.109 111.948 112.03C114.025 109.951 113.223 105.781 100.418 92.9657C92.8674 85.4099 82.1161 77.2656 74.5605 71.8514C74.64 71.738 74.7147 71.6223 74.7894 71.5065C82.7041 76.3853 94.3665 83.1525 104.253 87.1969C121.015 94.0558 125.17 93.1803 126.281 90.4599C127.392 87.7395 125.039 84.204 108.277 77.3452C98.3961 73.3032 85.3359 69.9558 76.2716 67.8866C76.2933 67.7853 76.3102 67.6815 76.3295 67.5778C85.5022 69.0948 98.8589 70.9446 109.533 70.9446V70.9422Z" fill="white"/>
            <path d="M76.3775 67.3873C77.3447 61.425 73.2985 55.8071 67.3402 54.8392C61.3819 53.8714 55.7677 57.9202 54.8005 63.8825C53.8334 69.8448 57.8795 75.4628 63.8378 76.4306C69.7961 77.3984 75.4103 73.3496 76.3775 67.3873Z" fill="#FFB206"/>
        </svg>
    )
}

const FlowerThree = () => {
    return (
        <svg className={cls.flowerThree} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 79 79" fill="none">
            <path d="M78.8467 39.4497C78.8467 33.4839 76.2997 27.2528 65.5191 28.6474C65.5032 28.6489 65.4858 28.6518 65.4699 28.6547C65.4829 28.6445 65.496 28.6344 65.509 28.6242C74.1178 21.9814 71.5157 15.7735 67.2997 11.5547C63.0837 7.33583 56.8799 4.73205 50.2415 13.3466C50.2314 13.3596 50.2212 13.3727 50.2111 13.3857C50.2125 13.3698 50.2155 13.3524 50.2183 13.3364C51.6121 2.54725 45.3851 0 39.4233 0C33.4615 0 27.2346 2.5487 28.6283 13.3364C28.6298 13.3524 28.6327 13.3698 28.6356 13.3857C28.6254 13.3727 28.6153 13.3596 28.6051 13.3466C21.9667 4.73205 15.763 7.33583 11.547 11.5547C7.33096 15.7735 4.72889 21.9814 13.3377 28.6242C13.3507 28.6344 13.3637 28.6445 13.3768 28.6547C13.3609 28.6532 13.3435 28.6503 13.3276 28.6474C2.54558 27.2528 0 33.4839 0 39.4497C0 45.4155 2.54702 51.6466 13.3276 50.2519C13.3435 50.2505 13.3609 50.2476 13.3768 50.2447C13.3637 50.2548 13.3507 50.265 13.3377 50.2751C4.72889 56.918 7.33096 63.1259 11.547 67.3447C15.763 71.5635 21.9667 74.1673 28.6051 65.5528C28.6153 65.5397 28.6254 65.5267 28.6356 65.5136C28.6341 65.5296 28.6312 65.547 28.6283 65.5629C27.2346 76.3521 33.4615 78.8994 39.4233 78.8994C45.3851 78.8994 51.6121 76.3507 50.2183 65.5629C50.2169 65.547 50.214 65.5296 50.2111 65.5136C50.2212 65.5267 50.2314 65.5397 50.2415 65.5528C56.8799 74.1673 63.0837 71.5635 67.2997 67.3447C71.5157 63.1259 74.1178 56.918 65.509 50.2751C65.496 50.265 65.4829 50.2548 65.4699 50.2447C65.4858 50.2461 65.5032 50.249 65.5191 50.2519C76.3011 51.6466 78.8467 45.4155 78.8467 39.4497Z" fill="white"/>
            <path d="M49.2503 49.2824C54.6773 43.8517 54.6773 35.0468 49.2503 29.6161C43.8232 24.1854 35.0242 24.1854 29.5971 29.6161C24.17 35.0468 24.17 43.8517 29.5971 49.2824C35.0242 54.7131 43.8232 54.7131 49.2503 49.2824Z" fill="#FFB206"/>
        </svg>
    )
}
