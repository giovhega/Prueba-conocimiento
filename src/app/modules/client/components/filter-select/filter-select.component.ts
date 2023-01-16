import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent {

  @Output() eventFilterTask: EventEmitter<string> = new EventEmitter();
  public filterList: string [] = [
    'All',
    'Completed',
    'Pending'
  ];

  public eventFilter(event: any): void {
    this.eventFilterTask.emit(event.target.value);
  }

}
