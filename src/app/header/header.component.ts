import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  behanceURL :string  = 'https://www.behance.net/uiharsha'
  linkedinURL : string = 'https://www.linkedin.com/in/harsha-dhananjaya-108338219/'
}
