import React from 'react';
import { mount } from 'enzyme';
import { Typography } from './typography';

describe('IconToggle', () => {
	it('renders', () => {
		mount(<Typography use="body1" />);
	});

	it('can be adjustMargin', () => {
		const el = mount(<Typography use="body1" adjustMargin />);
		expect(!!~el.html().search('mdc-typography--adjust-margin')).toBe(true);
	});
});
