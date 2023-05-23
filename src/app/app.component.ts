import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onpush';
  importantItems:string[]=[];
  unImportantItems:string[]=[];

  customers:string[]=[];
  isDisable:boolean = false;

  ngOnInit(){
    this.importantItems = ['Superman', 'Batman'];
    this.unImportantItems=['Arrow', 'Flash', 'Supergirl'];
  }

  refresh(){
    this.importantItems.push('Aquaman');
    this.unImportantItems.push('Batgirl');
  }
  submit(valuue:string){
    this.customers.push(valuue);
  }
}
