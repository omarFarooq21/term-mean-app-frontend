import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/login/login.component';
import { SignupComponent } from 'src/signup/signup.component';
import { NotfoundcomponentComponent } from 'src/notfoundcomponent/notfoundcomponent.component';
import { HomeComponent } from 'src/home/home.component';
import { HistoryComponent } from 'src/history/history.component';
import { ComplaintworkComponent } from 'src/complaintwork/complaintwork.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: NotfoundcomponentComponent },
  { path: "home", component: HomeComponent},
  { path: "history", component: HistoryComponent},
  { path: "complaintwork", component: ComplaintworkComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
