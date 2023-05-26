let startTime2;
      let remainingTime = 15000; // 45 seconds in milliseconds
      let timerInterval;
      var remaining;
      var seconds;
      function start() {
        startTime2 = new Date();
        timerInterval = setInterval(updateTimer, 10);
      }

      function updateTimer() {
        const elapsed = new Date() - startTime2;
        remaining = Math.max(remainingTime - elapsed, 0);
        seconds = Math.floor(remaining / 1000);
        const milliseconds = Math.floor((remaining % 1000) / 10);
        document.getElementById("timer").textContent = `${pad(
          seconds
        )}:${pad(milliseconds)}`;
        if(remaining==0)
            {
                const balls = document.querySelectorAll('.hit-box');
                balls.forEach(ball => {
                ball.classList.add('disappear');
            });
            setTimeout(() => {
              balls.forEach(ball => {
                if (ball.id !== 'orignal-hit-box') {
                  ball.remove();
                }
              });
            }, 1);
            reset_button();
          }
        
      }

      function pad(number) {
        return number.toString().padStart(2, "0");
      }
      function reset_button()
      {
            const appear_reset = document.querySelector('.play-again');
            appear_reset.style.setProperty('display', 'flex');
      }