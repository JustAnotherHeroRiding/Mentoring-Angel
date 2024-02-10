import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/auth-pages/orders/orders.component';
import { AuthComponent } from './pages/auth-pages/auth/auth.component';
import { ChatComponent } from './pages/auth-pages/chat/chat.component';
import { AuthGuardImpl } from 'src/guards/auth-guard';
import { OutletComponent } from './pages/outlet/outlet.component';
import { UnsavedChangesGuard } from 'src/guards/unsaved-changes.guard';
import { FormValidationComponent } from './pages/custom forms/formvalidation/FormValidation.component';
import { TasksComponent } from './pages/auth-pages/tasks/tasks.component';
import { CustomFormExampleComponent } from './pages/custom forms/custom-form-example/custom-form-example.component';

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
        component: TasksComponent,
        canDeactivate: [UnsavedChangesGuard],
      },
      { path: 'customform', component: CustomFormExampleComponent },
    ],
    canActivateChild: [AuthGuardImpl],
  },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: AuthComponent },
  { path: 'forms', component: FormValidationComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
