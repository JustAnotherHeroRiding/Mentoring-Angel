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
import { FormValidationComponent } from './pages/custom forms/tutorial/formvalidation/FormValidation.component';
import { TasksComponent } from './pages/auth-pages/tasks/tasks.component';
import { CustomFormExampleComponent } from './pages/custom forms/tutorial/custom-form-example/custom-form-example.component';
import { ChooseQuantityComponent } from './pages/custom forms/tutorial/choose-quantity/choose-quantity.component';
import { AddressFormComponent } from './pages/custom forms/tutorial/address-form/address-form.component';
import { TasksCustomComponent } from './pages/custom forms/tasks-custom/tasks-custom.component';
import { TaskComponent } from './pages/custom forms/single-task/single-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { RegistrationFormComponent } from './pages/custom forms/registration-form/registration-form.component';

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
    AddressFormComponent,
    TaskComponent,
    TasksCustomComponent,
    RegistrationFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
