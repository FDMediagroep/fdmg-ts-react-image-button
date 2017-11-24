/// <reference types="react" />
import * as React from 'react';
import { MouseEvent } from "react";
export interface Props {
    className?: string;
    onClick: (event: MouseEvent<HTMLSpanElement>) => void;
    alt: string;
    src: string;
    tabIndex?: number;
}
/**
 * Renders an image with an onClick hook for parent component.
 */
export default class ImageButton extends React.Component<Props, any> {
    state: any;
    props: Props;
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    componentWillReceiveProps(nextProps: any): void;
    render(): JSX.Element;
}
