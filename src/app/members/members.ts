import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-members',
  templateUrl: './members.html',
})
export class Members {
  stats = [
    { value: '2002', label: 'Año de formación' },
    { value: '4', label: 'Miembros actuales' },
    { value: '7', label: 'Álbumes de estudio' },
    { value: 'Sheffield', label: 'Ciudad de origen' },
  ];

  members = [
    {
      name: 'Alex Turner',
      role: 'Voz y guitarra',
      born: '6 de enero de 1986',
      hometown: 'High Green, Sheffield',
      instruments: ['Voz', 'Guitarra', 'Piano'],
      description:
        'Cantante principal y compositor de la banda, conocido por sus letras observadoras y su evolución artística.',
      fact: 'Compuso la banda sonora de la película "Submarine" (2011).',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVeD60BAwx41as3VhIcTcoGDJnZN2in6-JFy9sFJ6D2N36-6IG4ypy5s&s=10',
    },
    {
      name: 'Matt Helders',
      role: 'Batería',
      born: '7 de mayo de 1986',
      hometown: 'Sheffield',
      instruments: ['Batería', 'Coros'],
      description:
        'Batería y coros. Su forma de tocar aporta velocidad, energía y una identidad muy reconocible al grupo.',
      fact: 'Tocó la batería en el álbum "Post Pop Depression" de Iggy Pop (2016).',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdqRMnrQTbcH66hwCxPccabJfl_dM1j8UKy0HiuqNeDoNyjpFOCgjkg8&s=10',
    },
    {
      name: 'Jamie Cook',
      role: 'Guitarra',
      born: '8 de julio de 1985',
      hometown: 'Sheffield',
      instruments: ['Guitarra', 'Teclados'],
      description:
        'Guitarrista fundador, responsable de muchos de los riffs y texturas que definen el sonido de Arctic Monkeys.',
      fact: 'Es vecino de infancia de Alex Turner en High Green.',
      image:
        'https://www.shutterstock.com/editorial/image-editorial/M9TeMa4cM9T6Yd33MjIwMjU=/jamie-cook-arctic-monkeys-performing-sidney-myer-550nw-13695633n.jpg',
    },
    {
      name: "Nick O'Malley",
      role: 'Bajo',
      born: '5 de julio de 1985',
      hometown: 'Sheffield',
      instruments: ['Bajo', 'Coros'],
      description:
        'Bajista y corista. Se incorporó a la formación habitual y ayuda a sostener el ritmo y el sonido de directo.',
      fact: 'Entró en 2006 sustituyendo a Andy Nicholson, el bajista original.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLL8IFGYvusS2dVUINFjP29QPcnxvOgU6fQpogqDvptA&s=10',
    },
  ];

  // Datos de https://en.wikipedia.org/wiki/The_Last_Shadow_Puppets
  shadowPuppets = [
    {
      name: 'Alex Turner',
      role: 'Voz y guitarra',
      born: '6 de enero de 1986',
      hometown: 'High Green, Sheffield',
      instruments: ['Voz', 'Guitarra', 'Bajo', 'Percusión', 'Teclados'],
      description:
        'Cofundador del grupo en 2007 junto a Miles Kane. Comparten la voz principal y la composición de las canciones.',
      fact: 'Conoció a Miles Kane en 2005, cuando The Little Flames, la banda de Kane, teloneó a Arctic Monkeys en su gira por el Reino Unido.',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVeD60BAwx41as3VhIcTcoGDJnZN2in6-JFy9sFJ6D2N36-6IG4ypy5s&s=10',
    },
    {
      name: 'Miles Kane',
      role: 'Voz y guitarra',
      born: '17 de marzo de 1986',
      hometown: 'Birkenhead (criado en Meols, Merseyside)',
      instruments: ['Voz', 'Guitarra', 'Bajo', 'Saxofón'],
      description:
        'Cantante de The Little Flames y líder de The Rascals hasta 2009. Desde 2011 tiene carrera en solitario, empezando por «Colour of the Trap».',
      fact: 'Toca la guitarra en «505» de Arctic Monkeys y en 2023 se subió con ellos al escenario del Emirates Stadium para tocarla en directo.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Miles_Kane_(cropped).jpg',
    },
    {
      name: 'James Ford',
      role: 'Batería y producción',
      born: '11 de diciembre de 1978',
      hometown: 'Leek, Staffordshire',
      instruments: ['Batería', 'Percusión', 'Teclados'],
      description:
        'Miembro de Simian Mobile Disco y antiguo batería de Simian. Produce y toca la batería en los dos discos del grupo.',
      fact: 'También es el productor habitual de Arctic Monkeys desde «Favourite Worst Nightmare».',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/James_Ellis_Ford,_2013.jpg',
    },
    {
      name: 'Zach Dawes',
      role: 'Bajo',
      born: '2 de julio de 1985',
      hometown: 'Los Ángeles, California',
      instruments: ['Bajo', 'Percusión', 'Guitarra', 'Teclados'],
      description:
        'Bajista de Mini Mansions. Se unió en 2015 para grabar «Everything You\'ve Come to Expect» en los estudios Shangri-La de Malibú.',
      fact: 'Ha trabajado como productor con artistas como Lana Del Rey y Brian Wilson.',
      image: 'https://commons.wikimedia.org/wiki/Special:FilePath/2016-07-01_20-38-02_eurockeenes.jpg',
    },
  ];

  shadowPuppetsLive = [
    { name: 'Alex MacNaghten', role: 'Bajo', years: '2008' },
    { name: 'Stephen Fretwell', role: 'Bajo', years: '2008' },
    { name: 'John Ashton', role: 'Teclados, guitarra, percusión y coros', years: '2008' },
    { name: 'Loren Humphrey', role: 'Batería y percusión', years: '2016' },
    { name: 'Tyler Parkford', role: 'Teclados y coros', years: '2016' },
    { name: 'Scott Gilles', role: 'Guitarra acústica', years: '2016' },
    { name: 'Davey Latter', role: 'Percusión', years: '2016' },
  ];

  shadowPuppetsAlbums = [
    { year: 2008, title: 'The Age of the Understatement' },
    { year: 2016, title: "Everything You've Come to Expect" },
  ];
}
