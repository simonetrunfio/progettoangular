import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './_services/delete/delete.component';
import { GetComponent } from './_services/get/get.component';
import { HomeComponent } from './_components/home/home.component';
import { PostComponent } from './_services/post/post.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'post', component: PostComponent},
  { path: 'get', component: GetComponent},
  { path: 'delete', component: DeleteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }