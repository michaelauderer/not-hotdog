import { BrowserModule } from '@angular/platform-browser'
import { ErrorHandler, NgModule } from '@angular/core'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { Camera } from '@ionic-native/camera'
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { AngularFireStorageModule } from 'angularfire2/storage'


import { MyApp } from './app.component'
import { HomePage } from '../pages/home/home'
import { VisionPage } from '../pages/vision/vision'

const firebaseConfig = {
  apiKey: "AIzaSyBUKq9PTu9z4wXvQ5skHPBgtLDBKlyIXMw",
  authDomain: "vision-app-4bc24.firebaseapp.com",
  databaseURL: "https://vision-app-4bc24.firebaseio.com",
  projectId: "vision-app-4bc24",
  storageBucket: "vision-app-4bc24",
  messagingSenderId: "381888528435"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    VisionPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    VisionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
