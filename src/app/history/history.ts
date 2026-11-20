import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-history',
  templateUrl: './history.html',
})
export class History {
  highlights = [
    { value: '2006', label: 'Mercury Prize con su debut' },
    { value: '3', label: 'Veces cabeza de cartel en Glastonbury' },
    { value: '6', label: 'Álbumes n.º 1 en Reino Unido (de 7)' },
    { value: '2012', label: 'Actuación en los Juegos Olímpicos de Londres' },
  ];

  eras = [
    {
      name: 'Garage rock',
      years: '2002 – 2007',
      albums: "Whatever People Say I Am, That's What I'm Not · Favourite Worst Nightmare",
      description: 'Guitarras rápidas, baterías frenéticas y letras sobre la noche de Sheffield.',
    },
    {
      name: 'Desierto y psicodelia',
      years: '2009 – 2011',
      albums: 'Humbug · Suck It and See',
      description: 'Sonidos más pesados y oscuros junto a Josh Homme, y después melodías más luminosas.',
    },
    {
      name: 'Éxito mundial',
      years: '2012 – 2014',
      albums: 'AM',
      description: 'Riffs lentos y contundentes con ritmos cercanos al hip-hop que conquistan Estados Unidos.',
    },
    {
      name: 'Etapa cinematográfica',
      years: '2018 – actualidad',
      albums: 'Tranquility Base Hotel & Casino · The Car',
      description: 'Piano, cuerdas y crooners de los 70: la banda se reinventa por completo.',
    },
  ];

  milestones = [
    {
      year: '2002',
      title: 'Nace la banda',
      text: 'Alex Turner, Jamie Cook, Matt Helders y Andy Nicholson forman Arctic Monkeys en High Green, un barrio de Sheffield.',
    },
    {
      year: '2003 – 2004',
      title: 'Las maquetas de Internet',
      text: 'Regalan CDs en sus conciertos y los fans los comparten en Internet y MySpace. La banda se hace famosa antes de tener discográfica.',
    },
    {
      year: '2005',
      title: 'Primer número 1',
      text: 'Firman con Domino Records y "I Bet You Look Good on the Dancefloor" llega directamente al número 1 en el Reino Unido.',
    },
    {
      year: '2006',
      title: 'Un debut histórico',
      text: "Whatever People Say I Am, That's What I'm Not bate récords de ventas y gana el Mercury Prize. Andy Nicholson deja el grupo y entra Nick O'Malley al bajo.",
    },
    {
      year: '2007',
      title: 'Favourite Worst Nightmare y Glastonbury',
      text: 'Publican su segundo álbum y encabezan por primera vez el festival de Glastonbury.',
    },
    {
      year: '2008',
      title: 'The Last Shadow Puppets',
      text: 'Alex Turner y Miles Kane lanzan The Age of the Understatement, que llega al número 1 británico.',
    },
    {
      year: '2009',
      title: 'Humbug',
      text: 'Graban en el desierto de California con Josh Homme, de Queens of the Stone Age, y su sonido se vuelve más oscuro.',
    },
    {
      year: '2011',
      title: 'Suck It and See',
      text: 'Un disco más melódico y luminoso, grabado en Los Ángeles.',
    },
    {
      year: '2012',
      title: 'Juegos Olímpicos de Londres',
      text: 'Tocan en la ceremonia de inauguración, versionando "Come Together" de The Beatles ante millones de espectadores.',
    },
    {
      year: '2013',
      title: 'AM',
      text: 'Su quinto álbum los convierte en una banda global. Ese mismo año vuelven a encabezar Glastonbury.',
    },
    {
      year: '2016',
      title: "Everything You've Come to Expect",
      text: 'Segundo disco de The Last Shadow Puppets, con un sonido más bailable y seductor.',
    },
    {
      year: '2018',
      title: 'Tranquility Base Hotel & Casino',
      text: 'Un giro radical hacia el piano y la ciencia ficción, compuesto por Turner en un piano Steinway.',
    },
    {
      year: '2022 – 2023',
      title: 'The Car',
      text: 'Continúan su etapa más elegante y orquestal, y en 2023 encabezan Glastonbury por tercera vez.',
    },
  ];

  // Datos de https://en.wikipedia.org/wiki/The_Last_Shadow_Puppets
  tlspMilestones = [
    {
      year: '2005',
      title: 'Se conocen Alex y Miles',
      text: 'The Little Flames, la banda de Miles Kane, telonea a Arctic Monkeys en su gira por el Reino Unido y Turner y Kane se hacen amigos.',
    },
    {
      year: '2007',
      title: 'Primeras canciones juntos',
      text: 'En la gira de abril escriben canciones para un proyecto común. Kane toca la guitarra en «505» y en las caras B «The Bakery» y «Plastic Tramp».',
    },
    {
      year: 'Agosto 2007',
      title: 'Grabación en Francia',
      text: 'Graban el disco con James Ford en la producción y la batería. En diciembre, Owen Pallett arregla las cuerdas con la London Metropolitan Orchestra (22 músicos).',
    },
    {
      year: 'Febrero 2008',
      title: 'Nace The Last Shadow Puppets',
      text: 'El 20 de febrero anuncian el nombre del grupo y el título del álbum. El 4 de marzo dan su primer concierto en Sound Fix Records (Brooklyn, Nueva York).',
    },
    {
      year: 'Abril 2008',
      title: 'Número 1 con su debut',
      text: '«The Age of the Understatement» sale el 21 de abril y entra directamente al número 1 de la lista británica.',
    },
    {
      year: 'Junio – julio 2008',
      title: 'Glastonbury y Mercury Prize',
      text: 'Concierto sorpresa en Glastonbury con Matt Helders a la batería y Jack White como invitado. El disco es nominado al Mercury Prize, que gana Elbow.',
    },
    {
      year: 'Noviembre 2008',
      title: 'Primera pausa',
      text: 'Tras una gira mundial con orquesta, dan su último concierto el 3 de noviembre en el Mayan Theater de Los Ángeles y vuelven a sus carreras.',
    },
    {
      year: '2009',
      title: 'Premio NME',
      text: 'Ganan el premio NME al mejor videoclip por «My Mistakes Were Made for You», dirigido por Richard Ayoade.',
    },
    {
      year: '2015',
      title: 'Vuelta al estudio',
      text: 'Turner, Kane, Ford y el nuevo bajista Zach Dawes graban el segundo disco en los estudios Shangri-La de Malibú (California).',
    },
    {
      year: '2016',
      title: "Everything You've Come to Expect",
      text: 'Tras el single «Bad Habits» (enero), el álbum sale el 1 de abril. Tocan en Coachella, Primavera Sound y en el escenario Pyramid de Glastonbury.',
    },
    {
      year: 'Diciembre 2016',
      title: 'The Dream Synopsis',
      text: 'Publican un EP con nuevas versiones de «Aviation» y «The Dream Synopsis» y versiones de The Fall, Jacques Dutronc, Glaxo Babies y Leonard Cohen.',
    },
    {
      year: '2017 – actualidad',
      title: 'Segunda pausa',
      text: 'El grupo sigue en pausa. En 2023 Kane se sube al escenario con Arctic Monkeys en el Emirates Stadium para tocar «505».',
    },
  ];
}
