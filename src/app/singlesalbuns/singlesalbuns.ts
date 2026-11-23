import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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

  albums = [
    {
      year: 2006,
      released: '23 de enero de 2006',
      title: "Whatever People Say I Am, That's What I'm Not",
      band: 'Arctic Monkeys',
      producer: 'Jim Abbiss',
      ukPeak: 1,
      certification: 'BPI: 8× Platino',
      ukSales: '2.500.000',
      description: 'El debut con energía de club y guitarras rápidas sobre la vida nocturna de Sheffield.',
      singles: ['I Bet You Look Good on the Dancefloor', 'When the Sun Goes Down'],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljHWy3g-3DnUIUvPZRcER18n3cmYjW-C_aYe7HUrAvg&s=10',
      link: 'https://open.spotify.com/album/50Zz8CkIhATKUlQMbHO3k1',
    },
    {
      year: 2007,
      released: '23 de abril de 2007',
      title: 'Favourite Worst Nightmare',
      band: 'Arctic Monkeys',
      producer: 'James Ford y Mike Crossey',
      ukPeak: 1,
      certification: 'BPI: 5× Platino',
      ukSales: '1.400.000',
      description: 'Un disco directo, rápido y lleno de grandes riffs. Miles Kane toca la guitarra en «505».',
      singles: ['Brianstorm', 'Fluorescent Adolescent', 'Teddy Picker'],
      image: 'https://m.media-amazon.com/images/I/61h24XnRWJL._UF350,350_QL80_.jpg',
      link: 'https://open.spotify.com/album/1XkGORuUX2QGOEIL4EbJKm',
    },
    {
      year: 2008,
      released: '21 de abril de 2008',
      title: 'The Age of the Understatement',
      band: 'The Last Shadow Puppets',
      producer: 'James Ford',
      ukPeak: 1,
      certification: 'BPI: Platino',
      description:
        'Debut de Alex Turner y Miles Kane, grabado en Francia con arreglos de Owen Pallett y la London Metropolitan Orchestra. Nominado al Mercury Prize 2008.',
      singles: ['The Age of the Understatement', 'Standing Next to Me', 'My Mistakes Were Made for You'],
      image: 'https://upload.wikimedia.org/wikipedia/en/c/c0/The_Age_of_the_Understatement_%28Front_Cover%29.png',
      link: 'https://open.spotify.com/search/The%20Age%20of%20the%20Understatement',
    },
    {
      year: 2009,
      released: '19 de agosto de 2009',
      title: 'Humbug',
      band: 'Arctic Monkeys',
      producer: 'Josh Homme y James Ford',
      ukPeak: 1,
      certification: 'BPI: Platino',
      ukSales: '513.000',
      description: 'La etapa más oscura y psicodélica de la banda, grabada en parte en California con Josh Homme.',
      singles: ['Crying Lightning', 'Cornerstone', 'My Propeller'],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcrpgYoKVsoy1CBDVExZSPjA7HueihR92hlWACV0VEA&s=10',
      link: 'https://open.spotify.com/album/5IEoiwkThhRmSMBANhpxl2',
    },
    {
      year: 2011,
      released: '6 de junio de 2011',
      title: 'Suck It and See',
      band: 'Arctic Monkeys',
      producer: 'James Ford',
      ukPeak: 1,
      certification: 'BPI: Platino',
      ukSales: '512.000',
      description: 'Rock clásico y melodías luminosas en equilibrio.',
      singles: [
        "Don't Sit Down 'Cause I've Moved Your Chair",
        'The Hellcat Spangled Shalalala',
        'Suck It and See',
        'Black Treacle',
      ],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUBTZQp4isrggNlYndmC5z4MEWhV6eoI7gXwsZCsh4A&s=10',
      link: 'https://open.spotify.com/album/2ym2jcqckXqWeTDoxz3Kst',
    },
    {
      year: 2013,
      released: '6 de septiembre de 2013',
      title: 'AM',
      band: 'Arctic Monkeys',
      producer: 'James Ford y Ross Orton',
      ukPeak: 1,
      certification: 'BPI: 8× Platino · RIAA: 4× Platino',
      ukSales: '2.200.000',
      description: 'Riffs contundentes y ritmos cercanos al hip-hop. Su disco con más singles: seis.',
      singles: [
        'R U Mine?',
        'Do I Wanna Know?',
        "Why'd You Only Call Me When You're High?",
        'One for the Road',
        'Arabella',
        'Snap Out of It',
      ],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADvIJ7GjXgY43taMmAyb0nV9OhbOWMUMTrKQWauaNUQ&s=10',
      link: 'https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu',
    },
    {
      year: 2016,
      released: '1 de abril de 2016',
      title: "Everything You've Come to Expect",
      band: 'The Last Shadow Puppets',
      producer: 'James Ford',
      ukPeak: 1,
      certification: 'BPI: Oro',
      description:
        'El reencuentro de Turner y Kane, grabado en los estudios Shangri-La de Malibú con Zach Dawes como nuevo bajista.',
      singles: ['Bad Habits', "Everything You've Come to Expect", 'Aviation', 'Miracle Aligner'],
      image:
        'https://universalmusiconline.es/cdn/shop/files/the-last-shadow-puppets-everything-youve-come-to-except-cd_7504024c-e823-4cc1-9d2c-e0f244fe0d96.png?v=1728993039',
      link: 'https://open.spotify.com/album/6q1ZuWCnYTQb7KhXHZo947',
    },
    {
      year: 2018,
      released: '11 de mayo de 2018',
      title: 'Tranquility Base Hotel & Casino',
      band: 'Arctic Monkeys',
      producer: 'James Ford y Alex Turner',
      ukPeak: 1,
      certification: 'BPI: Oro',
      ukSales: '287.000',
      description: 'Un viaje conceptual de piano, sintetizadores y ciencia ficción ambientado en un hotel en la Luna.',
      singles: ['Four Out of Five', 'Tranquility Base Hotel & Casino'],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWoChW7Wzh4g6WQtfZo-jf_SlZlLx2_fEQI4qkBK2AA&s=10',
      link: 'https://open.spotify.com/album/7v6FNgLDS8KmaWA1amUtqe',
    },
    {
      year: 2022,
      released: '21 de octubre de 2022',
      title: 'The Car',
      band: 'Arctic Monkeys',
      producer: 'James Ford',
      ukPeak: 2,
      certification: 'BPI: Oro',
      ukSales: '231.000',
      description: 'Canciones elegantes con arreglos de cuerda y una atmósfera cinematográfica.',
      singles: ["There'd Better Be a Mirrorball", 'Body Paint', "I Ain't Quite Where I Think I Am"],
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiuUkG6a1G_Vtatxtfoh_FPjDZ3R8UxD4rWN20_JByw&s=10',
      link: 'https://open.spotify.com/album/2GROf0WKoP5Er2M9RXVNNs',
    },
  ];

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
