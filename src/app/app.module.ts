import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {
	BrowserAnimationsModule,
	provideAnimations,
} from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { RecipeComponent } from './routes/recipe/recipe.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './routes/search/search.component';
import { AddRecipeComponent } from './routes/addRecipe/add-recipe.component';
import { LoginComponent } from './routes/login/login.component';
import { provideToastr } from 'ngx-toastr';
import { CategoriesComponent } from './routes/categories/categories.component';
import { AllRecipesComponent } from './routes/allRecipes/all-recipes.component';
import { SousVideComponent } from './routes/sousvide/sous-vide.component';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		FooterComponent,
		HeaderComponent,
		AppRoutingModule,
		CommonModule,
		HttpClientModule,
		HomeComponent,
		BrowserAnimationsModule,
		RouterModule.forRoot([
			{
				path: '',
				component: HomeComponent,
			},
			{
				path: 'uppskriftir/add',
				component: AddRecipeComponent,
			},
			{
				path: 'uppskriftir/allaruppskriftir',
				component: AllRecipesComponent,
			},
			{
				path: 'uppskriftir/recipe/:recipeId',
				component: RecipeComponent,
			},
			{
				path: 'uppskriftir/flokkar/:category',
				component: CategoriesComponent,
			},
			{
				path: 'search',
				component: SearchComponent,
			},
			{
				path: 'login',
				component: LoginComponent,
			},
			{
				path: 'sousvide',
				component: SousVideComponent,
			}
		]),
	],
	providers: [
		provideAnimations(), // required animations providers
		provideToastr(),
	],
	bootstrap: [AppComponent],
})
export class AppModule {}
