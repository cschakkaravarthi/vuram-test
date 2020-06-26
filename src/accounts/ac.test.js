import React from 'react';
import { shallow } from 'enzyme';
import ac from '../accounts/ac';

test('should test Account component', () => {
 const wrapper = shallow(<ac />);
 expect(wrapper).toMatchSnapshot();
});