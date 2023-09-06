interface Project {
    title: string
    description: string
    stack: string[]
}

export const projectData: Project[] = [
    {
        title: 'Project-D',
        description: 'Простой сайт на React, учился пользоваться GSAP.',
        stack: ['react', 'scss']
    },
    {
        title: 'Worms',
        description: 'Финальный проект курса по JS в RSSchool, выполнялся командой из трех человек, все подробности создания и роли описаны в MIRO. Стек: Javascript, Typescript, Three.js, Webpack, Git.',
        stack: ['three.js', 'typescript', 'scss']
    },
    {
        title: 'Boardello',
        description: 'final project по REACT в RSSchool, выполнялся командой из трех человек, задача была сделать аналог trello. Стек: React, Typescript, Redux Toolkit, Git.',
        stack: ['react', 'redux', 'scss']
    },
    {
        title: 'Diver Port',
        description: 'this is project portfolio, testing shaders, gsap, vanilla js',
        stack: ['vanilla js', 'ogl', 'prismic']
    },
    {
        title: 'Final',
        description: 'this is project 5 ewdwfeskdrfmjekrlg',
        stack: ['react']
    }
]
