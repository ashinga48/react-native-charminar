import firebase from 'react-native-firebase';
import type { RemoteMessage } from 'react-native-firebase';
// Optional: Flow type
import type { Notification, NotificationOpen } from 'react-native-firebase';


function log(message){
  console.log(message);
}

export default class DB_operations{
    constructor() {
      this.messageListener = null;
      this.notificationListener = null;
      this.notificationDisplayedListener = null;
    }

    currentUser = () => {
      return firebase.auth().currentUser;
    }

    hasNotifPermission = () => {
      return firebase.messaging().hasPermission();
    }

    listen_first_notif = ( callback ) => {
      firebase.notifications().getInitialNotification()
      .then( callback ? callback : (notificationOpen: NotificationOpen) => {
        if (notificationOpen) {
          // App was opened by a notification
          // Get the action triggered by the notification being opened
          const action = notificationOpen.action;
          // Get information about the notification that was opened
          const notification: Notification = notificationOpen.notification;
        }
      });
    }

    listen_to_notif = (callback) => {
      this.messageListener = firebase.messaging().onMessage(callback ? callback : (message: RemoteMessage) => {
          // Process your message as required
          console.log(" Notif ", message);
      });
    }

    listen_stop_notif = () => {
      this.messageListener();
    }

    listen_to_notif2 = (callback) => {
      this.notificationListener = firebase.notifications().onNotification(callback ? callback :(notification: Notification) => {
          // Process your notification as required
          console.log(" notification ", notification);
      });
    }

    listen_stop_notif2 = () => {
      this.notificationListener();
    }

    listen_to_notif2Opened = (callback) => {
      this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed(callback ? callback :(notification: Notification) => {
          // Process your notification as required
          // ANDROID: Remote notifications do not contain the channel ID. You will have to specify this manually if you'd like to re-display the notification.
            console.log(" notification opened ", notification);
      });
    }

    listen_stop_notif2Opened = () => {
      this.notificationDisplayedListener();
    }

    push = (path, value, callback, error) => {
      firebase.database().ref(path).push(value, callback ? callback : log);
    }

    set = (collection, value ) => {
      value.time = (new Date()).getTime();
      return firebase.firestore().collection(collection).add(value)
    }

    setDoc = (collection, doc, value, ) => {
      //firebase.database().ref(path).push(value, callback ? callback : log);
      value.time = (new Date()).getTime();
      return firebase.firestore().collection(collection).doc(doc).set(value);
      // .then(callback? callback : log)
      // .catch( error ? error : log);
    }

    setDocMerge = (collection, doc, value ) => {
      //firebase.database().ref(path).push(value, callback ? callback : log);
      return firebase.firestore().collection(collection).doc(doc).set(value, {merge: true});
      // .then(callback? callback : log)
      // .catch( error ? error : log);
    }

    listen_user_events = (callback) => {
        firebase.auth().onAuthStateChanged(callback ? callback : log);
    }

    signIn = (username, pwd, callback) => {
      firebase.auth().signInAndRetrieveDataWithEmailAndPassword(username,pwd).then(callback?callback : log)
    }

    signOut = (callback) => {
      firebase.auth().signOut().then(callback?callback : log)
    }

    notificationGetToken = () => {
      return firebase.messaging().getToken();
    }

}
