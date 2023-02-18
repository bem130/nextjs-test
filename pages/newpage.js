import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <head>
            <title>Neknaj 3D Library - Samples</title>
            <meta property="og:description" content="Neknaj 3D Library - STLファイルを表示するサンプル"/>
            <meta property="og:title" content="Neknaj 3D Library - Samples"/>
      </head>
      <main>
            <h1>STLファイルを表示するサンプルです</h1>
            <br/>
            <button onclick="localfile()">load file - ASCII STL</button><br/>
            <canvas id="imgOut"></canvas>
            <textarea id="arrayOut" readonly></textarea>
            <textarea id="nctoOut" readonly></textarea>
      </main>
    </>
  )
}
