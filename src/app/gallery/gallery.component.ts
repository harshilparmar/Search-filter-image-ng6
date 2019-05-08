import { Component, OnInit , OnDestroy} from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imageArray :any;
  apiArray : any = [];
  constructor(private imgService :  ImageService) { }
  filterBy ?: string = "all";
  ngOnInit() {
    // this.imageArray =  this.imgService.getImage();
    // console.log(this.imageArray);
    this.imgService.getfromApi().subscribe((res)=>{
      this.apiArray = res['hits'];

    });


  }
  filterPhoto(arg){
    // console.log(arg==='all'?true:false);

      if(arg==='all'){
        this.imgService.getfromApi().subscribe((res)=>{
          this.apiArray = res['hits'];

      });
        return this.apiArray;

        }
    else{

      this.imgService.getImagebyfilter(arg).subscribe((res)=>{

        this.apiArray = res['hits'];

        });
    }
  //   this.imgService.getfromApi().subscribe((res)=>{
  //     this.apiArray.push(res);
  //   console.log(res);
  // });

  }


}
