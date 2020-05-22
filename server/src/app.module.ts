import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ENV } from './environments/environment';
import { CatsModule } from './cats/cats.module';
import { GraphQLModule } from '@nestjs/graphql';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(`mongodb://${ENV.db.host}:${ENV.db.port}`, {
      user: ENV.db.user,
      pass: ENV.db.pass,
      dbName: ENV.db.database,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    CatsModule,
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
