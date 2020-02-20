import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainModule } from './main/main.module';
import { SharedModule } from './shared/shared.module';
import { RecipeModule } from './recipe/recipe.module';

import { UserModule } from './user/user.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

//Firebase libs
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from "@angular/fire/storage";


import { environment } from '../environments/environment';
import { UserService } from './user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    SharedModule,
    RecipeModule,
    HttpClientModule,
    UserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFirestoreModule, 
    AngularFireAuthModule, 
    AngularFireStorageModule 
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
