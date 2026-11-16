import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-members',
  templateUrl: './members.html',
})
export class Members {
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
} 
