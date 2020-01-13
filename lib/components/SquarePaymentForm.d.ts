import * as React from 'react';
import { SqError, SqCardData, SqContact, SqMethods, SqPaymentRequest, SqShippingOption, SqPaymentFormConfiguration, SqVerificationResult, SqVerificationDetails } from './models';
declare class SqPaymentForm {
    constructor(configuration: SqPaymentFormConfiguration);
    build: () => void;
    destroy: () => void;
    recalculateSize: () => void;
    requestCardNonce: () => void;
    verifyBuyer: (source: string, verificationDetails: SqVerificationDetails, callback: (err: [SqError], verificationResult: SqVerificationResult) => void) => void;
}
export interface SquarePaymentFormProps {
    applicationId: string;
    locationId: string;
    formId: string;
    inputStyles?: {}[];
    apiWrapper: string;
    sandbox: boolean;
    cardNonceResponseReceived: (errors: [SqError], nonce: string, cardData: SqCardData, buyerVerificationToken?: string, billingContact?: SqContact, shippingContact?: SqContact, shippingOption?: SqShippingOption) => void;
    createPaymentRequest?: () => SqPaymentRequest;
    createVerificationDetails?: () => SqVerificationDetails;
    methodsSupported?: (methods: SqMethods) => void;
    inputEventReceived?: () => void;
    paymentFormLoaded?: () => void;
    shippingContactChanged?: (shippingContact: SqContact, done: ({}: {}) => {}) => void;
    shippingOptionChanged?: (shippingOption: SqShippingOption, done: ({}: {}) => {}) => void;
    unsupportedBrowserDetected?: () => void;
}
interface State {
    applePayState: string;
    googlePayState: string;
    masterpassState: string;
    errorMessage?: string;
    scriptLoaded: boolean;
}
declare class SquarePaymentForm extends React.Component<SquarePaymentFormProps, State> {
    paymentForm?: SqPaymentForm;
    static defaultProps: {
        formId: string;
        apiWrapper: string;
        sandbox: boolean;
        inputStyles: {
            fontSize: string;
            fontFamily: string;
            padding: string;
            color: string;
            backgroundColor: string;
            lineHeight: string;
            placeholderColor: string;
            _webkitFontSmoothing: string;
            _mozOsxFontSmoothing: string;
        }[];
    };
    constructor(props: SquarePaymentFormProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    loadSqPaymentFormLibrary: (onSuccess?: (() => void) | undefined, onError?: (() => void) | undefined) => void;
    renderSqPaymentForm: () => void;
    createNonce: (event: React.MouseEvent<Element, MouseEvent>) => void;
    verifyBuyer: (source: string, verificationDetails: SqVerificationDetails, callback: (err: [SqError], verificationResult: SqVerificationResult) => void) => void;
    cardNonceResponseReceived: (errors: [SqError], nonce: string, cardData: SqCardData, billingContact: SqContact, shippingContact: SqContact, shippingOption: SqShippingOption) => void;
    methodsSupported: (methods: SqMethods) => void;
    paymentFormLoaded: () => void;
    buildSqPaymentFormConfiguration(props: SquarePaymentFormProps): SqPaymentFormConfiguration;
    render(): React.ReactElement;
}
export default SquarePaymentForm;
