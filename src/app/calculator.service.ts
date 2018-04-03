import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import {recipeItem} from "./recipeItem";
import  'rxjs/add/operator/map';

@Injectable()
export class CalculatorService {

  constructor(private http:Http) { }

  getRecipes(){
    return this.http.get('http://localhost:3000/api/recipes')
      .map(res=>res.json());
  }

  addRecipe(newRecipe){
    var headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/api/recipe',newRecipe,{headers:headers})
      .map(res =>res.json());
  }

  deleteRecipe(id){
    return this.http.delete('http://localhost:3000/api/recipe/'+id)
      .map(res =>res.json());
  }
}
