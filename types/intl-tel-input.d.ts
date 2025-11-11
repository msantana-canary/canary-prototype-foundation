declare module 'intl-tel-input' {
  export interface IntlTelInputOptions {
    initialCountry?: string;
    preferredCountries?: string[];
    separateDialCode?: boolean;
    autoPlaceholder?: 'off' | 'polite' | 'aggressive';
    formatOnDisplay?: boolean;
    nationalMode?: boolean;
    utilsScript?: string;
    [key: string]: any;
  }

  export interface IntlTelInput {
    destroy(): void;
    getNumber(): string;
    getNumberType(): number;
    getSelectedCountryData(): any;
    getValidationError(): number;
    isValidNumber(): boolean;
    setCountry(countryCode: string): void;
    setNumber(number: string): void;
    setPlaceholderNumberType(type: string): void;
  }

  export default function intlTelInput(
    input: HTMLInputElement,
    options?: IntlTelInputOptions
  ): IntlTelInput;
}

declare module 'intl-tel-input/build/css/intlTelInput.css' {
  const content: any;
  export default content;
}
