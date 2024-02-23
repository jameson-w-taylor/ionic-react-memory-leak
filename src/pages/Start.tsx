import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';

export const Start: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Start</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol style={{ textAlign: 'center' }}>
              <IonButton routerLink="/memory-leak">
                Go Try Memory Leak
              </IonButton>
              <IonButton routerLink="/works-fine">
                Go To Happy Place
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
        <div>
          Use this app to see a memory leak.<br />
          Open dev tools to the "Memory" tab so you can take heap snapshots.<br />
          <hr />
          First, let's notice what should be normal behavior.<br />
          <ol>
            <li>Navigate from here to "Happy Place", you'll see a broken image</li>
            <li>Trigger garbage collection, and take a snapshot</li>
            <li>Navigate back to "Start"</li>
            <li>Trigger garbage collection, and take a snapshot</li>
            <li>With the first snapshot selected, use 'ctrl-f' to search for "WhyIsThisHappening?" in the snapshot</li>
            <li>There should be two results, one prefixed with a timestamp and a second without this prefix</li>
            <li>With the second snapshot selected, use 'ctrl-f' to search for "WhyIsThisHappening?" in the snapshot</li>
            <li>There should only be one result with no timestamp</li>
            <li>Repeat as many times as you like, the result should not change</li>
          </ol>
          <hr />
          Now let's see the memory leak.
          <ol>
            <li>Navigate from here to "Memory Leak", you'll see a broken image</li>
            <li>Trigger garbage collection, and take a snapshot</li>
            <li>Navigate back to "Start"</li>
            <li>Trigger garbage collection, and take a snapshot</li>
            <li>With the first snapshot selected, use 'ctrl-f' to search for "WhyIsThisHappening?" in the snapshot</li>
            <li>There should be two results, one prefixed with a timestamp and a second without this prefix</li>
            <li>With the second snapshot selected, use 'ctrl-f' to search for "WhyIsThisHappening?" in the snapshot</li>
            <li>There will be two results, one prefixed with a timestamp and a second without this prefix</li>
            <li>
              When you repeat these steps, you'll notice that the entries accumulate over time:
              <ul>
                <li>The second time you visit "Memory Leak", the snapshot will now contain 3 matches (2 with timestamps)</li>
                <li>Returning to "Start", the snapshot will now contain 3 matches as well (2 with timestamps)</li>
                <li>And for each iteration the count will continue to climb</li>
              </ul>
            </li>
          </ol>
        </div>
      </IonContent>
    </IonPage>
  );
};