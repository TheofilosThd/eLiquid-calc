import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "../../calculator.service";
import {recipeItem} from "../../recipeItem";

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.component.html',
  styleUrls: ['./my-recipes.component.css'],
  providers:[CalculatorService]
})
export class MyRecipesComponent implements OnInit {

  recipes : recipeItem[];

  constructor(private calculatorService:CalculatorService) { }

  ngOnInit() {

    this.calculatorService.getRecipes()
      .subscribe(recipes =>
        this.recipes=recipes);
  }


  deleteRecipe(id:any){
    var recipes = this.recipes;
    this.calculatorService.deleteRecipe(id)
      .subscribe(data=>{
        if(data.n==1){
          for(var i=0;i<recipes.length;i++){
            if(recipes[i]._id==id){
              recipes.splice(i,1);
            }
          }
        }
      });
  }

}

