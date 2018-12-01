import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MoreHttpRequestsComponent } from './more-http-requests/more-http-requests.component';
import { SimpleHttpComponent } from './simple-http/simple-http.component';


@NgModule({
  declarations: [
    AppComponent,
    SimpleHttpComponent,
    // SearchResultComponent,
    // SearchBoxComponent,
    // YouTubeSearchComponent,
    MoreHttpRequestsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    // YouTubeSearchInjectables
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
