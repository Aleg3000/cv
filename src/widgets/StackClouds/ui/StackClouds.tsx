/* eslint-disable react-hooks/exhaustive-deps */
import { getIsAboutOpen } from 'entities/About/model/selectors/getIsAboutOpen/getIsAboutOpen'
import { projectData } from 'entities/Works/data/data'
import { getCurrentProject, getIsProjectChanging } from 'entities/Works/model/selectors/getCurrentProject/getCurrentProject'
import { getIsWorksOpen } from 'entities/Works/model/selectors/getIsWorksOpen/getIsWorksOpen'
import { useLayoutEffect, useRef, useState, type FC } from 'react'
import { useSelector } from 'react-redux'
import { classNames } from 'shared/lib/classNames/classNames'
import { getZIndex } from 'shared/lib/zIndexes/zIndexes'
import cls from './StackClouds.module.scss'
import gsap from 'gsap'
import { getTime } from 'shared/lib/getTime/getTime'
import { typedMemo } from 'app/types/memo'

interface StackCloudsProps {
    className?: string
}

const fullStack = ['React', 'JavaScript', 'TypeScript', 'Redux', 'Three.js', 'CSS', 'SCSS', 'HTML', 'Git', 'Storybook', 'Shaders', 'Webpack']

const Cloud1 = typedMemo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud1} viewBox="0 0 153 115" fill="none">
            <path d="M143.068 56.974C147.877 59.4367 151.211 64.2792 151.482 69.9248V70.6528C151.482 78.916 144.912 85.6641 136.627 86.0383L135.44 86.0919L135.22 87.2592C132.408 102.192 119.196 113.5 103.311 113.5C89.729 113.5 78.0921 105.225 73.2538 93.4838L72.443 91.5162L70.8625 92.9412C66.6037 96.7811 60.5719 99.2163 53.8374 99.2163C44.3767 99.2163 36.3263 94.4238 32.5948 87.683L31.9021 86.4318L30.6194 87.064C27.9246 88.392 24.9002 89.1536 21.693 89.1536C10.5319 89.1536 1.5 80.1782 1.5 69.1389C1.5 58.0996 10.5319 49.1243 21.693 49.1243C23.9965 49.1243 26.2024 49.5213 28.2805 50.236L31.3168 51.2803L30.1693 48.2815C29.0974 45.4804 28.4726 42.4559 28.4726 39.2891C28.4726 25.4002 39.821 14.1274 53.8553 14.1274C60.9963 14.1274 67.4216 17.0524 72.0363 21.7469L73.4615 23.1968L74.4263 21.4072C80.8167 9.55371 93.4272 1.5 107.926 1.5C128.928 1.5 145.915 18.3826 145.915 39.1645C145.915 44.8315 144.638 50.1904 142.392 55.0047L141.781 56.315L143.068 56.974Z" fill="#D8F6FF" stroke="#4ECAFF" stroke-width="3"/>
        </svg>
    )
})

const Cloud2 = typedMemo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud2} viewBox="0 0 161 107" fill="none">
            <path d="M127.916 35.2623L128.484 36.5644L129.815 36.0683C132.216 35.1735 134.801 34.6839 137.506 34.6839C149.354 34.6839 159.011 44.0896 159.482 55.9057V56.8094C159.482 68.215 150.896 77.6014 139.872 78.7994L138.709 78.9257L138.549 80.0843C137.106 90.4714 128.254 98.4665 117.544 98.4665C115.507 98.4665 113.548 98.1644 111.663 97.6231L110.925 97.411L110.322 97.8858C104.336 102.594 96.3431 105.5 87.3959 105.5C78.4487 105.5 70.334 102.558 64.3333 97.7828L63.4039 97.0432L62.4709 97.7784C59.6558 99.9966 56.1058 101.334 52.2439 101.334C47.2462 101.334 42.7746 99.1211 39.7284 95.6108L38.9349 94.6965L37.8737 95.279C34.3767 97.1987 30.3738 98.2861 26.113 98.2861C12.5297 98.2861 1.5 87.2069 1.5 73.5276C1.5 63.7475 7.13083 55.2959 15.3153 51.2658L16.2502 50.8055L16.145 49.7687C16.0594 48.925 16.0092 48.0928 16.0092 47.251C16.0092 34.2569 26.4829 23.7368 39.3846 23.7368C39.541 23.7368 39.6994 23.7439 39.8944 23.7532L39.9133 23.7541C40.0934 23.7626 40.3103 23.7729 40.5325 23.7729H41.601L41.9501 22.7631C46.233 10.377 57.9296 1.5 71.6851 1.5C84.4484 1.5 95.459 9.15522 100.393 20.1632L100.866 21.2181L102.006 21.0296C103.231 20.8271 104.495 20.725 105.797 20.725C115.685 20.725 124.181 26.6964 127.916 35.2623Z" fill="#D8F6FF" stroke="#4ECAFF" stroke-width="3"/>
        </svg>
    )
})

