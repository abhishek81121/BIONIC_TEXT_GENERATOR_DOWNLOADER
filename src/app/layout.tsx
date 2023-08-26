'use client'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { type } from 'os'
import { useEffect, useRef, useState } from 'react'
import { textVide } from 'text-vide'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const[texttoconvert,setText]=useState("");
  var file=new Blob([textVide(texttoconvert)],{type : 'text/plain'});
  useEffect(()=>{file=new Blob(["done"],{type : 'text/plain'})},[texttoconvert]);
  return (
    <html lang="en">
      <body className={inter.className}><textarea  onChange={(e)=>{setText(e.target.value);}}></textarea>
      <div   dangerouslySetInnerHTML={{__html : textVide(texttoconvert)}}></div>
      <a download="bionic.html"  href={URL.createObjectURL(file)}>
      <button>
               Download
            </button></a>
            
      </body>
    </html>
  )
}
