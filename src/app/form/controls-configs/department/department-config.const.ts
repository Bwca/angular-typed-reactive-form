import {TypedControlConfig} from '../../../models/typed-reactive-form/typed-control-config.type';
import {Address, Department} from '../../../models/employee.dto';
import {TypedFormGroup} from '../../../models/typed-reactive-form/typed-form-group.model';
import {ADDRESS_CONFIG} from './address-config.const';

export const DEPARTMENT_CONFIG: TypedControlConfig<Department> = {
  address: this.fb.group(ADDRESS_CONFIG) as TypedFormGroup<Address>,
  name: ['name'],
  phone: ['phone'],
};
