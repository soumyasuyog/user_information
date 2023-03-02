import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { UserinformationComponent } from './userinformation/userinformation.component';

const routes: Routes = [
  { path: "", component: UserinformationComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "contact", component: ContactComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
