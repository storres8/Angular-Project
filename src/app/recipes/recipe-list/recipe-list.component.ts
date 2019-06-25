import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  // square brackets mean that it'll be an array of rececpies defines by our Recepie model.
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "testing...",
      "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg"
    ),
    new Recipe(
      "A Test Recipe",
      "testing..12345",
      "https://s3.amazonaws.com/finecooking.s3.tauntonclud.com/app/uploads/2019/03/04141012/lime-roasted-salmon-skillet-square-500x500.jpg"
    )
  ];

  @Output() recipeData = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit() {}

  onRecipeData(recipeData: Recipe) {
    this.recipeData.emit(recipeData);
  }
}
