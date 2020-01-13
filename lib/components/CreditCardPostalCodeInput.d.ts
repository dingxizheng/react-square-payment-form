import * as React from 'react';
export interface CreditCardPostalCodeInputProps {
    label?: string;
}
declare class CreditCardPostalCodeInput extends React.Component<CreditCardPostalCodeInputProps> {
    static defaultProps: {
        label: string;
    };
    render(): React.ReactElement;
}
export default CreditCardPostalCodeInput;
