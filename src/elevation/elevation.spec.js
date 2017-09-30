import React from 'react';
import { mount } from 'enzyme';
import { Elevation } from './elevation';

describe('Elevation', () => {
	it('renders', () => {
		mount(<Elevation />);
	});

	it('can have z value', () => {
		const el = mount(<Elevation z="24" />);
		expect(!!~el.html().search('mdc-elevation--z24')).toBe(true);
	});

	it('can transition', () => {
		const el = mount(<Elevation transition />);
		expect(!!~el.html().search('mdc-elevation-transition')).toBe(true);
	});
});
