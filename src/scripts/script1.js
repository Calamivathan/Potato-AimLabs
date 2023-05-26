var starttime;
        var fps = document.getElementById("fps");
        var startTime = Date.now();
        var frame = 0;
        var proper_hit=0;
        var n=0;
        var miss_hits=0;
        var score=0;
        
        function tick() {
            var time = Date.now();
            frame++;
            if (time - startTime > 1000) {
                fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(1);
                startTime = time;
                frame = 0;
            }
        window.requestAnimationFrame(tick);
        }
        tick();
        let cloneCount=1;



        function delete_hitbox() {
        while (n<1) {
            proper_hit++;
            n++;
        }
        const existingCount = document.querySelectorAll('.hit-box').length;
        if (existingCount >= 5) {
            const original1 = document.querySelector('.hit-box');
        return; // Don't clone if there are already 4 elements
        }
        const orignal_hit_box = document.getElementById('orignal-hit-box');
        orignal_hit_box.style.setProperty('display', 'none');
        const original = document.querySelector('.hit-box');
        const clone1 = original.cloneNode(true);
        const clone2 = original.cloneNode(true);
        cloneCount++;
        clone1.setAttribute('id', `box-${cloneCount}`);
        cloneCount++;
        clone2.setAttribute('id', `box-${cloneCount}`);
        clone1.style.setProperty('animation','appear 0.3s forwards');
        clone1.style.setProperty('--top', (0.5*Math.random()+0.25));
        clone1.style.setProperty('--left', (0.5*Math.random()+0.25));
        clone1.style.setProperty('display', 'flex');
        clone2.style.setProperty('animation','appear 0.3s forwards');
        clone2.style.setProperty('--top', (0.5*Math.random()+0.25));
        clone2.style.setProperty('--left', (0.5*Math.random()+0.25));
        clone2.style.setProperty('display', 'flex');
        if (remaining == 0) {
            
              }
        document.body.appendChild(clone1);
        setTimeout(function() {
            // code to be executed after 0.2 seconds
            document.body.appendChild(clone2);
        }, 200);
        

        clone1.addEventListener('click', () => {
            
            clone1.style.setProperty('animation','disappear 0.2s forwards');
            proper_hit++;
            setTimeout(() => {
            clone1.remove();
            },200);
        });


        clone2.addEventListener('click', () => {
           
            clone2.style.setProperty('animation','disappear 0.2s forwards');
            proper_hit++;
            setTimeout(() => {
            clone2.remove();
            },200);
        });
        }

        let total_click = 0;
        const body = document.querySelector('body');
        body.addEventListener('click', () => {
        total_click++;
        document.getElementById("screen-count").textContent = total_click;
        document.getElementById("hits").textContent = proper_hit;
        miss_hits=((total_click)-(proper_hit));
        score=((proper_hit*1000)-(miss_hits*250))
        document.getElementById("wrong_hits").textContent = miss_hits;
        document.getElementById("score_board").textContent = score;
  });
       function resetClickCount() {
        start();
        const orignal_hit_box = document.querySelector('.hit-box');
        orignal_hit_box.style.setProperty('display', 'flex');
        const appear_reset2 = document.querySelector('.play-again');
        appear_reset2.style.setProperty('display', 'none');
            total_click = -1;
            proper_hit=0;
            n=0;
            score=0;
            miss_hits=0;
            document.getElementById("score_board").textContent = score;
            document.getElementById("wrong_hits").textContent = miss_hits;
            document.getElementById("screen-count").textContent = total_click;
            const disappear_start = document.querySelector('.start-button');
            disappear_start.style.setProperty('display', 'none');
        }
        function changecolour_blue() {
            const colour_box = document.querySelector('.hit-box');
            colour_box.style.setProperty('background-image', 'linear-gradient(rgb(0, 255, 255),rgb(107, 151, 151))');
            colour_box.style.setProperty('background-image', 'null');
        }
        function changecolour_red() {
            const colour_box = document.querySelector('.hit-box');
            colour_box.style.setProperty('background-image', 'linear-gradient(rgb(255, 0, 0),rgb(151, 107, 107))');
            colour_box.style.setProperty('background-image', 'null');

        }
        function changecolour_green() {
            const colour_box = document.querySelector('.hit-box');
            colour_box.style.setProperty('background-image', 'linear-gradient(rgb(81, 255, 0),rgb(117, 151, 107))');
            colour_box.style.setProperty('background-image', 'null');

        }
        function changecolour_rainbow() {
            const colour_box = document.querySelector('.hit-box');
            colour_box.style.setProperty('background-image', 'url(https://media.tenor.com/up3D5zCwbUIAAAAM/slime-smiley.gif)');
        }