const Cloud3 = typedMemo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud3} viewBox="0 0 209 123" fill="none">
            <path d="M184.896 45.1981C197.082 45.1981 207.005 54.767 207.482 66.7221V67.6063C207.482 78.5404 199.593 87.6397 189.141 89.631L188.304 89.7906L188.012 90.5919C182.277 106.363 167.078 117.649 149.206 117.649C142.062 117.649 135.355 115.842 129.497 112.677L128.607 112.196L127.828 112.841C121.298 118.242 112.886 121.5 103.71 121.5C91.9596 121.5 81.4748 116.168 74.5643 107.816L73.489 106.517L72.324 107.737C67.9891 112.275 62.2122 115.1 55.1059 115.1C48.0072 115.1 41.6221 111.997 37.2805 107.084L36.7695 106.506L36.0018 106.585C34.8423 106.706 33.691 106.774 32.5283 106.774C15.3847 106.774 1.5 92.9756 1.5 75.9858C1.5 61.5966 11.4445 49.5192 24.8839 46.1332L25.9973 45.8527L26.0172 44.7047C26.2902 28.9857 39.1941 16.3156 55.1238 16.3156C60.4197 16.3156 65.3904 17.7394 69.6808 20.1996L70.962 20.9343L71.7165 19.6647C78.1775 8.79308 89.7343 1.5 103.728 1.5C117.715 1.5 129.904 9.17744 136.24 20.5212L137.035 21.9458L138.388 21.0334C142.799 18.0578 148.131 16.3156 153.876 16.3156C169.134 16.3156 181.474 28.5803 181.474 43.6981V43.6983V43.6985V43.6987V43.6989V43.6991V43.6993V43.6996V43.6998V43.7V43.7002V43.7005V43.7006V43.7007V43.7008V43.7009V43.701V43.7011V43.7013V43.7014V43.7015V43.7016V43.7017V43.7019V43.702V43.7021V43.7022V43.7023V43.7024V43.7026V43.7027V43.7028V43.7029V43.703V43.7032V43.7033V43.7034V43.7035V43.7037V43.7038V43.7039V43.704V43.7042V43.7043V43.7044V43.7045V43.7047V43.7048V43.7049V43.705V43.7052V43.7053V43.7054V43.7056V43.7057V43.7058V43.7059V43.7061V43.7062V43.7063V43.7065V43.7066V43.7067V43.7069V43.707V43.7071V43.7073V43.7074V43.7075V43.7077V43.7078V43.7079V43.7081V43.7082V43.7083V43.7085V43.7086V43.7088V43.7089V43.709V43.7092V43.7093V43.7094V43.7096V43.7097V43.7099V43.71V43.7101V43.7103V43.7104V43.7106V43.7107V43.7108V43.711V43.7111V43.7113V43.7114V43.7116V43.7117V43.7119V43.712V43.7121V43.7123V43.7124V43.7126V43.7127V43.7129V43.713V43.7132V43.7133V43.7135V43.7136V43.7138V43.7139V43.7141V43.7142V43.7144V43.7145V43.7147V43.7148V43.715V43.7151V43.7153V43.7154V43.7156V43.7157V43.7159V43.716V43.7162V43.7163V43.7165V43.7166V43.7168V43.7169V43.7171V43.7173V43.7174V43.7176V43.7177V43.7179V43.718V43.7182V43.7184V43.7185V43.7187V43.7188V43.719V43.7191V43.7193V43.7195V43.7196V43.7198V43.7199V43.7201V43.7203V43.7204V43.7206V43.7207V43.7209V43.7211V43.7212V43.7214V43.7216V43.7217V43.7219V43.722V43.7222V43.7224V43.7225V43.7227V43.7229V43.723V43.7232V43.7234V43.7235V43.7237V43.7239V43.724V43.7242V43.7244V43.7245V43.7247V43.7249V43.725V43.7252V43.7254V43.7256V43.7257V43.7259V43.7261V43.7262V43.7264V43.7266V43.7267V43.7269V43.7271V43.7273V43.7274V43.7276V43.7278V43.7279V43.7281V43.7283V43.7285V43.7286V43.7288V43.729V43.7292V43.7293V43.7295V43.7297V43.7299V43.73V43.7302V43.7304V43.7306V43.7307V43.7309V43.7311V43.7313V43.7315V43.7316V43.7318V43.732V43.7322V43.7323V43.7325V43.7327V43.7329V43.7331V43.7332V43.7334V43.7336V43.7338V43.734V43.7341V43.7343V43.7345V43.7347V43.7349V43.735V43.7352V43.7354V43.7356V43.7358V43.736V43.7361V43.7363V43.7365V43.7367V43.7369V43.7371V43.7372V43.7374V43.7376V43.7378V43.738V43.7382V43.7383V43.7385V43.7387V43.7389V43.7391V43.7393V43.7395V43.7397V43.7398V43.74V43.7402V43.7404V43.7406V43.7408V43.741V43.7412V43.7413V43.7415V43.7417V43.7419V43.7421V43.7423V43.7425V43.7427V43.7429V43.743V43.7432V43.7434V43.7436V43.7438V43.744V43.7442V43.7444V43.7446V43.7448V43.745V43.7451V43.7453V43.7455V43.7457V43.7459V43.7461V43.7463V43.7465V43.7467V43.7469V43.7471V43.7473V43.7475V43.7477V43.7478V43.748V43.7482V43.7484V43.7486V43.7488V43.749V43.7492V43.7494V43.7496V43.7498V43.75V43.7502V43.7504V43.7506V43.7508V43.751V43.7512V43.7514V43.7516V43.7518V43.752V43.7522V43.7523V43.7525V43.7527V43.7529V43.7531V43.7533V43.7535V43.7537V43.7539V43.7541V43.7543V43.7545V43.7547V43.7549V43.7551V43.7553V43.7555V43.7557V43.7559V43.7561V43.7563V43.7565V43.7567V43.7569V43.7571V43.7573V43.7575V43.7577V43.7579V43.7581V43.7583V43.7585V43.7587V43.7589V43.7591V43.7593V43.7595V43.7597V43.7599V43.7601V43.7603V43.7605V43.7607V43.761V43.7612V43.7614V43.7616V43.7618V43.762V43.7622V43.7624V43.7626V43.7628V43.763V43.7632V43.7634V43.7636V43.7638V43.764V43.7642V43.7644V43.7646V43.7648V43.765V43.7652V43.7654V43.7656V43.7658V43.766V43.7663V43.7665V43.7667V43.7669V43.7671V43.7673V43.7675V43.7677V43.7679V43.7681V43.7683V43.7685V43.7687V43.7689V43.7691V43.7693V43.7695V43.7697V43.77V43.7702V43.7704V43.7706V43.7708V43.771V43.7712V43.7714V43.7716V43.7718V43.772V43.7722V43.7724V43.7726V43.7728V43.7731V43.7733V43.7735V43.7737V43.7739V43.7741V43.7743V43.7745V43.7747V43.7749V43.7751V43.7753V43.7755V43.7757V43.776V43.7762V43.7764V43.7766V43.7768V43.777V43.7772V43.7774V43.7776V43.7778V43.778V43.7782V43.7785V43.7787V43.7789V43.7791V43.7793V43.7795V43.7797V43.7799V43.7801V43.7803V43.7805V43.7807V43.781V43.7812V43.7814V43.7816V43.7818V43.782V43.7822V43.7824V43.7826V43.7828V43.783V43.7832V43.7835V43.7837V43.7839V43.7841V43.7843V43.7845V43.7847V43.7849V43.7851V43.7853V43.7855V43.7858V43.786V43.7862V43.7864V43.7866V43.7868V43.787V43.7872V45.3722L183.056 45.2849C183.25 45.2743 183.431 45.2629 183.604 45.2521C184.062 45.2234 184.466 45.1981 184.896 45.1981Z" fill="#D8F6FF" stroke="#4ECAFF" stroke-width="3"/>
        </svg>
    )
})

