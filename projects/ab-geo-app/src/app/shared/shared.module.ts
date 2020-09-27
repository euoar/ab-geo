import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
  ],
  exports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
  ],
})
export class SharedModule {}
