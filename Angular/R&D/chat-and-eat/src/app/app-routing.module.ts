import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/auth-pages/orders/orders.component';
import { AuthComponent } from './pages/auth-pages/auth/auth.component';
import { ChatComponent } from './pages/auth-pages/chat/chat.component';
import { AuthGuardImpl } from 'src/guards/auth-guard';
import { OutletComponent } from './pages/outlet/outlet.component';
import { UnsavedChangesGuard } from 'src/guards/unsaved-changes.guard';
import { FormValidationComponent } from './pages/custom forms/tutorial/formvalidation/FormValidation.component';
import { CustomFormExampleComponent } from './pages/custom forms/tutorial/custom-form-example/custom-form-example.component';
import { TasksCustomComponent } from './pages/custom forms/tasks-custom/tasks-custom.component';
import { RegistrationFormComponent } from './pages/custom forms/registration-form/registration-form.component';

const routes: Routes = [
  {
    path: '',
    component: OutletComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'profile', component: AuthComponent },
      {
        path: 'chat',
        component: ChatComponent,
        canDeactivate: [UnsavedChangesGuard],
      },
      {
        path: 'tasks',
        component: TasksCustomComponent,
        canDeactivate: [UnsavedChangesGuard],
      },
      { path: 'customform', component: CustomFormExampleComponent },
    ],
    canActivateChild: [AuthGuardImpl],
  },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: AuthComponent },
  { path: 'forms', component: FormValidationComponent },
  { path: 'registration', component: RegistrationFormComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
