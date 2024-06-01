import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  parentValue: string = '';
  public childValueChanged(valueFromChild: string):void {console.log('valueFromChild',valueFromChild);
    this.parentValue = valueFromChild;
  }
}
