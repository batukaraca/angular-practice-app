import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?resize=960,872?quality=90&webp=true&resize=300,272'
    ),
    new Recipe(
      'Another A Test Recipe',
      'This is simply a test',
      'https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?resize=960,872?quality=90&webp=true&resize=300,272'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
