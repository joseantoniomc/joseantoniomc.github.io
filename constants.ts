import { Project, Experience } from './types';

export const HERO_TITLE = "José Antonio Moreno";
export const HERO_SUBTITLE = "Game Developer";
export const HERO_DESC = "I build immersive games and interactive experiences. Specializing in Unity, C#, and gameplay programming.";

// INSTRUCCIONES PARA IMAGENES:
// 1. Crea una carpeta llamada "images" en la raíz del proyecto.
// 2. Pon tus fotos ahí (ej. "juego1.jpg").
// 3. Cambia la propiedad image abajo a: './images/juego1.jpg'

export const EXPERIENCES: Experience[] = [
  {
    id: 'freelance',
    role: 'Indie Game Developer',
    company: 'Self-Employed',
    period: '2021 - Present',
    description: 'Developed and published mobile and PC games. Handled full-cycle development including programming, game design, and visual assets.',
    skills: ['Unity', 'C#', 'Game Design', 'Publishing']
  },
  {
    id: 'student',
    role: 'Game Development Student',
    company: 'University Project',
    period: '2018 - 2022',
    description: 'Collaborated in Agile teams to build prototypes and full game releases. specialized in gameplay mechanics and AI behavior.',
    skills: ['Agile', 'Jira', 'Teamwork', 'C++']
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'go-on',
    title: 'GO-ON',
    category: 'Android Game',
    description: 'Hyper Casual mobile game with 21 different levels developed in Unity.',
    fullDescription: "GoOn is an Hyper Casual 2D game for Android. It is a game with 21 different levels, developed in Unity Engine.",
    image: 'https://picsum.photos/seed/goon/800/600', // Poner aqui ruta local: './images/go-on.jpg'
    tags: ['Unity', 'C#', 'Mobile'],
