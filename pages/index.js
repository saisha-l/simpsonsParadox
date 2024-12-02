import { useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    // Initialize Scrolly Video when the component mounts
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/scrolly-video@latest/dist/scrolly-video.js';
    script.async = true;
    script.onload = () => {
      new window.ScrollyVideo({
        scrollyVideoContainer: 'scrolly-video',
        src: './simpsonScroll.mp4',
        full: false,
        sticky: false,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" />
      </Head>

      <main>
          <div id="scrolly-video" className={styles.scrollyVideo}></div>
          <div className={styles.textContent}>
          </div>
            <div className={styles.grid}>
            
             <div className={styles.textBox}>
             <h2 className={styles.simpsonFont2} style={{ fontSize: '30px', marginBottom: '40px'}}>
            <em> A quick run down on..</em>
             </h2>
            <img src="./simpParaHeader.png" alt="Simpson's Paradox" style={{ maxWidth: '80%', height: 'auto',}} className={styles.simpParaHeader} />
            
              <h1 className={styles.simpsonFont} style={{ fontSize: '50px', marginBottom: '40px'}}>
              What is Simpson’s Paradox?
              </h1>
              <h3 className={styles.normalFont1} >
              Technical Definition:
              </h3>
              <p>
              Simpson’s Paradox is a statistical phenomenon where an association between two variables in a population emerges, disappears or reverses when the population is divided into subpopulations. 
              </p>
              <h3 className={styles.normalFont1} >
              Simplified Definition:
              </h3>
              <p>
              Simpson’s Paradox is a statistical concept when a trend you see in a big group changes/flips when you break the big group into smaller parts.
              </p>
              <h1 className={styles.simpsonFont} style={{ fontSize: '50px', marginBottom: '40px'}}>
              Why does it matter?
              </h1>
              <p>
              Simpson’s paradox is critical when thinking about fair comparisons. In the situation of medical treatments, specific groups could be overlooked while looking at the broad results (i.e. marginalized communities, older patients etc.) causing less equity in medical care. It can also be really important when trying to understand misinformation, since media or other sources might try to sway data by not showing us the entire story.
              </p>
              </div>
            </div>
      </main>
      <footer className={styles.footer}>
  <div className={styles.poweredBy}>
    <span>Powered by</span>
    <a
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
    </a>
  </div>
  <div className={styles.notice}>
    <p>Fair Use Notice: This site is for educational purposes only. All materials, including images, videos, and other media, are used solely for non-commercial, informational,
       and educational purposes in accordance with the principles of fair use under copyright law. 
       I do not claim ownership of any of the images, videos, or other content featured on this site unless explicitly stated. 
       All rights to the content remain with their respective copyright owners. If you are the copyright owner of any material featured here and believe 
       its use does not fall under fair use, please contact me, and I will address your concerns promptly.</p>
  </div>
</footer>
    

      <style jsx>{`
        .${styles.scrollyContainer} {
          padding-top: 10000px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin: 2rem auto;
          max-width: 800px;
          text-align: center;
          background-color: transparent;
        }

        .${styles.scrollyVideo} {
          width: 50vh;
          height: 70vh; /* Adjust height as needed */
          margin-bottom: 2rem;
          background-color: #000; /* Placeholder color until video loads */
          z-index: 5; /* Ensure this is lower than the image */
          position: relative; /* Ensure z-index works */
          display: block;
          margin: 100px auto 0 auto; 
          background-color: transparent;
        }

        .${styles.textContent} {
          padding: 1rem;
          background: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
      `}</style>
    </div>
  );
}
