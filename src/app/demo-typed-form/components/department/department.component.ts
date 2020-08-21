import {Component, Input, OnInit} from '@angular/core';
import {TypedFormGroup} from '../../../typed-reactive-form/models/typed-form-group.model';
import {Department} from '../../models/employee.dto';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  @Input() public departmentForm: TypedFormGroup<Department>;

  constructor() { }

  ngOnInit(): void {

    console.log('departmentForm')
    console.log(this.departmentForm)
  }

}