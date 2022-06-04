import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  show : boolean;

  constructor(){
    this.show = true;
  }
}

export class NgbdDropdownBasic {
}
export class NgbdCollapseBasic {
  public isCollapsed = false;
}
