import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../../components/user-management/user-management.component';

@Component({
  selector: 'app-user-edition-dialog',
  standalone: true,
  imports: [],
  templateUrl: './user-edition-dialog.component.html',
  styleUrl: './user-edition-dialog.component.css',
})
export class UserEditionDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
