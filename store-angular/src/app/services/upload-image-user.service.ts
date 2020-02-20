import { Injectable } from "@angular/core";
import { AppConst } from "../constants/app-constants";

@Injectable({
  providedIn: "root"
})
export class UploadImageUserService {
  filesToUpload: Array<File>;
  constructor() {
    this.filesToUpload = [];
  }

  upload(userId: number) {
    this.makeFileRequest(
      AppConst.UserPath + "/add/image?id=" + userId,
      [],
      this.filesToUpload
    ).then(
      result => {
    
      },
      error => {
   
      }
    );
  }

  modify(userId: number) {
  
    if (this.filesToUpload.length>0) {
      this.makeFileRequest(AppConst.UserPath + "/update/image?id="+userId, [], this.filesToUpload).then((result) => {
   
    }, (error) => {
      
    });
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
      // xhr.setRequestHeader("x-auth-token", localStorage.getItem("xAuthToken"));
      xhr.send(formData);
    });
  }
}
