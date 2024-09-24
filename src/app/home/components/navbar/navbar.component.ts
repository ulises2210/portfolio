import { Component, OnInit, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SpeedDialModule } from 'primeng/speeddial';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  standalone: true,
  imports: [SpeedDialModule]
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [];

  #router = inject(Router);

  constructor() { }

  ngOnInit() {

    this.items = [
      {
        // sobre mi , about me
        icon: 'pi pi-user',
        command: () => {
          this.#router.navigate(['/about-me'])
          // this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        // portafolio
        icon: 'pi pi-briefcase',
        command: () => {
          // this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      },
      {
        // experiencia
        icon: 'pi pi-building',
        command: () => {
          // this.messageService.add({ severity: 'error', summary: 'Delete', detail: 'Data Deleted' });
        }
      },
      {
        // casa / inicio
        icon: 'pi pi-home',
        command: () => {
          // this.messageService.add({ severity: 'info', summary: 'Add', detail: 'Data Added' });
        }
      },
      {
        icon: 'pi pi-send',
        command: () => {
          // this.messageService.add({ severity: 'success', summary: 'Update', detail: 'Data Updated' });
        }
      }

    ];

  }

}
