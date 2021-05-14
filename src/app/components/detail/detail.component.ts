import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from '../../services/project.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {

  public url: string;
  public project: Project;
  public confirm: boolean;
  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.url = Global.url;
    this.project = new Project('','','','',0,'','');
    this.confirm = false;
  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params =>{
      let id = params.id;

      this.getProject(id);
    })
  }

  getProject(id: string): void{
    this._projectService.getProject(id).subscribe(
      response =>{
        this.project = response.project;
      }, error =>{
        console.log(error);
      }
    )
  }

  deleteProject(id: string): void{
    this._projectService.deleteProject(id).subscribe(
      response =>{
        if(response.project){
          this._router.navigate(['/proyectos']);
        }
      }, error =>{
        console.error(error);
      }
    )
  }

}
