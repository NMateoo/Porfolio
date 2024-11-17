import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {
  scrolled = false;
  isDarkMode: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark');
    this.isDarkMode = !this.isDarkMode;
  }
}
