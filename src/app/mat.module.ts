import { NgModule } from '@angular/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

import { MatNativeDateModule } from '@angular/material/core';

import {MatToolbarModule} from '@angular/material/toolbar'
import { BidiModule } from '@angular/cdk/bidi';
import { MomentDateModule  } from '@angular/material-moment-adapter';


const modules = [
  MatDialogModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatButtonModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatRadioModule,
  MatDividerModule,
  MatIconModule,
  BidiModule,
  MatCardModule,
  MatToolbarModule,
  MomentDateModule
]
@NgModule({
  imports: [
    ...modules

  ],
  exports: [
    ...modules
  ],
  providers: [{ provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
],
  declarations: [

  ]
})
export class MaterialModule { }
