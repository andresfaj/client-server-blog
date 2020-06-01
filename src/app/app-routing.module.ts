import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { MyProductsComponent } from './components/my-products/my-products.component';
import { BlogComponent } from './components/blog/blog.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobremi', component: AboutMeComponent},
  {path: 'contacto', component: ContactMeComponent},
  {path: 'productos', component: MyProductsComponent},
  {path: 'mamablogger', component: BlogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
