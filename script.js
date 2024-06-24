document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const counters = document.querySelectorAll(".counter-container");
    const counterTexts = [
        document.querySelector("#counter1 .counter"),
        document.querySelector("#counter2 .counter"),
        document.querySelector("#counter3 .counter")
    ];

    function switchCounter(index) {
        counters.forEach((counter, i) => {
            if (i === index) {
                counter.classList.add('active');
                counter.classList.remove('inactive');
            } else {
                counter.classList.add('inactive');
                counter.classList.remove('active');
            }
        });
        currentIndex = index;

        // Start counting for the current counter
        if (currentIndex === 0) {
            startCounter1();
        } else if (currentIndex === 1) {
            startCounter2();
        } else if (currentIndex === 2) {
            startCounter3();
        }
    }

    function startCounter(counterText, target, targetCount, interval, callback) {
        let count = 0;
        const intervalId = setInterval(() => {
            count++;
            counterText.textContent = `${count} ${target}`;
            if (count === targetCount) {
                clearInterval(intervalId);
                setTimeout(callback, 1000); // Switch to next counter after a short delay
            }
        }, interval);
    }

    function startCounter1() {
        startCounter(counterTexts[0], 'policy iterations created', 100, 100, () => switchCounter(1));
    }

    function startCounter2() {
        startCounter(counterTexts[1], 'grids analyzed', 34, 100, () => switchCounter(2));
    }

    function startCounter3() {
        startCounter(counterTexts[2], 'years of historical rain data incorporated', 60, 100, () => switchCounter(0));
    }

    // Start with the first counter
    switchCounter(0);
});
