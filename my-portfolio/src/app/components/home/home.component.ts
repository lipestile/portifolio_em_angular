import { Component, inject } from '@angular/core';
import { ProjectsComponent } from '../projects/projects.component';
import { AboutMeComponent } from '../about-me/about-me.component';
import { HttpService } from '../../http.service';

@Component({
  selector: 'app-home',
  imports: [AboutMeComponent, ProjectsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  httpService= inject(HttpService);

  info : any;

  ngOnInit(){
    this.httpService.getAboutInfo().subscribe(result=>{
      this.info = result;
      console.log(this.info);
    });
  }
}
