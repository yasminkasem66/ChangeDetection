import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-ng-for',
  templateUrl: './ng-template-ng-for.component.html',
  styleUrls: ['./ng-template-ng-for.component.scss']
})
export class NgTemplateNgForComponent {
  x:boolean=true
  allPersons = [
    {name: 'Mahesh', age: '25'},
    {name: 'Shakti', age: '23'},
    {name: 'Krishna', age: '23'},
    {name: 'Radha', age: '21'},	 
  ];

}
