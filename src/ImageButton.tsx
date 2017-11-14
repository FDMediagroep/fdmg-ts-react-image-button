import * as React from 'react';

/**
 * Renders an image with an onClick hook for parent component.
 */
export default class ImageButton extends React.Component {
    public state: any;
    public props: any;

    constructor(props: any) {
        super(props);
        this.props = props;
        console.debug('ImageButton component', props);
    }

    componentDidMount() {
        console.debug('ImageButton mounted');
    }
        
    componentWillUnmount() {
        console.debug('ImageButton will unmount');
    }

    componentWillReceiveProps(nextProps) {
        console.debug('ImageButton next props', nextProps);
    }

    render() {
        return (
            <img 
                onClick={this.props.onClick}
                src={this.props.src}
                alt={this.props.alt}
                className={this.props.className} 
            />
        );
    }
}
