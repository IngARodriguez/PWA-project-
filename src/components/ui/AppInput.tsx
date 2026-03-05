import React from 'react';
import { IonInput, IonItem, IonNote } from '@ionic/react';

interface AppInputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value?: string;
  onIonInput?: (e: CustomEvent) => void;
  onIonChange?: (e: CustomEvent) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  clearInput?: boolean;
  className?: string;
}

export const AppInput: React.FC<AppInputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onIonInput,
  onIonChange,
  error,
  disabled = false,
  required = false,
  clearInput = false,
  className,
}) => {
  return (
    <div className={className}>
      <IonItem>
        <IonInput
          label={label}
          labelPlacement="floating"
          placeholder={placeholder}
          type={type}
          value={value}
          onIonInput={onIonInput}
          onIonChange={onIonChange}
          disabled={disabled}
          required={required}
          clearInput={clearInput}
          className={error ? 'ion-invalid ion-touched' : ''}
        />
      </IonItem>
      {error && (
        <IonNote color="danger" className="ion-padding-start">
          {error}
        </IonNote>
      )}
    </div>
  );
};