const Cloud4 = typedMemo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud4} viewBox="0 0 164 109" fill="none">
            <path d="M162.482 60.5556V61.3431C162.072 70.3866 154.634 77.5852 145.526 77.6331L144.034 77.6409V79.1331C144.034 93.2412 132.618 104.678 118.548 104.678C111.65 104.678 105.39 101.914 100.79 97.4393L99.0377 95.7348L98.3116 98.0689C96.611 103.536 91.5262 107.5 85.5203 107.5C81.1819 107.5 77.3522 105.433 74.893 102.228L73.9374 100.982L72.7366 101.994C68.7521 105.349 63.6366 107.375 58.0354 107.375C48.8243 107.375 40.8781 101.897 37.2802 94.0153L36.6501 92.6347L35.2769 93.2809C32.2493 94.7058 28.849 95.4961 25.2746 95.4961C12.1498 95.4961 1.5 84.8277 1.5 71.6663C1.5 60.2196 9.53325 50.6581 20.2599 48.357L21.6777 48.0528L21.4217 46.6255C21.1509 45.1162 20.9996 43.5616 20.9996 41.978C20.9996 27.602 32.612 15.969 46.9488 15.969C52.0883 15.969 56.8706 17.4711 60.8972 20.0544L62.3294 20.9733L63.0614 19.4371C68.1165 8.8272 78.921 1.5 91.4201 1.5C105.415 1.5 117.276 10.6857 121.326 23.3744L121.745 24.686L123.087 24.381C124.329 24.0989 125.607 23.9359 126.908 23.9359C136.468 23.9359 144.23 31.7104 144.23 41.2992C144.23 41.3482 144.226 41.407 144.217 41.5328L144.216 41.548C144.207 41.6553 144.195 41.8212 144.195 41.9959V43.4775L145.676 43.4958C154.977 43.6107 162.482 51.1932 162.482 60.5556Z" fill="#D8F6FF" stroke="#4ECAFF" stroke-width="3"/>
        </svg>
    )
})

