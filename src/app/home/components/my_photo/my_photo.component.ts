import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-my_photo',
  templateUrl: './my_photo.component.html',
  styleUrls: ['./my_photo.component.css'],
  standalone: true,
  imports: []
})
export class My_photoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
