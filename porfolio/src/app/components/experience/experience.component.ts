import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  experiences = [
    {
      title: 'Desarrollador web',
      company: 'NTT Data',
      period: 'Actualmente...',
      description: 'Actualmente trabajo en NTT Data como Desarrollador Web Junior, enfocado en el desarrollo y mantenimiento de software utilizando Java y SQL principalmente. Mis principales responsabilidades incluyen la identificación y corrección de fallos, así como la mejora continua de sistemas ya implementados. Formo parte de un equipo en el que trabajamos para garantizar la calidad y eficiencia de los servicios que ofrecemos a nuestros clientes.'
    }
  ];
}
