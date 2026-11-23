import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
@Component({
  imports: [],
  selector: 'app-album-spec',
  templateUrl: './album-spec.html',
})
export class AlbumSpec {
  albun = signal('');
  private activatedRoute = inject(ActivatedRoute);
  constructor() {
    this.activatedRoute.params.subscribe((params) => {
      this.albun.set(params['albun']);
    });
  }

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
      songs:[
        {
          id:1,
          name:"The View From The Afternoon",
          type:".wav"
        },
        {
          id:2,
          name:"I Bet You Look Good On The Dancefloor",
          type:".wav"
        },
        {
          id:3,
          name:"Fake Tales Of San Francisco",
          type:".wav"
        },
        {
          id:4,
          name:"Dancing Shoes",
          type:".wav"
        },
        {
          id:5,
          name:"You Probably Couldn't See For The Lights But You Were Staring Straight At Me",
          type:".wav"
        },
        {
          id:6,
          name:"Still Take You Home",
          type:".wav"
        },
        {
          id:7,
          name:"Riot Van",
          type:".wav"
        },
        {
          id:8,
          name:"Red Light Indicates Doors Are Secured",
          type:".wav"
        },
        {
          id:9,
          name:"Mardy Bum",
          type:".wav"
        },
        {
          id:10,
          name:"Perhaps Vampires Is A Bit Strong But",
          type:".wav"
        },
        {
          id:11,
          name:"When The Sun Goes Down",
          type:".wav"
        },
        {
          id:12,
          name:"From The Ritz To The Rubble",
          type:".wav"
        },
        {
          id:13,
          name:"A Certain Romance",
          type:".wav"
        },
      ]
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
      songs:[
        {
          id:1,
          name:"Brianstorm",
          type:".wav"
        },
        {
          id:2,
          name:"Teddy Picker",
          type:".wav"
        },
        {
          id:3,
          name:"D is for Dangerous",
          type:".wav"
        },
        {
          id:4,
          name:"Balaclava",
          type:".wav"
        },
        {
          id:5,
          name:"Fluorescent Adolescent",
          type:".wav"
        },
        {
          id:6,
          name:"Only Ones Who Know",
          type:".wav"
        },
        {
          id:7,
          name:"Do Me a Favour",
          type:".wav"
        },
        {
          id:8,
          name:"This House is a Circus",
          type:".wav"
        },
        {
          id:9,
          name:"If You Were There, Beware",
          type:".wav"
        },
        {
          id:10,
          name:"The Bad Thing",
          type:".wav"
        },
        {
          id:11,
          name:"Old Yellow Bricks",
          type:".wav"
        },
        {
          id:12,
          name:"505",
          type:".wav"
        },
      ]
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
  rutaCarpeta="/public/"+this.albun()
}
