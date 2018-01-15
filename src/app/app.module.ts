import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppMaterialModule } from './app-material.module';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { HouseComponent } from './house/house.component';

import { HouseService } from './house.service';
import { CardService } from './card.service';
import { RepositoryService } from './repository.service';

@NgModule({
	declarations: [
		AppComponent,
		GeneratorComponent,
		HouseComponent
	],
	imports: [
		BrowserModule,
		FlexLayoutModule,
		AppMaterialModule,
		FormsModule,
		BrowserAnimationsModule,
		HttpClientModule
	],
	providers: [
		HouseService,
		CardService,
		RepositoryService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
