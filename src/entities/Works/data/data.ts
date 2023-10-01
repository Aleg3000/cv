import projectDImageD from 'shared/assets/pictures/works/desktop/project-d.png'
import diverImageD from 'shared/assets/pictures/works/desktop/diver.png'
import boardelloDImageD from 'shared/assets/pictures/works/desktop/boardello.png'
import wormsImageD from 'shared/assets/pictures/works/desktop/worms.png'

import projectDImageM from 'shared/assets/pictures/works/mobile/projectD.png'
import wormsImageM from 'shared/assets/pictures/works/mobile/worms.png'
import boardelloImageM from 'shared/assets/pictures/works/mobile/boardello.png'
import diverImageM from 'shared/assets/pictures/works/mobile/diver.png'

interface Project {
    title: string
    description: string
    stack: string[]
    imageD: string
    imageM: string
}

export const projectData: Project[] = [
    {
        title: 'Project-D',
        description: 'Web studio\'s site, developed using React and GSAP, is a minimalist showcase of our work. It features smooth animations, highlighting our commitment to modern web design.',
        stack: ['react', 'scss'],
        imageD: projectDImageD,
        imageM: projectDImageM
    },
    {
        title: 'Worms',
        description: 'Our final study project is an exciting Worms game clone, meticulously crafted by our team of three. We implemented everything from scratch, including a bespoke physics engine, using TypeScript and Three.js to deliver a thrilling gaming experience.',
        stack: ['three.js', 'typescript', 'scss'],
        imageD: wormsImageD,
        imageM: wormsImageM
    },
    {
        title: 'Boardello',
        description: 'Our final project is a cutting-edge task manager that we built using React and TypeScript. This robust tool not only simplifies task organization but also showcases our expertise in modern web development.',
        stack: ['react', 'redux', 'scss'],
        imageD: boardelloDImageD,
        imageM: boardelloImageM
    },
    {
        title: 'Diver Port',
        description: 'Our portfolio website, brought to life with the magic of WebGL, serves as a captivating canvas for a talented creative designer. Explore their work in a visually stunning and interactive way.',
        stack: ['vanilla js', 'ogl', 'prismic', 'shaders'],
        imageD: diverImageD,
        imageM: diverImageM
    }
]
