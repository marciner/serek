import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel} from '@angular/forms';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-routes-modal',
  templateUrl: './routes-modal.component.html',
  styleUrls: ['./routes-modal.component.css']
})
export class RoutesModalComponent implements OnInit {

  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() save: EventEmitter<{}> = new EventEmitter<{}>();
  selected: boolean;
  routeForm : FormGroup;
  @Input() route: {} = {};
  @Input() header: string;
  showSpinner: boolean = false;




  constructor(fb: FormBuilder, private uploadService: UploadService) {
    this.routeForm = fb.group({
      'name' : [null, Validators.required],
      'length': [null, Validators.required],
      'time':[null, Validators.required],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(10)])],
      'price': [null, Validators.required]
    });
  }

  ngOnInit() {}

  closeModal(){
    this.selected = false;
    this.onClose.emit(this.selected);
    console.log('kliknieto zmkanij '+ this.selected);

  }

  onSave(){
    this.closeModal();
    this.save.emit(this.route);
  }

  upload(event: any){
    this.showSpinner = true;
    this.uploadService.upload(event, 'routes')
      .then((data) =>{
          this.route['photo'] = data.downloadURL;
          console.log('url to preview image ', data.downloadURL)
          this.showSpinner = false;
      })
  }


}
