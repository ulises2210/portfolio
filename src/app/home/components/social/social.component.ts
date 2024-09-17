import { Component, OnInit, inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClipboardService } from 'ngx-clipboard';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
  standalone: true,
  imports: [MessagesModule,ToastModule]
})
export class SocialComponent implements OnInit {

  #clipboardService = inject(ClipboardService);
  #messageService = inject(MessageService);


  constructor() { }

  ngOnInit() {
  }


  copyToClipboard(texto: string, option : string): void {
    this.#clipboardService.copyFromContent(texto);
    this.addSingle('Numero Copiado al portapapeles');
  }

  openEmailClient(): void {
    // Reemplaza 'tu@email.com' con tu dirección de correo electrónico
    const email = 'mailto:ritzel.hm23@gmail.com';
    window.location.href = email;
  }


  openLinked(): void {
    // Reemplaza 'tu@email.com' con tu dirección de correo electrónico
    const email = 'https://www.linkedin.com/in/ulises-ceron-mendez'
    window.location.href = email;
  }

  addSingle(detalle : string) {
    this.#messageService.add({severity:'success', summary:'Service Message', detail:detalle});
  }

}
