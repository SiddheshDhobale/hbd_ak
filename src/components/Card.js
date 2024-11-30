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
      
      <div className="paper">
        <p className="p1">1 Drag the papers dear...</p>
      </div>
    </>
  );
}
