import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const MyComponent = ({ shouldRender }: { shouldRender: boolean }) => {
  const src = `${Date.now()}WhyIsThisHappening?`;
  return shouldRender ? <img src={src} /> : <></>;
};

export const WorksFine: React.FC = () => {
  const shouldRender = true;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/start" />
          </IonButtons>
          <IonTitle>Works Fine</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <MyComponent shouldRender={shouldRender} />
      </IonContent>
    </IonPage>
  );
};