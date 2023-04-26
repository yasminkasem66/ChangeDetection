import { Component } from '@angular/core';
import { User } from 'src/@AppService/models/user';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent {
  userModal :User = {} as User;

  constructor() { }

  onSubmit() {
    alert('Form Submitted successfully!!!\n Check the values in browser console.');
    console.table(this.userModal);
  }
}
