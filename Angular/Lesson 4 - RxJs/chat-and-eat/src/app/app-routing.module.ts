import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AuthGuardImpl } from 'src/guards/auth-guard';
import { OutletComponent } from './pages/outlet/outlet.component';
import { UnsavedChangesGuard } from 'src/guards/unsaved-changes.guard';
import { FormValidationComponent } from './pages/formvalidation/FormValidation.component';
import { TasksComponent } from './pages/tasks/tasks.component';

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
