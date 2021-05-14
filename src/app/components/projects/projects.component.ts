import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project';
import { Global } from 'src/app/services/global';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[];
  public url: string;
  constructor(
    private _projectService: ProjectService
  ) {
    this.projects = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void{
    this._projectService.getProjects().subscribe(
      response =>{
         if(response.projects){
           this.projects = response.projects;
         }
      }, error =>{
        console.log(error);
      }
    )
  }

}
