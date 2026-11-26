import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ALBUMS_DATA, AlbumData } from '../data/albums.data';

@Component({
  imports: [RouterLink],
  selector: 'app-gallery',
  templateUrl: './gallery.html',
})
export class GalleryComponent {
  albums = ALBUMS_DATA;
  selectedAlbum = signal<AlbumData | null>(null);

  openPreview(album: AlbumData) {
    this.selectedAlbum.set(album);
  }

  closePreview() {
    this.selectedAlbum.set(null);
  }
}
