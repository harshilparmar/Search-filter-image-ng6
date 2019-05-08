import { Pipe, PipeTransform } from '@angular/core';
import { ImageService } from "./shared/image.service";
@Pipe({
  name: 'imagefilter'
})
export class ImagefilterPipe implements PipeTransform {
  finalres :any =[];
  constructor(private Service : ImageService){}
  transform(value: any[], args?: any): any {
      if(args === 'all'){
        console.log(args);
        this.Service.getfromApi().subscribe((res)=>{
        // console.log(res);
         return this.finalres = res;


        });
        console.log('your res',this.finalres);
      }
      else
      {
        console.log(args);
         this.Service.getImagebyfilter(args).subscribe((res)=>{
          // console.log(res)
         return this.finalres = res;
          });

          console.log('your res',this.finalres);
      //   return value.filter((item)=>{
      //  return item.category == args;
      // })
      }

    // return this.finalres;
  }

}
