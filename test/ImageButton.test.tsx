import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ImageButton from "../src/ImageButton";

console.info = () => {};

describe('ImageButton', () => {
    const emptyFn = () => {};
    beforeAll(() => {
        Enzyme.configure({ adapter: new Adapter() });
    });

    test('renders correctly', () => {
        let component = renderer.create(
            <ImageButton onClick={emptyFn} alt={"alt-text"} src={'test.png'} className={'css-class-name'}/>
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();

        component = renderer.create(
            <ImageButton onClick={emptyFn} alt={"alt-text"} src={'test.png'} className={'css-class-name'} tabIndex='1'/>
        );
        tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('buttons clicked', () => {
        const spy = jest.fn();
        const component = mount(
            <ImageButton onClick={spy} alt={"alt-text"} src={'test.png'} className={'css-class-name'}/>
        );

        component.simulate('click');
        expect(spy).toHaveBeenCalled();
    });
});
