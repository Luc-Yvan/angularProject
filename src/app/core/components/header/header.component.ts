import { Component } from '@angular/core';
import { FormComponent } from '../../../pages/form/form.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormComponent,RouterLink,RouterLinkActive,RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 

}