const Cloud5 = typedMemo(() => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud5} viewBox="0 0 208 142" fill="none">
            <path d="M192.711 65.8236L194.153 65.8891L193.468 67.091C201.252 71.529 206.5 79.8738 206.5 89.4664C206.5 103.7 194.944 115.245 180.691 115.245C177.335 115.245 174.152 114.602 171.223 113.435L170.642 113.204L170.069 113.453C167.451 114.593 164.552 115.245 161.523 115.245C158.142 115.245 154.961 114.444 152.109 113.036L150.552 112.267L150.018 113.92C145.03 129.349 130.585 140.5 113.45 140.5C96.3142 140.5 81.7992 129.296 76.8464 113.834L76.2725 112.042L74.6537 113.001C67.4375 117.273 59.0218 119.723 50.0275 119.723C23.2258 119.723 1.5 97.8639 1.5 71.2508C1.5 44.6366 22.9966 23.0223 49.592 22.7964L50.4818 22.7888L50.9017 22.0043C57.4289 9.8096 70.3083 1.5 85.1365 1.5C104.16 1.5 119.975 15.1745 123.289 33.2098L123.798 35.98L125.812 34.0116C132.931 27.0561 142.654 22.7785 153.382 22.7785C175.202 22.7785 192.872 40.4491 192.872 62.2235C192.872 62.5807 192.868 62.9361 192.858 63.2897L192.711 63.2059V65.7879V65.8236Z" fill="#D8F6FF" stroke="#4ECAFF" stroke-width="3"/>
        </svg>
    )
})

