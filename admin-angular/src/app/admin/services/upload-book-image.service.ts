import { Injectable } from "@angular/core";
import { User } from "../models/user";
import { AppConst } from "../constants/app-constants";

@Injectable({
  providedIn: "root"
})
export class UploadBookImageService {
  currentUser: User;
  filesToUpload: Array<File>;
  constructor() {
    this.filesToUpload = [];
    this.currentUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  upload(bookId: number) {
    this.makeFileRequest(
      AppConst.AdminPath + "/books/add/image?id=" + bookId,
      [],
      this.filesToUpload
    ).then(
      result => {
    
      },
      error => {
        
      }
    );
  }

  modify(catesId: number) {
    
    if (this.filesToUpload.length > 0) {
      this.makeFileRequest(
        AppConst.AdminPath + "/books/update/image?id=" + catesId,
        [],
        this.filesToUpload
      ).then(
        result => {
         
        },
        error => {
         
        }
      );
    }
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    return new Promise((resolve, reject) => {
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();
      for (var i = 0; i < files.length; i++) {
        formData.append("uploads[]", files[i], files[i].name);
      }
      xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            
          } else {
            reject(xhr.response);
          }
        }
      };

      xhr.open("POST", url, true);
      // xhr.setRequestHeader("Authorization", "Bearer " + this.currentUser.token);
      xhr.send(formData);
    });
  }
}
