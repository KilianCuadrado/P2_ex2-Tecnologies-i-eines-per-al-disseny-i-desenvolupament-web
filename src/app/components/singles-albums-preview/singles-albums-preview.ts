import { Component, input } from '@angular/core';
import type { Album } from '../../app';

@Component({
  imports: [],
  selector: 'app-singles-albums-preview',
  templateUrl: './singles-albums-preview.html',
})
export class SinglesAlbumsPreview {
  album = input.required<Album>();
}
