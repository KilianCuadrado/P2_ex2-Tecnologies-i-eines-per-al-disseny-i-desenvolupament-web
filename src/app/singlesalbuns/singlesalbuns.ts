import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ALBUMS_DATA } from '../data/albums.data';

// Datos extraídos de Wikipedia (Arctic Monkeys discography y The Last Shadow Puppets).
// ukPeak = puesto máximo en la lista oficial del Reino Unido.

@Component({
  imports: [RouterLink],
  selector: 'app-singlesalbuns',
  templateUrl: './singlesalbuns.html',
})
export class Singlesalbuns {
  filters = ['Todos', 'Arctic Monkeys', 'The Last Shadow Puppets'];
  activeFilter = 'Todos';

  albums = ALBUMS_DATA;

  singles = [
    { year: 2005, title: 'I Bet You Look Good on the Dancefloor', album: "Whatever People Say I Am, That's What I'm Not", band: 'Arctic Monkeys', ukPeak: '1', certification: 'BPI: 5× Platino' },
    { year: 2006, title: 'When the Sun Goes Down', album: "Whatever People Say I Am, That's What I'm Not", band: 'Arctic Monkeys', ukPeak: '1', certification: 'BPI: 4× Platino' },
    { year: 2006, title: 'Leave Before the Lights Come On', album: 'Single fuera de álbum', band: 'Arctic Monkeys', ukPeak: '4', certification: 'BPI: Plata', nonAlbum: true },
    { year: 2007, title: 'Brianstorm', album: 'Favourite Worst Nightmare', band: 'Arctic Monkeys', ukPeak: '2', certification: 'BPI: Platino' },
    { year: 2007, title: 'Matador / Da Frame 2R', album: 'Single fuera de álbum', band: 'Arctic Monkeys', ukPeak: '—', nonAlbum: true },
    { year: 2007, title: 'Fluorescent Adolescent', album: 'Favourite Worst Nightmare', band: 'Arctic Monkeys', ukPeak: '5', certification: 'BPI: 5× Platino' },
    { year: 2007, title: 'Teddy Picker', album: 'Favourite Worst Nightmare', band: 'Arctic Monkeys', ukPeak: '20', certification: 'BPI: Platino' },
    { year: 2008, title: 'The Age of the Understatement', album: 'The Age of the Understatement', band: 'The Last Shadow Puppets', ukPeak: '9' },
    { year: 2008, title: 'Standing Next to Me', album: 'The Age of the Understatement', band: 'The Last Shadow Puppets', ukPeak: '30' },
    { year: 2008, title: 'My Mistakes Were Made for You', album: 'The Age of the Understatement', band: 'The Last Shadow Puppets', ukPeak: '81' },
    { year: 2009, title: 'Crying Lightning', album: 'Humbug', band: 'Arctic Monkeys', ukPeak: '12', certification: 'BPI: Platino' },
    { year: 2009, title: 'Cornerstone', album: 'Humbug', band: 'Arctic Monkeys', ukPeak: '94', certification: 'BPI: Oro' },
    { year: 2010, title: 'My Propeller', album: 'Humbug', band: 'Arctic Monkeys', ukPeak: '90', certification: 'BPI: Plata' },
    { year: 2011, title: "Don't Sit Down 'Cause I've Moved Your Chair", album: 'Suck It and See', band: 'Arctic Monkeys', ukPeak: '28', certification: 'BPI: Oro' },
    { year: 2011, title: 'The Hellcat Spangled Shalalala', album: 'Suck It and See', band: 'Arctic Monkeys', ukPeak: '167' },
    { year: 2011, title: 'Suck It and See', album: 'Suck It and See', band: 'Arctic Monkeys', ukPeak: '149', certification: 'BPI: Plata' },
    { year: 2012, title: 'Black Treacle', album: 'Suck It and See', band: 'Arctic Monkeys', ukPeak: '173', certification: 'BPI: Plata' },
    { year: 2012, title: 'R U Mine?', album: 'AM', band: 'Arctic Monkeys', ukPeak: '23', certification: 'BPI: 4× Platino' },
    { year: 2013, title: 'Do I Wanna Know?', album: 'AM', band: 'Arctic Monkeys', ukPeak: '11', certification: 'BPI: 7× Platino' },
    { year: 2013, title: "Why'd You Only Call Me When You're High?", album: 'AM', band: 'Arctic Monkeys', ukPeak: '8', certification: 'BPI: 4× Platino' },
    { year: 2013, title: 'One for the Road', album: 'AM', band: 'Arctic Monkeys', ukPeak: '112', certification: 'BPI: Platino' },
    { year: 2014, title: 'Arabella', album: 'AM', band: 'Arctic Monkeys', ukPeak: '70', certification: 'BPI: 2× Platino' },
    { year: 2014, title: 'Snap Out of It', album: 'AM', band: 'Arctic Monkeys', ukPeak: '82', certification: 'BPI: 2× Platino' },
    { year: 2016, title: 'Bad Habits', album: "Everything You've Come to Expect", band: 'The Last Shadow Puppets', ukPeak: '—' },
    { year: 2016, title: "Everything You've Come to Expect", album: "Everything You've Come to Expect", band: 'The Last Shadow Puppets', ukPeak: '—' },
    { year: 2016, title: 'Aviation', album: "Everything You've Come to Expect", band: 'The Last Shadow Puppets', ukPeak: '150' },
    { year: 2016, title: 'Miracle Aligner', album: "Everything You've Come to Expect", band: 'The Last Shadow Puppets', ukPeak: '180' },
    { year: 2016, title: 'Is This What You Wanted', album: 'The Dream Synopsis (EP)', band: 'The Last Shadow Puppets', ukPeak: '—', nonAlbum: true },
    { year: 2016, title: 'Les Cactus', album: 'The Dream Synopsis (EP)', band: 'The Last Shadow Puppets', ukPeak: '—', nonAlbum: true },
    { year: 2018, title: 'Four Out of Five', album: 'Tranquility Base Hotel & Casino', band: 'Arctic Monkeys', ukPeak: '18', certification: 'BPI: Oro' },
    { year: 2018, title: 'Tranquility Base Hotel & Casino', album: 'Tranquility Base Hotel & Casino', band: 'Arctic Monkeys', ukPeak: '—', certification: 'BPI: Plata' },
    { year: 2022, title: "There'd Better Be a Mirrorball", album: 'The Car', band: 'Arctic Monkeys', ukPeak: '25', certification: 'BPI: Plata' },
    { year: 2022, title: 'Body Paint', album: 'The Car', band: 'Arctic Monkeys', ukPeak: '22', certification: 'BPI: Plata' },
    { year: 2022, title: "I Ain't Quite Where I Think I Am", album: 'The Car', band: 'Arctic Monkeys', ukPeak: '23' },
    { year: 2026, title: 'Opening Night', album: 'Help(2) (recopilatorio)', band: 'Arctic Monkeys', ukPeak: '16', nonAlbum: true },
  ];

