import { View, Text, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation, useRouter} from 'expo-router'
import {Colors} from './../../../constants/Colors'
import { TextInput } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {auth, } from './../../../configs/FirebaseConfig'
import { createUserWithEmailAndPassword } from "firebase/auth";


export default function SignUp() {
  const navigation =useNavigation();
  const router = useRouter();

  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [fullName,setFullName]=useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown:false
    })
  }, []);
  const OnCreateAccount=()=>{

    if(!email && !password && !fullName){
      ToastAndroid.show('Please enter all details ',ToastAndroid.LONG);
      return;
    }
     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("--",errorCode,errorMessage);
    // ..
  });
  }


//  const OnCreateAcount=()=>{

//  console.log("SignUp button clicked");  // Debug log
  
//   if (!email || !password || !fullName) {
//     console.log("Missing fields:", { email, password, fullName });
//     ToastAndroid.show('Please enter all details', ToastAndroid.BOTTOM);
//     return;
//   }

//   createUserWithEmailAndPassword(auth, email.trim(), password)
//     .then((userCredential) => {
//       console.log("User Created Successfully:", userCredential.user);
//     })
//     .catch((error) => {
//       console.log("Firebase Auth Error:", error.message, error.code);
//     });
    
//   }

  return (
    <View style={{
      padding:25,
      paddingTop:50,
      backgroundColor:Colors.WHITE,
      height:'100%'
    }}>

      <TouchableOpacity onPress={()=>router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily:'outfit-bold',
        fontSize: 30,
        marginTop:20
      }}>Create New Account</Text>

{/* User Full Name */}
  <View style={{
        marginTop:50,
      }}>
        <Text style={{
            fontFamily:'outfit',
        }}>Full Name</Text>
        <TextInput
         style={styles.input}
         placeholder='Enter Full Name'
         onChangeText={(value)=>setFullName(value)}
         />
{/* Email */}
  <View style={{
        marginTop:20,
      }}>
        <Text style={{
            fontFamily:'outfit',
        }}>Email</Text>
        <TextInput
         style={styles.input}
         onChangeText={(value)=>setEmail(value)}
         keyboardType="email-address" // Helps with email formatting on mobile
         autoCapitalize="none"
         placeholder='Enter Email'/>
      </View>
        {/* password */}
        <View style={{
        marginTop:20,
      }}>
        <Text style={{
            fontFamily:'outfit',
        }}>Password</Text>
        <TextInput
         secureTextEntry={true}
         onChangeText={(value)=>setPassword(value)}
         style={styles.input}
         placeholder='Enter Password'/>
      </View>

      
              {/* Sign Up Button  */}
             <TouchableOpacity onPress={OnCreateAccount} style={{
                  padding:20,
                  backgroundColor:Colors.PRIMARY,
                  borderRadius:15,
                  marginTop:50
             }}>
              <Text style={{
                  color:Colors.WHITE,
                  textAlign:'center'
              }}>
                  Create Account
              </Text>
             </TouchableOpacity>
      
              {/* Create Account Button  */}
             <TouchableOpacity
                  onPress={()=>router.replace('auth/sign-in')}
              style={{
                  padding:20,
                  backgroundColor:Colors.WHITE,
                  borderRadius:15,
                  marginTop:50,
                  borderWidth:1
             }}>
              <Text style={{
                  color:Colors.PRIMARY,
                  textAlign:'center'
              }}>
                  Sign In
              </Text>
             </TouchableOpacity>
      
          </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input:{
      padding:15,
      borderWidth:1,
      borderRadius:15,
      borderColor:Colors.GRAY,
      fontFamily:'outfit',
     }
})