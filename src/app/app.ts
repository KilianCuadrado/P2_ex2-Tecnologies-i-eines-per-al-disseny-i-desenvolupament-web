import { Component } from '@angular/core';
import { Header } from './components/header/header'
@Component({
  imports: [Header],
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  imageUrl ='https://wallpapercat.com/w/full/d/6/c/2251019-3360x1890-desktop-hd-arctic-monkeys-band-wallpaper-image.jpg';

}
