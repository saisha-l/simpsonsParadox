import { useState, useEffect } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

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

  const handleMargeClick = () => {
    setShowCorrect(true);
    setShowIncorrect(false);
  };

  const handleSkinnerClick = () => {
    setShowCorrect(false);
    setShowIncorrect(true);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Chewy&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Parkinsans:wght@300..800&display=swap" />
      </Head>
      <main>
        <div id="scrolly-video" className={styles.scrollyVideo}></div>
        <div className={styles.textContent}></div>
        <div className={styles.grid}>
          <div className={styles.textBox}>
            <h2 className={styles.simpsonFont2} style={{ fontSize: '30px', marginBottom: '40px' }}>
              <em> A quick run down on..</em>
            </h2>
            <img src="./simpParaHeader.png" alt="Simpson's Paradox" style={{ maxWidth: '80%', height: 'auto' }} className={styles.simpParaHeader} />
            <h1 className={styles.simpsonFont} style={{ fontSize: '50px', marginBottom: '40px' }}>
              What is Simpson’s Paradox?
            </h1>
            <h3 className={styles.normalFont1}>
              Technical Definition:
            </h3>
            <p className={styles.normalFont2}>
              Simpson’s Paradox is a statistical phenomenon where an association between two variables in a population emerges, disappears or reverses when the population is divided into subpopulations.
            </p>
            <h3 className={styles.normalFont1}>
              Simplified Definition:
            </h3>
            <p className={styles.normalFont2}>
              Simpson’s Paradox is a statistical concept when a trend you see in a big group changes/flips when you break the big group into smaller parts.
            </p>
            <h1 className={styles.simpsonFont} style={{ fontSize: '50px', marginBottom: '40px' }}>
              Why does it matter?
            </h1>
            <p className={styles.normalFont2}>
              Simpson’s paradox is critical when thinking about fair comparisons. In the situation of medical treatments, specific groups could be overlooked while looking at the broad results (i.e. marginalized communities, older patients etc.) causing less equity in medical care. It can also be really important when trying to understand misinformation, since media or other sources might try to sway data by not showing us the entire story.
            </p>
            <h1 className={styles.simpsonFont} style={{ fontSize: '50px', marginBottom: '40px' }}>
              Case Study
            </h1>
            <p className={styles.normalFont2}>
              Let's take a look at an example of Simpson's Paradox, so we can better understand it.
            </p>
            <p className={styles.normalFont2}>
              At Springfeild elementary school, Principal Skinner wants to create a report on student's grades in Math and English. The tables below contain data on Bart and Lisa's grades in both classes.
            </p>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Bart's Scores</th>
                    <th>Lisa's Scores</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Math Score (Out of 100) </td>
                    <td>90 </td>
                    <td>50</td>
                  </tr>
                  <tr>
                    <td>English Score (Out of 100) </td>
                    <td>40</td>
                    <td>80</td>
                  </tr>
                </tbody>
              </table>

              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Combined Averages</th>
                    <th>Bart</th>
                    <th>Linda</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td></td>
                    <td>65</td>
                    <td>65</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className={styles.normalFont2}>
              By just looking at the combined averages, Principal Skinner concludes that Bart and Lisa are equally good students at both subjects.
            </p>
            <p className={styles.normalFont2}>
              Marge Simpson (Lisa and Bart's Mom) argues that they both excel in different subjects, and they are not eually good students at each subject.
            </p>

            <p className={styles.normalFont2}>
              Who is right in this case?
            </p>
            <div className={styles.buttonContainer}>
              <button className={styles.button} onClick={handleMargeClick}>Marge</button>
              <button className={styles.button} onClick={handleSkinnerClick}> Principal Skinner</button>
            </div>
            {showCorrect && (
              <div className={styles.correctBox}>
                Correct
                <p className={styles.normalFont2}>
                  If you take a look at the scores for Math and English, Lisa actually did better then Bart in Math and Bart did better than Lisa in English, so they are not equally good in both subjects.
                </p>
              </div>
            )}
            {showIncorrect && (
              <div className={styles.incorrectBox}>
                Incorrect
                <p className={styles.normalFont2}>
                If you take a look at the scores for Math and English, Lisa actually did better then Bart in Math and Bart did better than Lisa in English, so they are not equally good in both subjects.
                </p>
              </div>
            )}
            <h1 className={styles.simpsonFont} style={{ fontSize: '50px', marginBottom: '40px' }}>
              Sources
            </h1>
            <img src="./citations.png" alt="citations" style={{ maxWidth: '40%', height: 'auto', marginTop: '30px' }} className={styles.simpParaHeader} />
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