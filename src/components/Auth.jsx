import React, { useState } from 'react'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth, googleProvider } from '../Config/firebase'
import codeQr from '../assets/QRCODE.png'



const Auth = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


  const SignIn = async () => {
    try{
      await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
      console.error(err)
    }
  }

  const googleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider)
    } catch (err) {
      console.error(err)
    }
  }

  const logOut = async () => {
    try {
      await signInWithPopup(auth)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="loginBg flex flex-col justify-center items-center">
      <div className="bg-gray-800 h-[30rem] w-[60rem] pt-[3rem] px-[2rem] rounded-md grid grid-cols-10 gap-4">
        <div className="col-span-7 flex flex-col items-center">
          <h1 className='text-white font-medium text-2xl pb-2'>Welcome back!</h1>
          <p className='text-gray-500 text-base'>We're so excited to see you again!</p>
          <div className="flex place-self-start flex-col pt-5">
          <p className='text-gray-500 font-bold text-sm pb-2'>EMAIL OR PHONE NUMBER</p>
          <input type="text" className='bg-gray-1000 p-2 w-[30rem] rounded outline-none text-gray-500' />
          <p className='text-gray-500 font-bold text-sm pt-5 pb-2'>PASSWORD</p>
          <input type="text" className='bg-gray-1000 p-2 w-[30rem] rounded outline-none text-gray-500' />
          <p className='text-blue-400 text-sm pt-1 pb-8 hover:cursor-pointer hover:underline'>Forgot your password?</p>
          <button onClick={googleSignIn} className='p-2 w-[30rem] bg-purple-900 text-white font-medium hover:bg-purple-1000 transition-all rounded'>Log in</button>
          </div>
        </div>
  
        <div className="col-span-3 flex flex-col items-center">
          <img src={codeQr} className='h-[11rem] w-auto rounded-md' />
          <h1 className='text-white font-medium text-2xl pt-10'>Login With QR Code</h1>
          <p className='text-gray-500 text-base pt-2 text-center'>Scan this with the Discord Mobile app to Log in instantly</p>
          <p className='text-blue-400 text-sm hover:cursor-pointer hover:underline pt-4'>Or sign in with Passkey</p>

        </div>
      </div>
    </div>
  );
  
}

export default Auth

