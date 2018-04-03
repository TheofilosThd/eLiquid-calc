import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from  '@angular/forms';
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";


import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { MyRecipesComponent } from './components/my-recipes/my-recipes.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    MyRecipesComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'\myRecipes',
        component:MyRecipesComponent
      },
      {
        path:'',
        component:CalculatorComponent
      }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
