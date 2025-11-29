import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiButtonComponent } from './shared/components/ui-button/ui-button.component';
import { UiCardComponent } from './shared/components/ui-card/ui-card.component';
import { UiBatchComponent } from './shared/components/ui-batch/ui-batch.component';
import { UiAvatarComponent } from './shared/components/ui-avatar/ui-avatar.component';

@NgModule({
  declarations: [
    AppComponent,
    UiButtonComponent,
    UiCardComponent,
    UiBatchComponent,
    UiAvatarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
