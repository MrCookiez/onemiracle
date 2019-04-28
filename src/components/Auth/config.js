
import firebase from 'firebsase';

// Initialize Firebase
const config = {
apiKey: "AIzaSyB0UO2LkD2lg3hlRptreM20Uice7L-ksO8",
authDomain: "onemiracle-2c1a3.firebaseapp.com",
databaseURL: "https://onemiracle-2c1a3.firebaseio.com",
projectId: "onemiracle-2c1a3",
storageBucket: "onemiracle-2c1a3.appspot.com",
messagingSenderId: "778718413506"
};

const fire = firebase.initializeApp(config);

export default fire;
