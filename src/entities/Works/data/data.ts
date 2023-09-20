import projectDImage from 'shared/assets/pictures/works/project-d.png'
import diverImage from 'shared/assets/pictures/works/diver.png'
import boardelloDImage from 'shared/assets/pictures/works/boardello.png'
import wormsImage from 'shared/assets/pictures/works/worms.png'

interface Project {
    title: string
    description: string
    stack: string[]
    image: string
}

export const projectData: Project[] = [
    {
        title: 'Project-D',
        description: 'Web studio\'s site, developed using React and GSAP, is a minimalist showcase of our work. It features smooth animations, highlighting our commitment to modern web design.',
        stack: ['react', 'scss'],
        image: projectDImage
    },
    {
        title: 'Worms',
        description: 'Our final study project is an exciting Worms game clone, meticulously crafted by our team of three. We implemented everything from scratch, including a bespoke physics engine, using TypeScript and Three.js to deliver a thrilling gaming experience.',
        stack: ['three.js', 'typescript', 'scss'],
        image: wormsImage
    },
    {
        title: 'Boardello',
        description: 'Our final project is a cutting-edge task manager that we built using React and TypeScript. This robust tool not only simplifies task organization but also showcases our expertise in modern web development.',
        stack: ['react', 'redux', 'scss'],
        image: boardelloDImage
    },
    {
        title: 'Diver Port',
        description: 'Our portfolio website, brought to life with the magic of WebGL, serves as a captivating canvas for a talented creative designer. Explore their work in a visually stunning and interactive way.',
        stack: ['vanilla js', 'ogl', 'prismic', 'shaders'],
        image: diverImage
    }
]
