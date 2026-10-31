import { Component, input, output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  templateUrl: './header.html',
})
export class Header {
  am_logo = 'https://tse3.mm.bing.net/th/id/OIP.PRP0dm-uV8SFRrBZhdQSTgHaEc?r=0&rs=1&pid=ImgDetMain&o=7&rm=3';
  isDark = input(true);
  toggleTheme = output<void>();
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}
