import React from "react"
import { SignIn } from "@clerk/nextjs"


export default async function Home(){
  return (
    <div className="flex justify-center items-center h-screen">
      <SignIn/>
    </div>

  )
}