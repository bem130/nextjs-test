import styles from '@/styles/Home.module.css'

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
                <button id="loadBtn" onClick={() => {alert("a")}}>load file - ASCII STL</button><br/>
                <canvas id="imgOut" className={styles.canvas}></canvas>
                <textarea id="arrayOut" readonly></textarea>
                <textarea id="nctoOut" readonly></textarea>
            </main>
            <script src="./3d.js"></script>
            <script src="./stl.js"></script>
        </>
    )
}