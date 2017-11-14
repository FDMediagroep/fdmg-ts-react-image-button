import * as React from 'react';
import * as renderer from 'react-test-renderer';
import ImageButton from "../src/ImageButton";

console.info = function() {};

test('ImageButton renders correctly', () => {
    const component = renderer.create(
        <ImageButton onClick={()=>{}} alt={"alt-text"} src={'test.png'} className={'css-class-name'}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});