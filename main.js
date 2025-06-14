// 타이핑 애니메이션 효과
window.addEventListener('DOMContentLoaded', () => {
  const text = '안녕하세요\n박한빈의 portfolio 사이트 입니다.';
  const target = document.getElementById('main-typing');
  let i = 0;
  function typing() {
    if (i < text.length) {
      if (text[i] === '\\' && text[i+1] === 'n') {
        target.innerHTML += '<br>';
        i += 2;
      } else {
        target.innerHTML += text[i];
        i++;
      }
      setTimeout(typing, 70);
    }
  }
  typing();
});