// const Cloud6 = typedMemo(() => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud6} viewBox="0 0 185 112" fill="none">
//             <path d="M141.837 33.2542C142.26 25.4826 140.15 20.1288 137.014 16.7313C133.866 13.321 129.548 11.7306 125.27 11.74C120.978 11.7494 116.827 13.3693 114.041 16.2484C111.295 19.0861 109.777 23.2409 110.851 28.6055L107.992 29.4666C104.822 21.6937 101.425 13.8071 96.471 8.37157C94.0183 5.68048 91.2207 3.6352 87.922 2.50259C84.6296 1.37216 80.738 1.1163 76.0374 2.15609L76.0295 2.15783L76.0216 2.15949C74.9077 2.39336 73.6078 2.89112 72.1789 3.62694L72.1809 3.63517C67.0491 6.29025 61.0504 11.6737 57.6979 17.5717C56.0274 20.5105 55.0727 23.474 55.1172 26.2196C55.1437 27.8548 55.5238 29.4487 56.3654 30.9595C57.1675 31.8163 57.9486 32.7668 58.7014 33.8153C58.7805 33.8959 58.8475 33.9655 58.9008 34.0227C58.9351 34.0595 58.9741 34.1022 59.0101 34.1444C59.0265 34.1638 59.0564 34.1994 59.0889 34.2432C59.1046 34.2642 59.1338 34.3044 59.166 34.3567C59.1795 34.3785 59.2748 34.5276 59.3349 34.74C59.3604 34.8297 59.4408 35.1306 59.3489 35.5063C59.2227 36.0222 58.8286 36.4446 58.2988 36.5941C57.9141 36.7027 57.6009 36.6254 57.5085 36.6011C57.3801 36.5673 57.284 36.5236 57.2372 36.501C57.0875 36.4289 56.9772 36.3427 56.9659 36.3339L56.965 36.3332C56.9045 36.287 56.8499 36.2388 56.82 36.2122C56.7492 36.1491 56.6585 36.0639 56.5538 35.9631C55.4717 34.9514 54.6047 33.8745 53.9344 32.7487C47.576 26.1347 40.3657 26.6807 36.5245 29.851C34.3231 31.6679 33.096 34.3941 33.5199 37.4803C33.9467 40.587 36.0875 44.3039 41.1381 47.9024L39.3979 50.3462C39.3977 50.346 39.3975 50.3459 39.3973 50.3457L141.837 33.2542ZM141.837 33.2542C141.837 33.2543 141.837 33.2544 141.837 33.2545L143.335 33.336L144.833 33.4178C145.066 29.1579 146.178 27.4167 147.026 26.8732C147.694 26.4446 148.779 26.4695 150.171 27.7126C152.936 30.1821 155.125 36.1845 152.377 42.1009L150.74 45.6249L154.32 44.115C167.112 38.7201 174.805 40.7083 178.98 45.3355C183.308 50.133 184.442 58.348 182.753 66.5657C181.069 74.7594 176.685 82.4044 170.691 86.015C167.729 87.7992 164.363 88.6114 160.65 88.0428C156.917 87.4711 152.716 85.4844 148.154 81.4587L145.766 83.1322C150.917 96.2356 141.126 108.677 127.446 108.423C113.12 108.155 100.512 98.6775 96.6481 85.201C96.4127 83.8449 96.1071 82.406 95.7272 80.8809L92.7869 81.4563C93.0035 82.9674 93.3168 84.442 93.7199 85.875C94.7541 91.955 94.1873 95.7285 92.9935 97.9137C91.6504 100.372 89.3283 101.107 86.6608 100.683C83.9215 100.248 81.0779 98.5894 79.357 96.6064C78.5014 95.6204 78.0044 94.6475 77.8601 93.8057C77.7253 93.0188 77.8838 92.3016 78.4548 91.6304C78.4549 91.6304 78.4549 91.6303 78.455 91.6302L76.1699 89.6864C76.1699 89.6865 76.1698 89.6865 76.1697 89.6866C64.0014 103.994 44.7577 115.58 26.2362 108.204C8.13374 100.973 -1.40721 84.6998 2.28739 65.926L0.816054 65.6365L2.2874 65.926C4.0898 56.7658 9.49423 50.106 16.3021 47.1089C23.0845 44.123 31.4463 44.6887 39.3953 50.3443L141.837 33.2542Z" fill="#D8F6FF" stroke="#4ECAFF" stroke-width="3"/>
//         </svg>
//     )
// })

