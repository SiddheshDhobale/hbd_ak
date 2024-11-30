import React, { useEffect } from "react";
import './Card.css';

export default function Card() {
  let highestZ = 1;

  class Paper {
    holdingPaper = false;
    mouseTouchX = 0;
    mouseTouchY = 0;
    currentPaperX = 0;
    currentPaperY = 0;
    rotation = Math.random() * 30 - 15;

    init(paper) {
      const onMove = (e) => {
        let clientX, clientY;

        if (e.type.startsWith('touch')) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          clientX = e.clientX;
          clientY = e.clientY;
        }

        if (this.holdingPaper) {
          const deltaX = clientX - this.mouseTouchX;
          const deltaY = clientY - this.mouseTouchY;

          this.currentPaperX += deltaX;
          this.currentPaperY += deltaY;

          paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;

          this.mouseTouchX = clientX;
          this.mouseTouchY = clientY;
        }
      };

      const onStart = (e) => {
        e.preventDefault();
        this.holdingPaper = true;

        paper.style.zIndex = highestZ;
        highestZ += 1;

        if (e.type.startsWith('touch')) {
          this.mouseTouchX = e.touches[0].clientX;
          this.mouseTouchY = e.touches[0].clientY;
        } else {
          this.mouseTouchX = e.clientX;
          this.mouseTouchY = e.clientY;
        }
      };

      const onEnd = () => {
        this.holdingPaper = false;
      };

      // Event Listeners for both mouse and touch events
      paper.addEventListener('mousedown', onStart);
      paper.addEventListener('touchstart', onStart);

      document.addEventListener('mousemove', onMove);
      document.addEventListener('touchmove', onMove);

      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchend', onEnd);
    }
  }

  const playAudio=()=>
  {
    const audio = new Audio('\images\hbd_song.mp3');  // Path to your audio file
    audio.play();
  }
  
  useEffect(() => {
    //playAudio()
    const papers = Array.from(document.querySelectorAll('.paper'));
    papers.forEach(paper => {
      const p = new Paper();
      p.init(paper);
    });
  }, []);

  return (
    <>
      <div className="paper heart">
      
      {/* <audio autoPlay loop>
        <source src="\images\hbd_song.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio> */}

      </div>
      <div className="paper image">
        <p>15 Made with ❤️ by Siddhesh</p>
        </div>

      <div className="paper image">
        <p>14 Wish this love will keep on increasing !</p>
        <p>I love you ♾️ Aishwarya !&#128157;</p>
        <img src="./images/img10.jpeg" alt="1" />
      </div>

    
      <div className="paper image">
        <p style={{fontSize:'8px'}}> 13 Happy Birthday&#127874; to you love !&#128157; </p>
        <p style={{fontSize:'8px'}}> Every day with you feels like a beautiful </p>
        <p style={{fontSize:'8px'}}>adventure, and I’m so grateful for the joy </p>
        <p style={{fontSize:'8px'}}> and love you bring into my world. You make </p>
        <p style={{fontSize:'8px'}} > everything brighter just by being yourself. </p>
        <p style={{fontSize:'8px'}}> I’m lucky to call you mine, and I can’t wait</p>
        <p style={{fontSize:'8px'}}> to create even more memories together. </p>
        <p style={{fontSize:'8px'}}> Here’s to you, my heart, today and always! </p>
      </div>
      
      <div className="paper image">
        <p>12 I Just pray to God these hands </p>
        <p>will never have to let go&#129309;</p>
        <img src="./images/img8.jpeg" alt="1" />
      </div>
      
      <div className="paper image">
        <p>11 Your Sweet Smile &#128152;</p>
        <img src="./images/img9.jpeg" alt="1" />
      </div>
      
      <div className="paper image">
        <p>10 Your charm&#128171;</p>
        <img src="./images/img7.jpeg" alt="1" />
      </div>
       
      <div className="paper image">
        <p>9 Your Beauty&#128525;</p>
        <img src="./images/img6.jpeg" alt="1" />
      </div>

      <div className="paper image">
        <p>8 The Cute child in you &#128518;</p>
        <img src="./images/img5.jpeg" alt="1" />
      </div>
       
      <div className="paper image">
        <p>7 The fights&#128545; and the care&#128519;  </p>
        <img src="./images/img4.jpeg" alt="2" />
      </div>
      
      <div className="paper image">
        <p>6 The countless video calls &#128513;</p>
        <img src="./images/img3.jpeg" alt="2" />
      </div>
     
      <div className="paper image">
        <p>5 In the second meet, the magic happened</p>
        <p>And you became mine❤️</p>
        <img src="./images/img2.jpeg" alt="3" />
      </div>
       
       <div className="paper red">
        <p className="p1">4 It was the "Animal" who encouraged us</p>
        <p className="p2">to fall in love 😍&#128513;</p>
         <img src="./images/img1.jpeg" alt="2" />
      </div> 
     
       <div className="paper">
        <p className="p1"> 3Location shared with friends</p>
        <p className="p1">To stay safe from this unknown person<span >&#128528;</span></p>
      </div>
      <div className="paper">
        <p className="p1">2 7th October 2023</p>
        <p className="p1">What an amazing night it was<span style={{ color: "red" }}>❤️</span></p>
      </div> 
      <div className="paper">
        <p className="p1">1 Drag the papers dear...</p>
      </div>
    </>
  );
}
