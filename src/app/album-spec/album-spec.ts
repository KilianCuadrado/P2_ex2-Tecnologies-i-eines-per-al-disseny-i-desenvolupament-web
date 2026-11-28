import { Component, computed, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ALBUMS_DATA } from '../data/albums.data';
import { AudioPlayerComponent } from '../audio-player/audio-player';

@Component({
  imports: [RouterLink, AudioPlayerComponent],
  selector: 'app-album-spec',
  templateUrl: './album-spec.html',
})
export class AlbumSpec {
  albun = signal('');
  private activatedRoute = inject(ActivatedRoute);

  albums = ALBUMS_DATA;

  selectedAlbum = computed(() =>
    this.albums.find((a) => a.title.toLowerCase() === this.albun().toLowerCase())
  );

  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.albun.set(params['albun'] ?? '');
    });
  }
}