// const Cloud7 = typedMemo(() => {
//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" className={cls.cloud7} viewBox="0 0 247 115" fill="none">
//             <path d="M204.695 58.0394C206.879 50.2275 203.676 41.4867 198.513 37.0158C195.908 34.7604 192.938 33.7005 190.007 34.2134C187.075 34.7264 183.828 36.8746 180.808 41.7795L178.887 44.8988L178.068 41.3283C177.85 40.377 177.636 39.4288 177.424 38.4852C175.778 31.1887 174.194 24.1681 171.178 18.125C167.932 11.622 163.044 6.30759 154.572 3.25663L154.563 3.26535L153.689 2.97488C149.908 1.71916 145.744 1.20558 141.198 1.66699C134.38 2.36836 126.604 5.02286 120.951 9.45454C115.341 13.8526 111.933 19.8815 113.331 27.5284L110.417 28.2232C108.237 20.8443 102.179 18.8945 97.683 20.3606C95.4125 21.1011 93.5507 22.7016 92.6726 24.9455C91.7996 27.1761 91.8176 30.2573 93.7322 34.1025L91.0633 35.472C87.9604 29.6014 82.6821 26.4827 76.6426 25.4392C70.567 24.3894 63.7701 25.4594 57.8968 27.9685C52.0017 30.4869 47.2479 34.361 45.0469 38.714C43.9574 40.8687 43.4963 43.1286 43.7961 45.432C44.0961 47.7368 45.172 50.1923 47.3299 52.7116C47.3299 52.7116 47.3299 52.7116 47.3299 52.7116L46.1906 53.6874L45.0514 54.6632C43.7907 53.1913 42.816 51.6938 42.1123 50.1846C31.9049 43.8001 16.8052 48.3859 21.0154 60.7863L204.695 58.0394ZM204.695 58.0394C204.685 58.0499 204.674 58.061 204.664 58.0725C204.605 58.1366 204.468 58.2961 204.372 58.5424C204.267 58.814 204.175 59.3138 204.466 59.8265C204.727 60.2869 205.131 60.4562 205.304 60.5128C205.626 60.6187 205.901 60.5831 205.929 60.5803C206.083 60.5647 206.203 60.5282 206.242 60.5163C206.355 60.4819 206.459 60.4378 206.548 60.3949C206.564 60.3872 206.581 60.3788 206.599 60.3697L207.182 60.17L207.273 59.8768C207.48 59.6675 207.678 59.394 207.81 59.0431L207.815 59.0307C208.727 56.5407 211.131 55.0589 214.814 54.6458C218.49 54.2336 223.109 54.9528 227.701 56.5582C232.282 58.1598 236.706 60.5978 240.001 63.4955C243.322 66.416 245.318 69.6381 245.474 72.8024L245.474 72.8028C245.72 77.787 244.229 81.5403 241.727 84.3162C239.196 87.1236 235.535 89.0347 231.305 90.1035C222.798 92.2529 212.459 90.8794 205.824 87.204L201.611 84.8707L203.753 89.1834C205.538 92.7757 206.056 95.7291 205.761 98.1143C205.469 100.476 204.363 102.418 202.633 103.992C199.101 107.207 192.96 108.874 186.251 108.896C179.581 108.918 172.712 107.308 167.927 104.375C165.543 102.913 163.748 101.168 162.704 99.2057C161.678 97.2778 161.333 95.0598 161.965 92.5033C161.966 92.4986 161.967 92.494 161.968 92.4894L160.513 92.1278L159.057 91.7662C157.357 98.6131 151.489 104.061 143.244 107.823C135.03 111.571 124.7 113.52 114.599 113.5C104.486 113.48 94.768 111.487 87.7249 107.511C80.7306 103.563 76.4972 97.7573 76.826 89.956L73.8287 89.8291C73.8287 89.8293 73.8286 89.8295 73.8286 89.8297L204.695 58.0394Z" fill="#D8F6FF" stroke="#4ECAFF" stroke-width="3"/>
//         </svg>
//     )
// })

