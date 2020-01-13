import * as React from 'react';
import { SqVerificationDetails, SqError, SqVerificationResult } from './models';
export interface ContextInterface {
    formId?: string;
    applePayState?: string;
    googlePayState?: string;
    masterpassState?: string;
    onCreateNonce?: (event: React.MouseEvent) => {};
    onVerifyBuyer?: (source: string, verificationDetails: SqVerificationDetails, callback: (err: [SqError], verificationResult: SqVerificationResult) => void) => void;
}
export declare const ContextProvider: React.Provider<{
    applePayState: string;
    googlePayState: string;
    masterpassState: string;
    formId: string;
    onCreateNonce: (event: React.MouseEvent<Element, MouseEvent>) => void;
    onVerifyBuyer: (source: string, verificationDetails: SqVerificationDetails, callback: (err: [SqError], verificationResult: SqVerificationResult) => void) => void;
}>;
export declare const ContextConsumer: React.Consumer<{
    applePayState: string;
    googlePayState: string;
    masterpassState: string;
    formId: string;
    onCreateNonce: (event: React.MouseEvent<Element, MouseEvent>) => void;
    onVerifyBuyer: (source: string, verificationDetails: SqVerificationDetails, callback: (err: [SqError], verificationResult: SqVerificationResult) => void) => void;
}>;
