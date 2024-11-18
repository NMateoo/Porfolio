import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  name: string = 'Nicolás';
  nickname: string = 'Mateo';
  bio: string[] = [
    'Desde pequeño siempre me han llamado la atención la tecnología. Mi primer acercamiento a la programación fue creando mis propios hackrooms de Pokémon para jugarlos en un emulador de GBA que tenía en mi móvil. A partir de ahí, mi curiosidad me llevó investigar sobre lenguajes de programación y me tope con Python, que fue fundamental para entender la lógica y desarrollar mis primeros scripts.',
    'He estudiado desarrollo de aplicaciones web en Málaga, donde adquirí una sólida base de conocimientos técnicos y habilidades prácticas en programación y desarrollo web.',
    'Hoy, con 20 años, sigo aprendiendo y ampliando mis conocimientos cada día, con el objetivo de crear proyectos innovadores y contribuir al desarrollo tecnológico de la comunidad.'
  ];


  profileImage: string = 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg';
}
