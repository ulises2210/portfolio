import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  standalone: true,
  imports: [CardModule]
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
