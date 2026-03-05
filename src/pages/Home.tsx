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
          <h1>Hola Mundo</h1>
          <p>Clicks: {count}</p>
          <IonButton expand="block" onClick={() => setCount(count + 1)}>
            Presioname
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
