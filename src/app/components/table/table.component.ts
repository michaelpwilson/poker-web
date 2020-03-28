import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public players: Array<number> = [0, 0, 0, 0, 0, 0, 0, 0];
  constructor() { }

  ngOnInit(): void {
  }

}
