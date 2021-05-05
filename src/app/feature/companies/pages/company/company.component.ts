import { Component, OnInit } from '@angular/core';

interface MockStudent {
  id: string;
  name: string;
}

interface MockSpecialization {
  name: string;
  users: MockStudent[];
  isOpen: boolean;
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss'],
})
export class CompanyComponent implements OnInit {
  specializations: MockSpecialization[] = [
    {
      name: 'First',
      users: [{id: '1', name: 'Ivan'}, {id: '1', name: 'Ivan'}, {id: '1', name: 'Ivan'}],
      isOpen: true,
    },
    {
      name: 'Second',
      users: [{id: '1', name: 'Ivan'}, {id: '1', name: 'Ivan'}, {id: '1', name: 'Ivan'}],
      isOpen: false,
    }
    
  ]
  constructor() { }

  ngOnInit() {}

}
