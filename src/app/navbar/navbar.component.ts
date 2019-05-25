import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private imageService :  ImageService) { }

  ngOnInit() {
  }

  search(keyword : HTMLInputElement){
    // console.log(keyword.value);
    this.imageService.changeSearch(keyword.value);
}

}
