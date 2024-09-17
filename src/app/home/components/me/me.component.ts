import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css'],
  standalone: true,
  imports: [CardModule]
})
export class MeComponent implements OnInit {

  desc : string = "Ingeniero de software / programador "
  university : string = "Egresado : Benemerita Universidad Autonoma de Puebla 2018 - 2023"
  experiencie : string = "Experiencia : skytex, junio 2023 - actualmente "
  skills : string = "Habilidades : HTML, CSS, JavaScript, TypeScript, Angular, Node.js, Java, SQL, Git, GitHub, Bitbucket"
  hobbies : string = "Pasatiempos : ver peliculas, jugar videojuegos, jugar futbol, beber alcohol ";
  labelsO : string = " </"
  labelsC : string = " />"
  constructor() { }

  ngOnInit() {
  }

}
