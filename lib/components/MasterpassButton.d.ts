import * as React from 'react';
export interface MasterpassButtonProps {
    loadingView?: React.ReactNode;
    unavailableView?: React.ReactNode;
}
declare class MasterpassButton extends React.Component<MasterpassButtonProps> {
    render(): React.ReactElement;
}
export default MasterpassButton;
