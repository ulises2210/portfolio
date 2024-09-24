import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-my_photo',
  templateUrl: './my_photo.component.html',
  styleUrls: ['./my_photo.component.css'],
  standalone: true,
  imports: []
})
export class My_photoComponent implements OnInit {

  items: MenuItem[]= [];

  constructor() { }

  ngOnInit() {
  }

}
