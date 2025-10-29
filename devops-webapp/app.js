// Simple click counter demo
let count = 0;
const btn = document.getElementById('btn');
const p = document.getElementById('count');

btn.addEventListener('click', () => {
  count += 1;
  p.textContent = `Clicked ${count} times`;
});
