import * as React from 'react';
export interface GooglePayButtonProps {
    loadingView?: React.ReactNode;
    unavailableView?: React.ReactNode;
}
declare class GooglePayButton extends React.Component<GooglePayButtonProps> {
    render(): React.ReactElement;
}
export default GooglePayButton;
