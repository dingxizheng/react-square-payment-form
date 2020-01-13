import * as React from 'react';
export interface CreditCardNumberInputProps {
    label?: string;
}
declare class CreditCardNumberInput extends React.Component<CreditCardNumberInputProps> {
    static defaultProps: {
        label: string;
    };
    render(): React.ReactElement;
}
export default CreditCardNumberInput;
