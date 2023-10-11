import firebase from "firebase/app";
import "firebase/remote-config";
import { websiteFirebaseConfig } from "./app.constants";

if (!firebase.apps.length) {
    firebase.initializeApp(websiteFirebaseConfig)
}

export async function getSqsValue() {
    //const remoteConfig = getRemoteConfig();
    const remoteConfig = firebase.remoteConfig();
    remoteConfig.settings.minimumFetchIntervalMillis = 1000;
    return remoteConfig.fetchAndActivate()
      .then(() => {
        var key = 'website_lsq_config'
        //var val = getValue(remoteConfig, key);
        var val = remoteConfig.getValue(key);
        return JSON.parse(val.asString());
      }).catch((err) => {
        return JSON.parse("{}");
    });
  }

export async function getRemoteConfig(config) {
    const remoteConfig = firebase.remoteConfig();
    remoteConfig.settings.minimumFetchIntervalMillis = 1000;
    return remoteConfig.fetchAndActivate()
      .then(() => {
        var key = config;
        var val = remoteConfig.getValue(key);
        return JSON.parse(val.asString());
      }).catch((err) => {
        return JSON.parse("{}");
    });
  }