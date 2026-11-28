import { Component, computed, input, signal } from '@angular/core';
import { ALBUMS_DATA, AlbumData, AlbumSong } from '../data/albums.data';

@Component({
  imports: [],
  selector: 'app-audio-player',
  templateUrl: './audio-player.html',
})
export class AudioPlayerComponent {
  
  albumInput = input<AlbumData | null>(null, { alias: 'album' });

  albums = ALBUMS_DATA;
  selectedAlbumTitle = signal<string>('AM');
  selectedTrackId = signal<number>(1);

  activeAlbum = computed<AlbumData>(() => {
    const fromInput = this.albumInput();
    if (fromInput) {
      return fromInput;
    }
    return (
      this.albums.find((a) => a.title === this.selectedAlbumTitle()) ??
      this.albums[5] ??
      this.albums[0]
    );
  });

  activeSong = computed<AlbumSong>(() => {
    const album = this.activeAlbum();
    return album.songs.find((s) => s.id === this.selectedTrackId()) ?? album.songs[0];
  });

  audioSources = computed(() => {
    const album = this.activeAlbum();
    const song = this.activeSong();
    const folderEncoded = encodeURIComponent(album.folder);
    const fileEncoded = encodeURIComponent(song.filePrefix);
    return {
      key: `${album.folder}/${song.filePrefix}`,
      mp3: `/${folderEncoded}/${fileEncoded}.mp3`,
      ogg: `/${folderEncoded}/${fileEncoded}.ogg`,
      wav: `/${folderEncoded}/${fileEncoded}.wav`,
    };
  });

  selectAlbum(title: string) {
    this.selectedAlbumTitle.set(title);
    this.selectedTrackId.set(1);
  }

  selectTrack(trackId: number) {
    this.selectedTrackId.set(trackId);
  }

  prevTrack() {
    const songs = this.activeAlbum().songs;
    const currentIndex = songs.findIndex((s) => s.id === this.activeSong().id);
    if (currentIndex > 0) {
      this.selectedTrackId.set(songs[currentIndex - 1].id);
    }
  }

  nextTrack() {
    const songs = this.activeAlbum().songs;
    const currentIndex = songs.findIndex((s) => s.id === this.activeSong().id);
    if (currentIndex >= 0 && currentIndex < songs.length - 1) {
      this.selectedTrackId.set(songs[currentIndex + 1].id);
    }
  }
}
