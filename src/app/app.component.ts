import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from "./hero/hero.component";
import { BgartComponent } from "./bgart/bgart.component";
import { Section01Component } from "./section01/section01.component";
import { Project01Component } from "./project01/project01.component";
import { Project02Component } from './project02/project02.component';
import { Project03Component } from './project03/project03.component';
import { Section04Component } from './section04/section04.component';
import { LetstalkComponent } from "./letstalk/letstalk.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeroComponent, BgartComponent, Section01Component, Project01Component, Project02Component, Project03Component, Section04Component, LetstalkComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent {
  title = 'uxharsha-portfolio'
  
}
