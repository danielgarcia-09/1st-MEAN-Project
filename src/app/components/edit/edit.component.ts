import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { Global } from 'src/app/services/global';
import { ProjectService } from 'src/app/services/project.service';
import { UploadService } from 'src/app/services/upload.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService,UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public project: Project;
  public saved_project: any;
  public status?: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService,
    private _ActivatedRoute: ActivatedRoute
  ) {
    this.title = 'Editar Proyecto';
    this.project = new Project('', '', '', '', 2021, '', '');
    this.filesToUpload = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
    this._ActivatedRoute.params.subscribe(params => {
      this.getProject(params.id);
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

  onSubmit(form:any){
    this._projectService.updateProject(this.project).subscribe(
      response =>{
       if(response.project){

          if(this.filesToUpload.length >= 1){

            this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image').then((result: any) => {

              this.status = 'success';

              this.saved_project = result.project;
            });

          }else{
            this.status = 'success';

            this.saved_project = response.project;
          }

       }else{
         this.status = 'failed';
       }
      },error =>{
        console.log(error);
        this.status = 'failed';
      }
    )
  }
  fileChangeEvent(fileInput: any): void{
    this.filesToUpload = (fileInput.target.files as Array<File>);
  }
}
