import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarListItem',
  templateUrl: './navbarListItem.component.html',
  styleUrls: ['./navbarListItem.component.css']
})
export class NavbarListItemComponent implements OnInit {
  @Input() href: string = "#";
  @Input() linkText: string = "";
  @Input() svgData: string[] = [];
  
  constructor() { }

  ngOnInit() {
  }

}
