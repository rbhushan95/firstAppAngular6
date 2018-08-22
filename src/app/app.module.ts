import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './appRouting';
import { AuthHttp } from './common/servicies/authHttp';
import { GlobalExceptionHandler } from './common/servicies/globalExceptionHandler';
import { ErrorHandler } from '@angular/core';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, HttpModule],
  providers: [
    AuthHttp,
    {
      provide: ErrorHandler,
      useClass: GlobalExceptionHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
