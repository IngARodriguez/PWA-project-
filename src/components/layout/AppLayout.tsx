import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import { AppHeader } from './AppHeader';

interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
  showBackButton?: boolean;
  defaultHref?: string;
  endSlot?: React.ReactNode;
  endIcon?: string;
  onEndClick?: () => void;
  fullscreen?: boolean;
  padding?: boolean;
}

export const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  title,
  showBackButton,
  defaultHref,
  endSlot,
  endIcon,
  onEndClick,
  fullscreen = true,
  padding = true,
}) => {
  return (
    <IonPage>
      <AppHeader
        title={title}
        showBackButton={showBackButton}
        defaultHref={defaultHref}
        endSlot={endSlot}
        endIcon={endIcon}
        onEndClick={onEndClick}
      />
      <IonContent fullscreen={fullscreen} className={padding ? 'ion-padding' : ''}>
        {children}
      </IonContent>
    </IonPage>
  );
};