  promoSingles = [
    { year: 2005, title: 'Bigger Boys and Stolen Sweethearts', album: 'Cara B de «I Bet You Look Good on the Dancefloor»' },
    { year: 2006, title: 'The View from the Afternoon', album: "Whatever People Say I Am, That's What I'm Not" },
    { year: 2006, title: 'Fake Tales of San Francisco', album: "Whatever People Say I Am, That's What I'm Not" },
    { year: 2007, title: 'This House Is a Circus', album: 'Favourite Worst Nightmare' },
    { year: 2020, title: '505 (Live)', album: 'Live at the Royal Albert Hall' },
    { year: 2020, title: 'Arabella (Live)', album: 'Live at the Royal Albert Hall' },
  ];

  otherReleases = [
    { title: 'Beneath the Boardwalk', type: 'Maqueta', band: 'Arctic Monkeys', released: '2004', label: 'Autoeditado' },
    { title: 'Five Minutes with Arctic Monkeys', type: 'EP', band: 'Arctic Monkeys', released: '30 de mayo de 2005', label: 'Bang Bang Recordings' },
    { title: 'Who the Fuck Are Arctic Monkeys?', type: 'EP', band: 'Arctic Monkeys', released: '24 de abril de 2006', label: 'Domino' },
    { title: 'Standing Next to Me', type: 'EP', band: 'The Last Shadow Puppets', released: '7 de julio de 2008 (EE. UU.)', label: 'Domino' },
    { title: 'My Mistakes Were Made for You', type: 'EP', band: 'The Last Shadow Puppets', released: '20 de octubre de 2008 (EE. UU.)', label: 'Domino' },
    { title: 'At the Apollo', type: 'Directo', band: 'Arctic Monkeys', released: '3 de noviembre de 2008', label: 'Domino (DVD)', certification: 'BPI: Oro' },
    { title: 'The Dream Synopsis', type: 'EP', band: 'The Last Shadow Puppets', released: '2 de diciembre de 2016', label: 'Domino' },
    { title: 'Live at the Royal Albert Hall', type: 'Directo', band: 'Arctic Monkeys', released: '4 de diciembre de 2020', label: 'Domino', certification: 'BPI: Plata' },
  ];

