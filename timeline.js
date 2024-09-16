//HTML
{/* <div class="container px-4 pt-7">
<ul class="timeline-list">

</ul>
<p class="text-center text-secondary-300 fs-7 fw-bold mb-0">只要幾步驟 開始屬於你的 AI 運動計畫</p>
</div> */}

//true代表已经完成，false代表未完成
const timeline = [
  { 1: true },
  { 2: true },
  { 3: false },
  { 4: false },
  { 5: false },
  { 6: false },
  { 7: false }
]
const createTimeline = () => {
  const timelineList = document.querySelector('.timeline-list');
  timeline.forEach((item, index) => {
    const li = document.createElement('li');
    const circle = document.createElement('div');
    const line = document.createElement('span');
    li.classList.add('timeline-item');
    circle.classList.add('timeline-circle');
    line.classList.add('timeline-line');
    if(item[index+1]) {
      circle.classList.add('timeline-circle-active');
      line.classList.add('timeline-line-active');
    }else {
      circle.classList.add('timeline-circle-original');
      line.classList.add('timeline-line-original');
    }
    if(index !== 0) {
      li.appendChild(line);
    }
    circle.textContent = index + 1;
    timelineList.appendChild(li);
    li.appendChild(circle);
  })
}

addEventListener('DOMContentLoaded', () => {
  createTimeline();
})