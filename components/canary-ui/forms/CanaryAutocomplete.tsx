import React, { useState, useRef, useEffect, useCallback } from "react";
import clsx from "clsx";
import { colors } from "../design-tokens";
import { InputSize } from "./types";

export interface CanaryAutocompleteProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  size?: InputSize;
  isDisabled?: boolean;
  isRequired?: boolean;
  error?: string;
  helperText?: string;
  className?: string;
}

const CanaryAutocomplete: React.FC<CanaryAutocompleteProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  size = InputSize.NORMAL,
  isDisabled = false,
  isRequired = false,
  error,
  helperText,
  className,
}) => {
  const [inputText, setInputText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Sync inputText with value prop (find the label for the current value)
  useEffect(() => {
    const selected = options.find((opt) => opt.value === value);
    if (selected) {
      setInputText(selected.label);
    } else if (!value) {
      setInputText("");
    }
  }, [value, options]);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(inputText.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    setIsOpen(true);
  };

  const handleOptionClick = (option: { value: string; label: string }) => {
    setInputText(option.label);
    onChange(option.value);
    setIsOpen(false);
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  const sizeClasses: Record<InputSize, string> = {
    [InputSize.TABLET]: "h-14 text-lg",
    [InputSize.LARGE]: "h-12 text-base",
    [InputSize.NORMAL]: "h-10 text-sm",
    [InputSize.COMPACT]: "h-8 text-xs",
  };

  const showDropdown = isOpen && filteredOptions.length > 0;
  const showNoResults =
    isOpen && inputText.length > 0 && filteredOptions.length === 0;

  return (
    <div ref={containerRef} className={clsx("relative", className)}>
      {/* Label */}
      {label && (
        <div className="text-sm mb-1" style={{ color: colors.colorBlack3 }}>
          {label}
          {isRequired && (
            <span style={{ color: colors.danger }} className="ml-0.5">
              *
            </span>
          )}
        </div>
      )}

      {/* Input */}
      <input
        ref={inputRef}
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onFocus={handleFocus}
        placeholder={placeholder}
        disabled={isDisabled}
        className={clsx(
          "w-full rounded px-3 py-2 outline-none transition-colors duration-200",
          sizeClasses[size],
          isDisabled && "opacity-50"
        )}
        style={{
          border: `1px solid ${error ? colors.danger : colors.colorBlack5}`,
          backgroundColor: isDisabled ? colors.colorBlack7 : colors.colorWhite,
          color: colors.colorBlack1,
        }}
        onFocusCapture={(e) => {
          if (!error) {
            (e.target as HTMLInputElement).style.borderColor =
              colors.colorBlueDark1;
          }
        }}
        onBlurCapture={(e) => {
          if (!error) {
            (e.target as HTMLInputElement).style.borderColor =
              colors.colorBlack5;
          }
        }}
      />

      {/* Error */}
      {error && (
        <div className="text-xs mt-1" style={{ color: colors.danger }}>
          {error}
        </div>
      )}

      {/* Helper text */}
      {helperText && !error && (
        <div className="text-xs mt-1" style={{ color: colors.colorBlack4 }}>
          {helperText}
        </div>
      )}

      {/* Dropdown */}
      {(showDropdown || showNoResults) && (
        <div
          className="absolute w-full rounded-lg shadow-lg overflow-y-auto"
          style={{
            top: "100%",
            marginTop: 4,
            backgroundColor: colors.colorWhite,
            border: `1px solid ${colors.colorBlack6}`,
            maxHeight: 240,
            zIndex: 50,
          }}
        >
          {showNoResults ? (
            <div
              className="px-3 py-2 text-sm italic"
              style={{ color: colors.colorBlack4 }}
            >
              No results found
            </div>
          ) : (
            filteredOptions.map((option) => (
              <div
                key={option.value}
                className="px-3 py-2 text-sm cursor-pointer"
                style={{ color: colors.colorBlack1 }}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleOptionClick(option);
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor =
                    colors.colorBlack7;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor =
                    "transparent";
                }}
              >
                {option.label}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CanaryAutocomplete;
