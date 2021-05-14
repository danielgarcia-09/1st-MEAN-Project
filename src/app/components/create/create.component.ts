import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global} from '../../services/global';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateComponent implements OnInit {
  public title: string;
  public project: Project;
  public saved_project: any;
  public status?: string;
  public filesToUpload: Array<File>;
  public url: string;

  constructor(
    private _projectService: ProjectService,
    private _uploadService: UploadService
  ) {
    this.title = 'Crear Proyecto';
    this.project = new Project('', '', '', '', 2021, '', '');
    this.filesToUpload = [];
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

  onSubmit( form: any ): void{
    console.log(this.project);
    // Guardar datos
    this._projectService.saveProject(this.project).subscribe(
      response => {
          // Subir la imagen
          // tslint:disable-next-line: max-line-length
          this._uploadService.makeFileRequest(Global.url + 'upload-image/' + response.project._id, [], this.filesToUpload, 'image').then((result: any) => {
            this.status = 'success';
            this.saved_project = result.project;
            form.reset();
          });

      }, error => {
        console.log(error);
        this.status = 'failed';
      }
    );
  }

  fileChangeEvent(fileInput: any): void{
    this.filesToUpload = (fileInput.target.files as Array<File>);
  }
}
