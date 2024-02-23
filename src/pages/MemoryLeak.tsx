import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

export const MemoryLeak: React.FC = () => {
  const shouldRender = true;
  const src = `${Date.now()}WhyIsThisHappening?`;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/start" />
          </IonButtons>
          <IonTitle>Memory Leak</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {shouldRender && <img src={src} />}
      </IonContent>
    </IonPage>
  );
};