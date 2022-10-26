import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  operation: string;  
  name: string;
  amount: number;
  date: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {operation: 'Crédito', name: 'Danilo', amount: 2500, date: '26/10/2022 14:25'},
  {operation: 'Débito', name: 'Tiago', amount: 1100, date: '26/10/2022 10:00'},
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
