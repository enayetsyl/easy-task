import { createContext, useEffect, useState } from "react";
import {GithubAuthProvider, GoogleAuthProvider,  getAuth, onAuthStateChanged, signInWithCredential, signInWithPopup, signOut,  } from 'firebase/auth'
import app from '../Firebase/firebase.config'


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
// const credential = GithubAuthProvider.credential(token)

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const googleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  // const gitHubSignIn = () => {
  //   setLoading(true)
  //   return signInWithCredential(auth, credential)
  // }
  const logOut = () => {
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser => {
      setUser(currentUser)
      setLoading(false);
    }))

    return () => {
      unSubscribe()
    }
  },[])

  const authInfo = {
    user, 
    loading,
    googleSignIn, 
    setUser,
    logOut,
    // gitHubSignIn
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;