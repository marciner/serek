import * as firebase from 'firebase';
import { Injectable } from '@angular/core';

@Injectable()
export class UploadService {

    constructor(){}

    upload(event: any, storage:string){
        const file: File = event.target.files[0];
        console.log('filename ', file.name);
        const metaData = {'contentType': file.type};
        const storageRef: firebase.storage.Reference = firebase.storage().ref(`/${storage}/${file.name}`);
        return  storageRef.put(file, metaData);
      }


}
