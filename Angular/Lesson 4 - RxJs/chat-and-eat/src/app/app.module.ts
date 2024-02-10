import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './uicomponents/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { OrdersComponent } from './pages/auth-pages/orders/orders.component';
import { AuthComponent } from './pages/auth-pages/auth/auth.component';
import { ChatComponent } from './pages/auth-pages/chat/chat.component';
import { LoadingSpinnerComponent } from './uicomponents/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountComponent } from './pages/auth-pages/account/account.component';
import { AvatarComponent } from './uicomponents/avatar/avatar.component';
import { OutletComponent } from './pages/outlet/outlet.component';
import { NotificationComponent } from './uicomponents/notification/notification.component';
import { IfChatOpenDirective } from './directives/structural/ifChatOpen.directive';
import { HighlightOnClickDirective } from './directives/non-structural/highlightOnClick.directive';
import { FormValidationComponent } from './pages/custom forms/formvalidation/FormValidation.component';
import { TasksComponent } from './pages/auth-pages/tasks/tasks.component';
import { CustomFormExampleComponent } from './pages/custom forms/custom-form-example/custom-form-example.component';
import { ChooseQuantityComponent } from './pages/custom forms/choose-quantity/choose-quantity.component';

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
    HighlightOnClickDirective,
    IfChatOpenDirective,
    FormValidationComponent,
    TasksComponent,
    CustomFormExampleComponent,
    ChooseQuantityComponent,
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
