import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ChatComponent } from './pages/chat/chat.component';
import { AuthGuardImpl } from 'src/guards/auth-guard';
import { AppComponent } from './app.component';
import { OutletComponent } from './pages/outlet/outlet.component';

const routes: Routes = [
  {
    path: '',
    component: OutletComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'orders', component: OrdersComponent },
      { path: 'profile', component: AuthComponent },
      { path: 'chat', component: ChatComponent },
    ],
    canActivateChild: [AuthGuardImpl],
  },
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: AuthComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
