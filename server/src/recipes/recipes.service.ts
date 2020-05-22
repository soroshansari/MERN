import { Injectable } from '@nestjs/common';
import { NewRecipeInput } from './dto/new-recipe.input';
import { RecipesArgs } from './dto/recipes.args';
import { Recipe } from './models/recipe.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class RecipesService {
  constructor(
    @InjectModel(Recipe.name) private readonly recipeModel: Model<Recipe>,
  ) {}

  async create(data: NewRecipeInput): Promise<Recipe> {
    const recipeModel = new this.recipeModel(data);
    return this.setId(await recipeModel.save());
  }

  async findOneById(id: string): Promise<Recipe> {
    return this.setId(await this.recipeModel.findById(id).exec());
  }

  async findAll(recipesArgs: RecipesArgs): Promise<Recipe[]> {
    return (
      await this.recipeModel
        .find()
        .skip(recipesArgs.skip)
        .limit(recipesArgs.take)
        .exec()
    ).map(item => this.setId(item));
  }

  async remove(id: string): Promise<boolean> {
    try {
      await this.recipeModel.remove({ _id: id });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
  private setId(recipe: Recipe): Recipe {
    if (recipe) {
      recipe.id = recipe._id;
    }
    return recipe;
  }
}
