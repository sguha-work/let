import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
class CacheHandler {
    #localStorageIndex = 'lclstr_fb_backup';
    get(keyName = '') {
        if (keyName !== '') {
            try {
                let data = JSON.parse(window.localStorage[this.#localStorageIndex])[keyName];
                if (typeof data === 'undefined') {
                    return null;
                } else {
                    return data;
                }
            } catch (error) {
                console.error('Local data read error', error);
                return null;
            }
        } else {
            return null;
        }
    }
    set(keyName = '', data) {console.log('set called',keyName);
        if (keyName !== '') {
            try {
                let datainlocal = JSON.parse(window.localStorage[this.#localStorageIndex]);
                datainlocal[keyName] = data
                window.localStorage[this.#localStorageIndex]= JSON.stringify(datainlocal);
                return true;
            } catch (error) {
                console.error('Local data write error', error);
                return false;
            }
        } else {
            return false;
        }
    }
    merge(keyName = '', data) {
        if (keyName !== '') {
            try {
                let oldData = JSON.parse(window.localStorage[this.#localStorageIndex])[keyName];
                let finalData = [...oldData, data]; console.log('finalData', finalData);
                this.set(keyName, finalData);
                return true;
            } catch (error) {
                console.error('Local data write error', error);
                return false;
            }
        } else {
            return false;
        }
    }
}
class FireBaseService {
    instance = null;
    dbUpdatedEventName = 'event_LOCAL-DB-UPDATED';
    #firebaseConfig = {
        apiKey: "AIzaSyCU5zqsKtPeUyKP0vO8wIREEMlDDVhg_2g",
        authDomain: "let-db.firebaseapp.com",
        projectId: "let-db",
        storageBucket: "let-db.appspot.com",
        messagingSenderId: "69735200889",
        appId: "1:69735200889:web:0317d719a1b2039297bca8"
    };
    #cacheInstance = new CacheHandler();
    #app = null;
    constructor() {
        this.#app = initializeApp(this.#firebaseConfig);
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = new FireBaseService();
        }
        return this.instance;
    }
    async getCollection(collectionName) {
        try {
            const cacheResponse = this.#cacheInstance.get(collectionName);
            if (cacheResponse === null) {
                const db = getFirestore(this.#app);
                const collectionRef = collection(db, collectionName);
                const docRef = await getDocs(collectionRef);
                const docs = docRef.docs.map(doc => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }
                });
                this.#cacheInstance.set(collectionName, docs);
                return Promise.resolve(docs);
            } else {
                return Promise.resolve(cacheResponse);
            }
        } catch (error) {
            console.log('Firebase error', error);
            return Promise.reject(error);
        }

    }
    async set(collectionName, data) {
        try {
            const db = getFirestore(this.#app);
            const dbRef = collection(db, collectionName);
            this.#cacheInstance.merge(collectionName, data);
            window.dispatchEvent(new Event(this.dbUpdatedEventName));
            await addDoc(dbRef, data);
            return Promise.resolve();
        } catch (error) {
            console.log('Firebase error', error);
            return Promise.reject(error);
        }
    }
    async deleteDocument(collectioName, documentId) {
        try {
            const db = getFirestore(this.#app);
            await deleteDoc(doc(db, collectioName, documentId));
            return Promise.resolve();
        } catch (error) {
            console.log('Firebase error', error);
            return Promise.reject(error);
        }
    }

}
export default FireBaseService