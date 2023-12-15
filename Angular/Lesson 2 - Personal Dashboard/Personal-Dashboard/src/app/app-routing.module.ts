import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WidgetComponent } from './components/widgets/widget/widget.component';
import { StoreComponent } from './pages/store/store.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'widget/:widgetName',
        component: WidgetComponent,
      },
    ],
  },
  {path: "store", component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
