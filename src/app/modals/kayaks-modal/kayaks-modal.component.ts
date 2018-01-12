import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, NgModel} from '@angular/forms';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-kayaks-modal',
  templateUrl: './kayaks-modal.component.html',
  styleUrls: ['./kayaks-modal.component.css']
})
export class KayaksModalComponent implements OnInit {
  @Output() onClose: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() save: EventEmitter<{}> = new EventEmitter<{}>();
  selected: boolean;
  kayakForm : FormGroup;
  @Input() kayak: {} = {};
  @Input() header: string;
  showSpinner: boolean = false;




  constructor(fb: FormBuilder, private uploadService: UploadService) {
    this.kayakForm = fb.group({
      'name' : [null, Validators.required],
      'capacity': [null, Validators.required],
      'amount':[null, Validators.required],
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
    this.save.emit(this.kayak);
    console.log(' dane tworzonego kajaka ', this.kayak)
  
  }

  upload(event: any){
    // const file: File = event.target.files[0];
    // console.log('filename ', file.name);

    // const metaData = {'contentType': file.type};
    // const storageRef: firebase.storage.Reference = firebase.storage().ref('/kayaks/'+file.name);
    // this.showSpinner = true;
    // storageRef.put(file, metaData)
    // .then( (data) =>{
    //   this.kayak['photo'] = data.downloadURL;
    //   console.log('data z image ', data.downloadURL)
    //   this.showSpinner = false;
    // })
    this.showSpinner = true;
    this.uploadService.upload(event, 'kayaks')
      .then((data) =>{
          this.kayak['photo'] = data.downloadURL;
          console.log('url to preview image ', data.downloadURL)
          this.showSpinner = false;
      })
  }



}
