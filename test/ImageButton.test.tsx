import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme';

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ImageButton from "../src/ImageButton";

console.info = function() {};

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });
});

test('ImageButton renders correctly', () => {
    let component = renderer.create(
        <ImageButton onClick={()=>{}} alt={"alt-text"} src={'test.png'} className={'css-class-name'}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    component = renderer.create(
        <ImageButton alt={"alt-text"} src={'test.png'} className={'css-class-name'}/>
    );
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('ImageButton buttons clicked', () => {
    const spy = jest.fn();
    let component = mount(
        <ImageButton onClick={spy} alt={"alt-text"} src={'test.png'} className={'css-class-name'}/>
    );

    component.simulate('click');
    expect(spy).toHaveBeenCalled();
});
