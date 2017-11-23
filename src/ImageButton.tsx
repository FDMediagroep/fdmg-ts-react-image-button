import * as React from 'react';
import {MouseEvent} from "react";

export interface Props {
    className?: string;
    onClick: (event: MouseEvent<HTMLImageElement>) => void;
    alt: string;
    src: string;
}

/**
 * Renders an image with an onClick hook for parent component.
 */
export default class ImageButton extends React.Component<Props, any> {
    public state: any;
    public props: Props;

    constructor(props: Props) {
        super(props);
        this.props = props;
        console.info('ImageButton component', props);
    }

    componentDidMount() {
        console.info('ImageButton mounted');
    }
        
    componentWillUnmount() {
        console.info('ImageButton will unmount');
    }

    componentWillReceiveProps(nextProps) {
        console.info('ImageButton next props', nextProps);
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
