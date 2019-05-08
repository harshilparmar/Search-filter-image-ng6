import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';

const routes: Routes = [{
  path:'gallery' ,component : GalleryComponent
},
{
  path:'image/:id' ,component : ImageDetailComponent
},
{
  path:'' , redirectTo : '/gallery' , pathMatch :'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
