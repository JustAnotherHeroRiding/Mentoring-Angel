import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './uicomponents/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { AuthComponent } from './pages/auth/auth.component';
import { ChatComponent } from './pages/chat/chat.component';
import { LoadingSpinnerComponent } from './uicomponents/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './pages/account/account.component';
import { AvatarComponent } from './uicomponents/avatar/avatar.component';
import { OutletComponent } from './pages/outlet/outlet.component';
import { NotificationComponent } from './uicomponents/notification/notification.component';
import { HighlightOnOrderDirective } from './directives/non-structural/highlightOnOrder.directive';
import { IfChatOpenDirective } from './directives/structural/ifChatOpen.directive';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    OrdersComponent,
    AuthComponent,
    ChatComponent,
    LoadingSpinnerComponent,
    AccountComponent,
    AvatarComponent,
    OutletComponent,
    NotificationComponent,
    HighlightOnOrderDirective,
    IfChatOpenDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
