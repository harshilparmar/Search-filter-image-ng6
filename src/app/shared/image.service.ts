import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  selectedImage : any[] = [];
  private search  = new BehaviorSubject<string>('Default')
  searchItem = this.search.asObservable();
  constructor(private http : HttpClient) { }

  changeSearch(searchItem){
    this.search.next(searchItem);
  }
  getImage(){
    return this.selectedImage = IMAGES.slice(0);
  }

  getImagebyID(id : number){
    return  IMAGES.slice(0).find((arg)=>arg.id == id);
  }

  getfromApi(){
    return this.http.get(`https://pixabay.com/api/?key=${environment.API_KEY}&image_type=photo&pretty=true`);
  }

  getImagebyfilter(query){
    return this.http.get(`https://pixabay.com/api/?key=${environment.API_KEY}&q=${query}&image_type=photo&pretty=true`);
  }
}


const IMAGES = [
  {"id":1, "category": "boats", "caption": "View from the boat", "url":"assets/img/boat_01.jpeg"},
  {"id":3, "category": "boats", "caption": "The water was nice", "url":"assets/img/boat_03.jpeg"},
  {"id":6, "category": "camping", "caption": "Camping Trip '17'", "url":"assets/img/camping_01.jpeg"},
  {"id":7, "category": "camping", "caption": "Kim and Jessie", "url":"assets/img/camping_02.jpeg"},
  {"id":13, "category": "library", "caption": "Big library", "url":"assets/img/library_01.jpeg"},
  {"id":14, "category": "library", "caption": "Stacks", "url":"assets/img/library_02.jpeg"},
];
