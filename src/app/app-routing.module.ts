import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {path:'',component:HomeComponent },
  {path:'about',component:AboutComponent},
  {path:'ourService',component:OurServicesComponent},
  {path:'training',component:TrainingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