  // Ordenadas por discos certificados (BPI en Reino Unido y RIAA en EE. UU.).
  topSongs = [
    { title: 'Do I Wanna Know?', album: 'AM', year: 2013, wasSingle: true, bpiLabel: '7× Platino', riaaLabel: '9× Platino' },
    { title: 'I Wanna Be Yours', album: 'AM', year: 2013, wasSingle: false, bpiLabel: '3× Platino', riaaLabel: '6× Platino' },
    { title: "Why'd You Only Call Me When You're High?", album: 'AM', year: 2013, wasSingle: true, bpiLabel: '4× Platino', riaaLabel: '5× Platino' },
    { title: 'R U Mine?', album: 'AM', year: 2012, wasSingle: true, bpiLabel: '4× Platino', riaaLabel: '3× Platino' },
    { title: 'I Bet You Look Good on the Dancefloor', album: "Whatever People Say I Am, That's What I'm Not", year: 2005, wasSingle: true, bpiLabel: '5× Platino', riaaLabel: 'Platino' },
    { title: 'Fluorescent Adolescent', album: 'Favourite Worst Nightmare', year: 2007, wasSingle: true, bpiLabel: '5× Platino', riaaLabel: '—' },
    { title: 'Mardy Bum', album: "Whatever People Say I Am, That's What I'm Not", year: 2006, wasSingle: false, bpiLabel: '4× Platino', riaaLabel: 'Oro' },
    { title: 'When the Sun Goes Down', album: "Whatever People Say I Am, That's What I'm Not", year: 2006, wasSingle: true, bpiLabel: '4× Platino', riaaLabel: 'Oro' },
    { title: '505', album: 'Favourite Worst Nightmare', year: 2007, wasSingle: false, bpiLabel: '4× Platino', riaaLabel: '—' },
    { title: 'Arabella', album: 'AM', year: 2013, wasSingle: true, bpiLabel: '2× Platino', riaaLabel: 'Platino' },
    { title: 'Snap Out of It', album: 'AM', year: 2013, wasSingle: true, bpiLabel: '2× Platino', riaaLabel: 'Platino' },
    { title: 'Knee Socks', album: 'AM', year: 2013, wasSingle: false, bpiLabel: 'Platino', riaaLabel: 'Platino' },
  ];

  // Listas que se muestran según el filtro elegido
  filteredAlbums = this.albums;
  filteredSingles = this.singles;
  filteredOther = this.otherReleases;
  nonAlbumSingles = this.singles.filter((single) => single.nonAlbum);

  setFilter(filter: string) {
    this.activeFilter = filter;
    if (filter === 'Todos') {
      this.filteredAlbums = this.albums;
      this.filteredSingles = this.singles;
      this.filteredOther = this.otherReleases;
    } else {
      this.filteredAlbums = this.albums.filter((album) => album.band === filter);
      this.filteredSingles = this.singles.filter((single) => single.band === filter);
      this.filteredOther = this.otherReleases.filter((item) => item.band === filter);
    }
  }

  spotifySearch(title: string, band = 'Arctic Monkeys') {
    return 'https://open.spotify.com/search/' + encodeURIComponent(title + ' ' + band);
  }
}
