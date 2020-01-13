import * as React from 'react';
export interface CreditCardCVVInputProps {
    label?: string;
}
declare class CreditCardCVVInput extends React.Component<CreditCardCVVInputProps> {
    static defaultProps: {
        label: string;
    };
    render(): React.ReactElement;
}
export default CreditCardCVVInput;
