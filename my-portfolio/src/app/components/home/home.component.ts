import { Component } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutMeComponent } from '../about-me/about-me.component';

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
