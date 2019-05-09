import { Component, OnInit } from '@angular/core';
import { ImageService } from '../shared/image.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image-detail',
  templateUrl: './image-detail.component.html',
  styleUrls: ['./image-detail.component.css']
})
export class ImageDetailComponent implements OnInit {
  image:any;
  constructor(private imgService : ImageService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.image = this.imgService.getImagebyID(
      +this.route.snapshot.params['id'])
  }

}
