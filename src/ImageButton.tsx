import * as React from 'react';
import {MouseEvent} from "react";
import Image from "fdmg-ts-react-image";

export interface Props {
    className?: string;
    onClick: (event: MouseEvent<HTMLSpanElement>) => void;
    alt: string;
    src: string;
    tabIndex?: number|any;
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
        console.info('ImageButton composite', props);
    }

    render() {
        return (
            <span onClick={this.props.onClick}
                  className={this.props.className}
                  role="button"
                  tabIndex={this.props.tabIndex?this.props.tabIndex:0}
                  aria-label={this.props.alt}>
                <Image alt={this.props.alt} src={this.props.src}/>
            </span>
        );
    }
}
