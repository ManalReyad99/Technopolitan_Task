import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss']
})
export class GenericTableComponent implements OnInit {
  @Input() tableHeaders:any
  @Input() tableBodyList:any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
