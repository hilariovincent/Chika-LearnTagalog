import React, {useEffect, useState} from 'react'
import { useNavigation } from '@react-navigation/native'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { styles } from '../styles'


export default function SignInUser(){
  signInWithEmailAndPassword(auth,email, password)
  .then((userCredentials) => {
    const user = userCredentials.user;
    console.log(user.email);
    navigation.replace('Home');
  })
  .catch(error => alert(error.message))
  }