import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { UsersService } from '../services/users.service';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UploadService } from '../services/upload.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  user:{};
  objectKeys = Object.keys;
  isEditing: boolean;
  userForm : FormGroup;
  userId;
  showSpinner: boolean = false;

  constructor(private route: ActivatedRoute, 
    private usersService: UsersService, 
    private location: Location, fb: FormBuilder,
    private uploadService: UploadService) {
    this.userForm = fb.group({
      'name' : [null, Validators.required],
      'city': "",
      'street': "",
      'houseNumber': "",
      'zip': "",
      'phone': [null, Validators.compose([Validators.required, Validators.minLength(9)])]

    });
   }

  ngOnInit() {
    this.route.params.subscribe((params: Params) =>
  {
    this.userId = params['id'];
    console.log('id userka '+ this.userId)
    this.usersService.getUsersDetails(this.userId)
      .then(data => {this.user = data; console.log('szczegoly usera z userdetail ', data)});
  })
      
  }

  goBack(): void{
    this.location.back();
  }

  isEdit(){
    return this.isEditing = true;
  }
  closeModal(){
    return this.isEditing = false;
  }

  onSave(event, user){
    event.preventDefault();
    console.log('poszlo');
    user['photo'] = this.user['photo'];
    this.usersService.editUser(this.userId, user);
    console.log('wyslalo sie z danymi ', this.user)
    return this.isEditing = false;

  }

  upload(event: any){
    this.showSpinner = true;
    this.uploadService.upload(event, 'users')
      .then((data) =>{
          this.user['photo'] = data.downloadURL;
          console.log('url to preview image ', data.downloadURL)
          this.showSpinner = false;
      })
  }

}
