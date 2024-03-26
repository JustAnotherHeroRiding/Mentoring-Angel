import { NgModule } from '@angular/core';
import { LeftPageComponent } from './left-page/left-page.component';
import { SharedToasterModule } from '../toast-config/shared-toaster/shared-toaster.module';

const modules = [SharedToasterModule];
const components = [LeftPageComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class LeftToastModule {}
