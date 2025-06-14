const reactionBox = document.getElementById('reaction-box');
const startBtn = document.getElementById('start-btn');
const resultDiv = document.getElementById('result');

let waiting = false;
let startTime = 0;
let timeoutId = null;

function resetGame() {
    reactionBox.style.background = '#ddd';
    reactionBox.textContent = '시작 버튼을 누르세요';
    resultDiv.textContent = '';
    waiting = false;
    startBtn.disabled = false;
}

startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    reactionBox.style.background = '#f44336';
    reactionBox.textContent = '초록색이 될 때까지 기다리세요...';
    resultDiv.textContent = '';
    const randomDelay = Math.floor(Math.random() * 2000) + 1000; // 1~3초
    waiting = false;
    timeoutId = setTimeout(() => {
        reactionBox.style.background = '#4caf50';
        reactionBox.textContent = '지금 클릭!';
        startTime = Date.now();
        waiting = true;
    }, randomDelay);
});

reactionBox.addEventListener('click', () => {
    if (!startBtn.disabled) return; // 시작 전 클릭 무시
    if (!waiting) {
        // 아직 초록색이 아님
        clearTimeout(timeoutId);
        reactionBox.style.background = '#ddd';
        reactionBox.textContent = '너무 빨랐어요! 다시 시작하세요.';
        resultDiv.textContent = '';
        startBtn.disabled = false;
    } else {
        // 반응속도 측정
        const reactionTime = Date.now() - startTime;
        reactionBox.style.background = '#ddd';
        reactionBox.textContent = '시작 버튼을 누르세요';
        resultDiv.textContent = `반응속도: ${reactionTime} ms`;
        waiting = false;
        startBtn.disabled = false;
    }
});

// 페이지 로드시 초기화
resetGame();