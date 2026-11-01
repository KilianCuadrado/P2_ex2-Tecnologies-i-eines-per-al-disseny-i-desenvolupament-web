import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-singles-albums-preview',
  templateUrl: './singles-albums-preview.html',
})
export class SinglesAlbumsPreview {
  album = input.required<any>();
}
