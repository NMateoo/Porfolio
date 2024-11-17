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
  name: string = 'Miguel Ángel';
  nickname: string = 'midu';
  bio: string[] = [
    'Empecé en la programación con un Amstrad, tenía 10 años. Actualmente estoy liderando equipos de desarrollo en multinacionales.',
    'Algunos de mis éxitos incluyen colaborar con Mozilla para el desarrollo de las primeras apps en su sistema FirefoxOS. Aunque hoy está desaparecido, fue un gran avance en el mundo del desarrollo web.',
    'Como creador de contenido, cuento con el canal de habla hispana más visto del mundo en la categoría de Software & Game Development en Twitch. Mi objetivo es mejorar la empleabilidad de la comunidad hispana y el acceso a contenido de calidad.'
  ];
  profileImage: string = 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Foto_Perfil_.jpg';
}
