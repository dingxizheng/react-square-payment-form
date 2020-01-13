import * as React from 'react';
export interface CreditCardExpirationDateInputProps {
    label?: string;
}
declare class CreditCardExpirationDateInput extends React.Component<CreditCardExpirationDateInputProps> {
    static defaultProps: {
        label: string;
    };
    render(): React.ReactElement;
}
export default CreditCardExpirationDateInput;
