import { NgModule } from '@angular/core';
import {
	MAT_DATE_FORMATS,
	MatToolbarModule,
	MatCardModule,
	MatButtonModule,
	MatDatepickerModule,
	MatFormFieldModule,
	MatInputModule
} from '@angular/material';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

@NgModule({
	exports: [
		MatToolbarModule,
		MatCardModule,
		MatButtonModule,
		MatDatepickerModule,
		MatMomentDateModule,
		MatFormFieldModule,
		MatInputModule
	],
	providers: [
		{provide: MAT_DATE_FORMATS, useValue: {
			parse: {
				dateInput: 'DD/MM/YYYY'
			},
			display: {
				dateInput: 'DD/MM/YYYY',
				monthYearLabel: 'MMM YYYY',
    			dateA11yLabel: 'LL',
    			monthYearA11yLabel: 'MMMM YYYY'
			}
		}}
	]
})
export class AppMaterialModule { }
