import { Component, OnInit, inject } from '@angular/core';
import { CardModule } from 'primeng/card'
import { ButtonModule } from 'primeng/button'
import { DialogModule } from 'primeng/dialog'
import { MeComponent } from '../../components/me';
import { My_photoComponent, SocialComponent } from '../../components';
import { CommonModule } from '@angular/common';
import { ClipboardModule, ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [CardModule,ButtonModule,DialogModule,MeComponent,My_photoComponent,CommonModule,ClipboardModule,SocialComponent]
})
export class HomeComponent implements OnInit {



  constructor() { }

  ngOnInit() {
  }



}
