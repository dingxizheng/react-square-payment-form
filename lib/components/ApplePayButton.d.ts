import * as React from 'react';
export interface ApplePayButtonProps {
    loadingView?: React.ReactNode;
    unavailableView?: React.ReactNode;
}
declare class ApplePayButton extends React.Component<ApplePayButtonProps> {
    render(): React.ReactElement;
}
export default ApplePayButton;