const clouds = [Cloud1, Cloud2, Cloud3, Cloud4, Cloud5]

export const StackClouds: FC<StackCloudsProps> = typedMemo(({ className }) => {
    const currentProject = useSelector(getCurrentProject)
    const isWorksOpened = useSelector(getIsWorksOpen)
    const isAboutOpened = useSelector(getIsAboutOpen)
    const clouds = useRef(null)
    const isProjectChanging = useSelector(getIsProjectChanging)
    const q = gsap.utils.selector(clouds)

    const [stack, setStack] = useState<string[]>([])

    useLayoutEffect(() => {
        if (isAboutOpened) {
            setStack(fullStack)
        }
        if (isWorksOpened) {
            setStack(projectData[currentProject].stack)
        }
        // eslint-disable-next-line no-mixed-operators
        if (isProjectChanging || !isAboutOpened && !isWorksOpened && stack.length) {
            gsap.to(q('.cloud'), {
                y: '-20rem',
                duration: 0.5,
                stagger: 0.05,
                ease: 'back.in(3)',
                onComplete: () => { setStack([]) }
            })
        }
    }, [isAboutOpened, isWorksOpened, currentProject, isProjectChanging])

    return (
        <div ref={clouds} style={{ zIndex: getZIndex('clouds') }} className={classNames(cls.StackClouds, [className])}>
            {stack.map((stack, key, arr) => <Cloud q={arr.length} key={stack} index={key} name={stack}/>)}
        </div>
    )
})

const Cloud = typedMemo(({ name, index, q }: { name: string, index: number, q: number }) => {
    const cloud = useRef(null)
    const height = window.innerHeight * 0.15 * Math.random() // 0.15 how low from the top of screen clouds will be
    const CloudElement = clouds[index % clouds.length]

    useLayoutEffect(() => {
        const cloudWidth = cloud.current.getBoundingClientRect().width
        const width = document.documentElement.clientWidth - cloudWidth

        const direction = Math.random() > 0.5 ? 'right' : 'left'
        const leftPos = (width / (q - 1)) * index
        const fullTime = 7.5 + Math.random() * 7.5
        const time = getTime(leftPos, document.documentElement.clientWidth, cloudWidth, direction, fullTime)

        gsap.fromTo(cloud.current,
            { y: '-20rem', left: `${leftPos}px` },
            {
                y: `${height}px`,
                delay: 0.1 * index,
                ease: 'elastic.out(1.2, 0.4)',
                duration: 1.5
            })

        gsap.to(cloud.current, {
            delay: 2,
            keyframes: [
                {
                    repeat: 0,
                    left: direction === 'left' ? '0px' : `${width}px`,
                    duration: time,
                    ease: 'none'
                },
                {
                    repeat: -1,
                    yoyo: true,
                    left: direction === 'left' ? `${width}px` : '0px',
                    duration: fullTime,
                    ease: 'none'
                }
            ]
        })
    }, [])

    return (
        <div ref={cloud} className={classNames(cls.cloud, ['cloud'])}>
            <CloudElement />
            <p>{name}</p>
        </div>
    )
})
