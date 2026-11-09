import { Component, inject, signal } from '@angular/core';
import { Footer } from './footer/footer';
import { Header } from './header/header';
import { DOCUMENT } from '@angular/common';
import { RouterOutlet } from '@angular/router';
@Component({
  imports: [Header, Footer, RouterOutlet],
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.html',
})

export class App {
  protected readonly title = signal('star-wars-routing');


  private document = inject(DOCUMENT);
  isDark = this.document.documentElement.classList.toggle('dark', localStorage.getItem('theme') !== 'light');
   toggleTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    this.document.documentElement.classList.toggle('dark', this.isDark);
  }
}
