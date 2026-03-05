import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { home, notifications, person, settings } from 'ionicons/icons';
import { ROUTES } from '@/config/routes';

export const AppTabBar: React.FC = () => {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href={ROUTES.TABS.HOME}>
        <IonIcon icon={home} />
        <IonLabel>Inicio</IonLabel>
      </IonTabButton>

      <IonTabButton tab="notifications" href={ROUTES.TABS.NOTIFICATIONS}>
        <IonIcon icon={notifications} />
        <IonLabel>Notificaciones</IonLabel>
      </IonTabButton>

      <IonTabButton tab="profile" href={ROUTES.TABS.PROFILE}>
        <IonIcon icon={person} />
        <IonLabel>Perfil</IonLabel>
      </IonTabButton>

      <IonTabButton tab="settings" href={ROUTES.TABS.SETTINGS}>
        <IonIcon icon={settings} />
        <IonLabel>Ajustes</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};
