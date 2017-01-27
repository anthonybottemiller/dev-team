import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { masterFirebaseConfig } from './api-keys';

import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeammateDetailComponent } from './teammate-detail/teammate-detail.component';
import { AboutComponent } from './about/about.component';
import { SpecialtyPipe } from './specialty.pipe';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    TeamListComponent,
    TeammateDetailComponent,
    AboutComponent,
    SpecialtyPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
