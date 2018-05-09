# React Native Charminar

![react-native-charminar](/images/2018/05/react-native-charminar.png)


## ![VIDEO TUTORIAL](https://youtu.be/lM73Ip1_j44)

 - RNFirebase ( All features from RN Firebase )
 - WIX ui lib
 - RNtypography
 - RNcamera
 - RNsvg
 - RN Webview Leaflet
---

A basic react native app with [`react-native-firebase`](https://github.com/invertase/react-native-firebase) pre-integrated  to get you started quickly.

---

### Getting Started

#### 1) Clone & Install Dependencies

- 1.1) `git clone https://github.com/ashinga48/react-native-charminar.git`
- 1.2) `cd react-native-charminar` - cd into your newly created project directory.
- 1.3) Install NPM packages with your package manager of choice - i.e run `yarn` or `npm install`
- 1.4) **[iOS]** `cd ios` and run `pod install` - if you don't have CocoaPods you can follow [these instructions](https://guides.cocoapods.org/using/getting-started.html#getting-started) to install it.
- 1.5) **[Android]** No additional steps for android here.

#### 2) Add `Google Services` files (plist & JSON) for firebase

- 2.1) **[iOS]** Follow the `add firebase to your app` instructions [here](https://firebase.google.com/docs/ios/setup#add_firebase_to_your_app) to generate your `GoogleService-Info.plist` file if you haven't done so already - use the package name generated previously as your `iOS bundle ID`.
- 2.2) **[iOS]** Place this file in the `ios/` directory of your project.
- 2.3) **[Android]** Follow the `manually add firebase` to your app instructions [here](https://firebase.google.com/docs/android/setup#manually_add_firebase) to generate your `google-services.json` file if you haven't done so already - use the package name generated previously as your `Android package name`.
- 2.4) Place this file in the `android/app/` directory of your project.

#### 3) Start your app

- 3.1) New terminal cd iOS && pod install
- 3.2) Start the react native packager, run `yarn run start` or `npm start` from the root of your project.

#### 4) ANDROID SETUP

- 4a) add `local.properties` for android sdk location
- 4b) app `build.gradle`

```
defaultConfig {
    applicationId "com.invertase.rnfirebasestarter"
    minSdkVersion 16
    targetSdkVersion 26
    versionCode 1
    versionName "1.0"
    ndk {
        abiFilters "armeabi-v7a", "x86"
    }
    // because of firestore:
    multiDexEnabled true
}



implementation(project(':react-native-firebase')) {
    transitive = false
}

// RNFirebase required dependencies
implementation "com.google.firebase:firebase-core:15.0.0"
implementation "com.google.android.gms:play-services-base:15.0.0"

// RNFirebase optional dependencies
implementation "com.google.firebase:firebase-ads:15.0.0"
implementation "com.google.firebase:firebase-auth:15.0.0"
implementation "com.google.firebase:firebase-config:15.0.0"
implementation "com.google.firebase:firebase-database:15.0.0"
implementation "com.google.firebase:firebase-invites:15.0.0"
implementation "com.google.firebase:firebase-firestore:15.0.0"
implementation "com.google.firebase:firebase-messaging:15.0.2"
implementation "com.google.firebase:firebase-perf:15.0.0"
implementation "com.google.firebase:firebase-storage:15.0.0"
```



- 4c) android build.gradle

```
buildscript {
    repositories {
        jcenter()
        google()   //CHECK THIS
        maven {
            url 'https://maven.fabric.io/public'
        }
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.1.0'
        classpath 'com.google.gms:google-services:3.2.1’.  //CHECK THIS
        classpath 'io.fabric.tools:gradle:1.25.1'
        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}
```


####5 YARN START
####6 YARN RUN ANDROID


For iOS

- 1 make sure you ran “pods install”


MORE HELP

See guide of https://github.com/invertase/react-native-firebase-starter





##ISSUE 2

Execution failed for task ':app:preDebugBuild'.
> Android dependency 'com.android.support:support-v4' has different version for the compile (26.1.0) and runtime (27.1.0) classpath. You should manually set the same version via DependencyResolution


IN REACT-NATIVE-CAMERA
BUILD.GRADLE


def DEFAULT_COMPILE_SDK_VERSION             = 26
def DEFAULT_BUILD_TOOLS_VERSION             = "26.0.2"
def DEFAULT_TARGET_SDK_VERSION              = 26
def DEFAULT_GOOGLE_PLAY_SERVICES_VERSION    = "12.0.1"
def DEFAULT_SUPPORT_LIBRARY_VERSION         = "26.1.0" //CHECK THIS




## TODO
- Upload Video Tutorial
- Screenshots

## Note

- This is initially forked from RNFirebase then added with basic needed libraries.
- Charminar icon took from (https://dribbble.com/vipintoshniwal) will be removed if not willing.
