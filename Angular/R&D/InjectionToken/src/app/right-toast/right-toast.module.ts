import { NgModule } from '@angular/core';
import { RightPageComponent } from './right-page/right-page.component';
import { SharedToasterModule } from '../toast-config/shared-toaster/shared-toaster.module';

const modules = [SharedToasterModule];
const components = [RightPageComponent];

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...components],
})
export class RightToastModule {}
