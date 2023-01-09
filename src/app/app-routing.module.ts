import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DeleteComponent } from './components/servizi/delete/delete.component';
import { GetComponent } from './components/servizi/get/get.component';
import { PostComponent } from './components/servizi/post/post.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: "full" },
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