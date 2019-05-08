import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  selectedImage : any[] = [];
  constructor(private http : HttpClient) { }



  getfromApi(){
    return this.http.get(`https://pixabay.com/api/?key=${environment.API_KEY}&image_type=photo&pretty=true`);
  }

  getImagebyfilter(query){
    return this.http.get(`https://pixabay.com/api/?key=${environment.API_KEY}&q=${query}&image_type=photo&pretty=true`);
  }
}



