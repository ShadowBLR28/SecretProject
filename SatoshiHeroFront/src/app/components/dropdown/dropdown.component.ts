import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent<TData> implements OnInit {
  @Input() Items?: TData[];
  @Input() SelectedItem?: TData
  @Output() OnChange: EventEmitter<TData> = new EventEmitter<TData>();

  Hidden: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  toggle(): void {
    this.Hidden = !this.Hidden;
  }

  select(item:TData){
    this.SelectedItem = item;
    this.OnChange.emit(this.SelectedItem);
    this.toggle;
  }

}
