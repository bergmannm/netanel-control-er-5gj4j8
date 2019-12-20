import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ControlErrorsDirective } from './control-errors.directive';
import { ControlErrorComponent } from './control-error/control-error.component';
import { ControlErrorContainerDirective } from './control-error-container.directive';
import { FormSubmitDirective } from './form-submit.directive';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, HelloComponent, ControlErrorsDirective, ControlErrorComponent, ControlErrorContainerDirective, FormSubmitDirective],
  entryComponents: [ControlErrorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
