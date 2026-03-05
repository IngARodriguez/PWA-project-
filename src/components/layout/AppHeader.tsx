import React from 'react';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonButton,
  IonIcon,
} from '@ionic/react';

interface AppHeaderProps {
  title: string;
  showBackButton?: boolean;
  defaultHref?: string;
  endSlot?: React.ReactNode;
  endIcon?: string;
  onEndClick?: () => void;
  translucent?: boolean;
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  showBackButton = false,
  defaultHref = '/',
  endSlot,
  endIcon,
  onEndClick,
  translucent = true,
}) => {
  return (
    <IonHeader translucent={translucent}>
      <IonToolbar>
        {showBackButton && (
          <IonButtons slot="start">
            <IonBackButton defaultHref={defaultHref} />
          </IonButtons>
        )}
        <IonTitle>{title}</IonTitle>
        {(endSlot || endIcon) && (
          <IonButtons slot="end">
            {endSlot}
            {endIcon && (
              <IonButton onClick={onEndClick}>
                <IonIcon slot="icon-only" icon={endIcon} />
              </IonButton>
            )}
          </IonButtons>
        )}
      </IonToolbar>
    </IonHeader>
  );
};
