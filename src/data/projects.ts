export interface Project {
  id: number
  name: string
  githubUrl: string
  description: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'FairTips',
    githubUrl: 'https://github.com/lior88844/FairTips',
    description:
      'A fair tipping calculator application to help users calculate appropriate tips',
  },
  {
    id: 2,
    name: 'Ella',
    githubUrl: 'https://github.com/lior88844/ella',
    description:
      'An interactive application for kids with fun activities and games',
  },
  {
    id: 3,
    name: 'AppSus',
    githubUrl: 'https://github.com/lior88844/AppSus',
    description:
      'A suite of web applications inspired by Google services with full CRUDL support',
  },
  {
    id: 4,
    name: 'Miss Cocktail',
    githubUrl: 'https://github.com/lior88844/miss-cocktail-angular',
    description: 'A cocktail recipe application built with Angular',
  },
  {
    id: 5,
    name: 'Mister Toy',
    githubUrl: 'https://github.com/lior88844/mister-toy',
    description:
      'A toy management application for tracking and organizing toys',
  },
  {
    id: 6,
    name: 'Meme Generator',
    githubUrl: 'https://github.com/lior88844/Meme-Generator',
    description: 'A fun application for creating and sharing custom memes',
  },
  {
    id: 7,
    name: 'Sunday',
    githubUrl: 'https://github.com/EdenDe/sunday',
    description: 'A collaborative project for Sunday activities and planning',
  },
]
