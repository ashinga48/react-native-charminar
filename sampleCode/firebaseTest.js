import React from 'react';
import { StyleSheet, Platform, Image, Text, ScrollView } from 'react-native';

//import firebase from 'react-native-firebase';

import { material, iOSColors, systemWeights } from 'react-native-typography';
import { View, TextInput, Button} from 'react-native-ui-lib';


import { Router, Scene } from 'react-native-router-flux';
import ElevatedView from './libs/elevatedView'
import dbops from './dbops/'

export default class App extends React.Component {
  constructor() {

    super();
    this.state = {
      user : null,
      hasPermission : false,
      notif : null
    };

    this.dbops = new dbops();
  }

  componentDidMount() {
    // firebase things?
    this.dbops.listen_user_events((user)=>{

      if(user)
      this.setState({ user : user});
      else
      this.setState({ user : null});
    })



    this.dbops.hasNotifPermission().then(enabled => {
      if (enabled) {
        // user has permissions
        this.setState({ hasPermission : true });

        // this.dbops.listen_to_notif();
        this.dbops.listen_to_notif2(this.onPushReceived);
        this.dbops.listen_to_notif2Opened(this.onPushReceived);

      } else {
        // user doesn't have permission
      }
    });


    this.dbops.listen_first_notif((notificationOpen: NotificationOpen) => {
      if (notificationOpen) {
        // App was opened by a notification
        // Get the action triggered by the notification being opened
        const action = notificationOpen.action;
        // Get information about the notification that was opened
        const notification: Notification = notificationOpen.notification;
        console.log(notification);

        this.onPushReceived(notificationOpen.notification);
      }
    });


  }

  componentWillUnmount() {
    // this.dbops.listen_stop_notif();
    this.dbops.listen_stop_notif2();
    this.dbops.listen_stop_notif2Opened();
  }


  onPushReceived = (notification: Notification) => {
      // Process your notification as required
      console.log(" notification ", notification.data);

      this.setState({ notif : notification.data});

  }


  logout = () => {
    this.dbops.signOut(()=> {});
  }

  loginUser = () => {
    this.dbops.signIn('testing@gmail.com', 'sample');
  }

  savetoken = () => {

    this.dbops.notificationGetToken()
    .then(fcmToken => {
      if (fcmToken) {
        console.log("success", fcmToken)
        // user has a device token

      } else {
        console.log(fcmToken)
        // user doesn't have a device token yet
      }
    });
  }

  savesomedata = () => {
    this.dbops.push('/some', {"name":"tesitng"},
    (r) =>{
      if(r instanceof Error)
        console.log("error ",r);
      else
        console.log("Done ",r);
    })
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
        <Image source={require('../assets/icon.png')} style={[styles.logo]} />

        { this.state.user &&
        <Text style={[ material.display1, systemWeights.thin, { color: iOSColors.pink}]}>
        USER ID :  {JSON.stringify(this.state.user.uid)}
        </Text>
        }

        {this.state.hasPermission &&
          <Text>Has Notification permission = TRUE  </Text>
        }

        {this.state.notif &&
          <View>
            <Text> Received Notification : {JSON.stringify(this.state.notif)}  </Text>
          </View>
        }


        <View style={styles.modules}>

          <View marginT-100 center>
            <Button text70 white background-orange30 label="Login User" onPress={this.loginUser}/>

            <Button text70 white background-orange30 label="Logout" onPress={this.logout}/>
          </View>

        </View>

        <ElevatedView
          elevation={1}
          style={styles.stayElevated}
        />
        <ElevatedView
          elevation={2}
          style={styles.stayElevated}
        />
        <ElevatedView
          elevation={3}
          style={styles.stayElevated}
        />
        <ElevatedView
          elevation={4}
          style={styles.stayElevated}
        />
        <ElevatedView
          elevation={5}
          style={styles.stayElevated}
        />


        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    height: 130,
    marginBottom: 16,
    marginTop: 32,
    width: 130,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
  stayElevated: {
    width: 200,
    height: 100,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 5
  }
});
