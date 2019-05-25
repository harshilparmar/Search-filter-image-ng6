import { Component, OnInit , OnDestroy,OnChanges,DoCheck, AfterViewInit, AfterContentChecked} from '@angular/core';
import { ImageService } from '../shared/image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  imageArray :any;
  apiArray : any = [];
$searchItem :  any ;
  constructor(private imgService :  ImageService) { }
  filterBy ?: string = "all";


  ngOnInit() {
      this.imgService.getfromApi().subscribe((res)=>{
        this.apiArray = res['hits'];

      });


     this.imgService.searchItem.subscribe((res)=>{
       this.$searchItem  =  res;
       if(this.$searchItem !== 'Default'){
       this.imgService.getImagebyfilter(this.$searchItem).subscribe((res)=>{
            // console.log(this.$searchItem)
             this.apiArray = res['hits'];
          });
        }
      });

  }




  filterPhoto(arg){
    // console.log(arg==='all'?true:false);

      if(arg==='all'){
        this.imgService.getfromApi().subscribe((res)=>{
          this.apiArray = res['hits'];
      });
      }
    else{

      this.imgService.getImagebyfilter(arg).subscribe((res)=>{

        this.apiArray = res['hits'];

        });
    }


  }


}
