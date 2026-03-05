import React from 'react';
import { IonButton, IonSpinner } from '@ionic/react';

interface AppButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  expand?: 'block' | 'full';
  fill?: 'clear' | 'outline' | 'solid' | 'default';
  color?: string;
  size?: 'small' | 'default' | 'large';
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export const AppButton: React.FC<AppButtonProps> = ({
  children,
  onClick,
  type = 'button',
  expand,
  fill = 'solid',
  color = 'primary',
  size = 'default',
  disabled = false,
  loading = false,
  className,
}) => {
  return (
    <IonButton
      type={type}
      expand={expand}
      fill={fill}
      color={color}
      size={size}
      disabled={disabled || loading}
      onClick={onClick}
      className={className}
    >
      {loading ? <IonSpinner name="crescent" /> : children}
    </IonButton>
  );
};
