import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
@ObjectType()
export class Recipe extends Document {
  @Field(type => ID)
  id: string;

  @Prop()
  @Field()
  title: string;

  @Prop()
  @Field({ nullable: true })
  description?: string;

  @Prop()
  @Field()
  creationDate: Date;

  @Prop()
  @Field(type => [String])
  ingredients: string[];
}

export const RecipeSchema = SchemaFactory.createForClass(Recipe);
