import app from 'firebase/app'
import 'firebase/auth'
// import 'firebase/firebase-firestore'

// Firebase configuration
const config = {
    apiKey: "AIzaSyB0UO2LkD2lg3hlRptreM20Uice7L-ksO8",
    authDomain: "onemiracle-2c1a3.firebaseapp.com",
    databaseURL: "https://onemiracle-2c1a3.firebaseio.com",
    projectId: "onemiracle-2c1a3",
    storageBucket: "onemiracle-2c1a3.appspot.com",
    messagingSenderId: "778718413506",
    appId: "1:778718413506:web:44d581399b801c90"
};

class Firebase {
	constructor() {
		app.initializeApp(config)
		this.auth = app.auth()
		// this.db = app.firestore()
	}

	login(email, password) {
		return this.auth.signInWithEmailAndPassword(email, password)
	}

	logout() {
		return this.auth.signOut()
	}

	async register(name, email, password) {
		await this.auth.createUserWithEmailAndPassword(email, password)
		return this.auth.currentUser.updateProfile({
			displayName: name
		})
	}

	// addQuote(quote) {
	// 	if(!this.auth.currentUser) {
	// 		return alert('Not authorized')
	// 	}

	// 	return this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).set({
	// 		quote
	// 	})
	// }

	isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
	}

	getCurrentUsername() {
		return this.auth.currentUser && this.auth.currentUser.displayName
	}

	// async getCurrentUserQuote() {
	// 	const quote = await this.db.doc(`users_codedamn_video/${this.auth.currentUser.uid}`).get()
	// 	return quote.get('quote')
	// }
}

export default new Firebase()