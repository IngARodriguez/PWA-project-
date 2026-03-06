import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>PWA Project</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding ion-text-center">
        <div style={{ marginTop: '40%' }}>
          <h1>PWA Funcionando!</h1>
          <p style={{ fontSize: '48px' }}>{count}</p>
          <IonButton expand="block" color="success" onClick={() => setCount(count + 1)}>
            + Sumar
          </IonButton>
          <IonButton expand="block" color="danger" onClick={() => setCount(0)} style={{ marginTop: '8px' }}>
            Resetear
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
