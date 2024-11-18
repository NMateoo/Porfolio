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
      title: 'Proyecto TGF',
      description: 'Un blog interactivo donde los usuarios pueden publicar, categorizar y explorar posts de otros usuarios. Incluye funcionalidades de autenticación, manejo de categorías y diseño responsive.',
      technologies: ['Angular', 'Java', 'Spring Boot', 'Tailwind CSS', 'SQL'],
      imageUrl: 'https://i.imgur.com/5RXtTSM.png',
      codeUrl: 'https://github.com/NMateoo/TFG'
    },
    {
      title: 'Yuppo Downloader',
      description: 'Descargardor automático de fotos de albunes Yuppo. Da una solución practica a los usuarios que quieran descargar albunes de Yuppo y no quieran hacerlo manualmente. Desarrollado en Python.',
      technologies: ['Python'],
      visits: '+1 millón de visitas',
      imageUrl: 'https://i.imgur.com/nEsNcpA.png',
      codeUrl: 'https://github.com/NMateoo/Yuppo-Downloader'
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
