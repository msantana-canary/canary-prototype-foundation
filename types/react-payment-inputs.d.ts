declare module 'react-payment-inputs' {
  export interface PaymentInputsWrapperProps {
    children: React.ReactNode;
    styles?: Record<string, any>;
  }

  export interface CardType {
    type: string;
    displayName?: string;
    format: RegExp;
    length: number[];
    cvcLength: number[];
    luhn: boolean;
  }

  export interface CardImageProps {
    [key: string]: any;
  }

  export interface Meta {
    cardType?: CardType;
    error?: string;
    erroredInputs?: {
      cardNumber?: string;
      expiryDate?: string;
      cvc?: string;
    };
    touchedInputs?: {
      cardNumber?: boolean;
      expiryDate?: boolean;
      cvc?: boolean;
    };
    focused?: string;
  }

  export interface UsePaymentInputsOptions {
    errorMessages?: {
      emptyCardNumber?: string;
      invalidCardNumber?: string;
      emptyExpiryDate?: string;
      monthOutOfRange?: string;
      yearOutOfRange?: string;
      dateOutOfRange?: string;
      invalidExpiryDate?: string;
      emptyCVC?: string;
      invalidCVC?: string;
      emptyZIP?: string;
      invalidZIP?: string;
    };
    cardNumberValidator?: (cardNumber: string) => string | undefined;
    expiryDateValidator?: (expiryDate: string) => string | undefined;
    cvcValidator?: (cvc: string, cardType?: CardType) => string | undefined;
    zipValidator?: (zip: string) => string | undefined;
  }

  export interface UsePaymentInputsReturn {
    meta: Meta;
    getCardNumberProps: (userProps?: any) => any;
    getExpiryDateProps: (userProps?: any) => any;
    getCVCProps: (userProps?: any) => any;
    getZIPProps: (userProps?: any) => any;
    getCardImageProps: (props?: CardImageProps) => any;
    wrapperProps: PaymentInputsWrapperProps;
  }

  export function usePaymentInputs(
    options?: UsePaymentInputsOptions
  ): UsePaymentInputsReturn;

  export function PaymentInputsWrapper(
    props: PaymentInputsWrapperProps
  ): JSX.Element;
}
