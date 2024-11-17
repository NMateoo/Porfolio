import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'SVGL - A beautiful library with SVG logos',
      description: 'Biblioteca de logos SVG de las marcas más ffffffffffffffffffffffffffffffffffffffffffffffffffff populares. +10k visitas al mes. +2k SVGs descargados. Creado desde cero con Next.js, React y Tailwind CSS.',
      technologies: ['Next.js', 'Tailwind CSS'],
      visits: '+10k visitas',
      imageUrl: 'https://concepto.de/wp-content/uploads/2014/10/proyecto-e1551127430285-800x412.jpg',
      codeUrl: '#',
      previewUrl: '#'
    },
    {
      title: 'AdventJS - Retos de programación con JavaScript y TypeScript',
      description: 'Plataforma gratuita con retos de programación. Más de 1 millón de visitas en un mes. +50k retos completados. Creada desde cero con Next.js, React y Tailwind CSS.',
      technologies: ['Next.js', 'Tailwind CSS'],
      visits: '+1 millón de visitas',
      imageUrl: 'assets/adventjs-logo.png',
      previewUrl: '#'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
