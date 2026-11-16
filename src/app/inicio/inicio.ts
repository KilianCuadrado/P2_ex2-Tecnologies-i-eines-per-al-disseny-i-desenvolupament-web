import { Component, inject } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-inicio',
  templateUrl: './inicio.html',
})
export class Inicio {
   imageUrl = 'https://wallpapercat.com/w/full/d/6/c/2251019-3360x1890-desktop-hd-arctic-monkeys-band-wallpaper-image.jpg';
   albums = [
    {
      year: '2006',
      title: "Whatever People Say I Am, That's What I'm Not",
      description: 'El debut con energia de club y guitarras rapidas.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTljHWy3g-3DnUIUvPZRcER18n3cmYjW-C_aYe7HUrAvg&s=10',
      link: 'https://open.spotify.com/album/50Zz8CkIhATKUlQMbHO3k1',
    },
    {
      year: '2007',
      title: 'Favourite Worst Nightmare',
      description: 'Un disco directo, rapido y lleno de grandes riffs.',
      image: 'https://m.media-amazon.com/images/I/61h24XnRWJL._UF350,350_QL80_.jpg',
      link: 'https://open.spotify.com/album/1XkGORuUX2QGOEIL4EbJKm',
    },
    {
      year: '2008',
      title: 'The age of the understatement',
      description:'El primer album en colaboracion con Miles Kane.',
      image:'https://upload.wikimedia.org/wikipedia/en/c/c0/The_Age_of_the_Understatement_%28Front_Cover%29.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original'
    },
    {
      year: '2009',
      title: 'Humbug',
      description: 'La etapa mas oscura y psicodelica de la banda.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcrpgYoKVsoy1CBDVExZSPjA7HueihR92hlWACV0VEA&s=10',
      link: 'https://open.spotify.com/album/5IEoiwkThhRmSMBANhpxl2',
    },
    {
      year: '2011',
      title: 'Suck It and See',
      description: 'Rock clasico y melodias luminosas en equilibrio.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOUBTZQp4isrggNlYndmC5z4MEWhV6eoI7gXwsZCsh4A&s=10',
      link: 'https://open.spotify.com/album/2ym2jcqckXqWeTDoxz3Kst',
    },
    {
      year: '2013',
      title: 'AM',
      description: 'Riffs memorables y una produccion de alcance mundial.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTADvIJ7GjXgY43taMmAyb0nV9OhbOWMUMTrKQWauaNUQ&s=10',
      link: 'https://open.spotify.com/album/78bpIziExqiI9qztvNFlQu',
    },
    {
      year: '2016',
      title: 'Everything you\'ve come to expect',
      description: 'Album en colabaracion con Miles Kane en el cual se probo otro tipo de estilo musical mas a algo bailable que afectaria a sus siguentes albums',
      image: 'https://universalmusiconline.es/cdn/shop/files/the-last-shadow-puppets-everything-youve-come-to-except-cd_7504024c-e823-4cc1-9d2c-e0f244fe0d96.png?v=1728993039',
      link: 'https://open.spotify.com/album/6q1ZuWCnYTQb7KhXHZo947',
    },
    {
      year: '2018',
      title: 'Tranquility Base Hotel & Casino',
      description: 'Un viaje conceptual de piano, sintetizadores y ciencia ficcion.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWoChW7Wzh4g6WQtfZo-jf_SlZlLx2_fEQI4qkBK2AA&s=10',
      link: 'https://open.spotify.com/album/7v6FNgLDS8KmaWA1amUtqe',
    },
    {
      year: '2022',
      title: 'The Car',
      description: 'Canciones elegantes con una atmosfera cinematografica.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBiuUkG6a1G_Vtatxtfoh_FPjDZ3R8UxD4rWN20_JByw&s=10',
      link: 'https://open.spotify.com/album/2GROf0WKoP5Er2M9RXVNNs',
    },
  ];
   members = [
    {
      name: 'Alex Turner',
      role: 'Voz y guitarra',
      description: 'Cantante principal y compositor de la banda, conocido por sus letras observadoras y su evolución artística.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBVeD60BAwx41as3VhIcTcoGDJnZN2in6-JFy9sFJ6D2N36-6IG4ypy5s&s=10',
    },
    {
      name: 'Matt Helders',
      role: 'Batería',
      description: 'Batería y coros. Su forma de tocar aporta velocidad, energía y una identidad muy reconocible al grupo.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQdqRMnrQTbcH66hwCxPccabJfl_dM1j8UKy0HiuqNeDoNyjpFOCgjkg8&s=10',
    },
    {
      name: 'Jamie Cook',
      role: 'Guitarra',
      description: 'Guitarrista fundador, responsable de muchos de los riffs y texturas que definen el sonido de Arctic Monkeys.',
      image: 'https://www.shutterstock.com/editorial/image-editorial/M9TeMa4cM9T6Yd33MjIwMjU=/jamie-cook-arctic-monkeys-performing-sidney-myer-550nw-13695633n.jpg',
    },
    {
      name: "Nick O'Malley",
      role: 'Bajo',
      description: 'Bajista y corista. Se incorporó a la formación habitual y ayuda a sostener el ritmo y el sonido de directo.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLL8IFGYvusS2dVUINFjP29QPcnxvOgU6fQpogqDvptA&s=10',
    },
  ];
  private formBuilder = inject(FormBuilder);
  
  
  submitted = false;
  successMessage = false;
  
  history = [
    { year: '2002-2005', text: 'Alex Turner, Matt Helders y Jamie Cook forman la banda en Sheffield. Sus primeros conciertos y maquetas compartidas por Internet hacen crecer rápidamente su público.' },
    { year: '2006', text: "Publican Whatever People Say I Am, That's What I'm Not. El disco se convierte en un fenómeno del rock británico gracias a sus guitarras rápidas y sus letras sobre la vida nocturna." },
    { year: '2007-2011', text: 'Favourite Worst Nightmare, Humbug y Suck It and See muestran una banda que no quiere repetir la misma fórmula. El grupo experimenta con sonidos más oscuros, psicodélicos y melódicos.' },
    { year: '2013-2014', text: 'AM lleva a Arctic Monkeys a un público todavía más internacional. Canciones como Do I Wanna Know? y R U Mine? se convierten en algunos de sus temas más conocidos.' },
    { year: '2018', text: 'Tranquility Base Hotel & Casino supone un cambio radical: predominan el piano, los sintetizadores y una estética de ciencia ficción que demuestra la libertad creativa del grupo.' },
    { year: '2022', text: 'The Car continúa la etapa más elegante y cinematográfica de la banda, con arreglos de cuerda, melodías cuidadas y una atmósfera diferente a sus primeros discos.' },
  ];
  contactForm: FormGroup = this.formBuilder.group({
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    assumpte: ['', Validators.required],
    missatge: ['', [Validators.required, Validators.minLength(10)]],
  });



  submitContact() {
    this.submitted = true;
    if (this.contactForm.invalid) {
      this.successMessage = false;
      this.contactForm.markAllAsTouched();
      return;
    }
    this.successMessage = true;
    this.contactForm.reset();
  }

  showError(controlName: 'nom' | 'email' | 'assumpte' | 'missatge') {
    const control = this.contactForm.controls[controlName];
    return control.invalid && (control.touched || this.submitted);
  }

}
