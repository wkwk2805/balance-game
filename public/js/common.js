let staticData = [
  {
    question: "?",
    answer1: "셀모임",
    answer2: "축구"
  },
  {
    question: "정착하는데 영향을 준 곳은?",
    answer1: "셀",
    answer2: "새가족팀"
  },
  {
    question: "매일 해야한다면?",
    answer1: "말씀 10장 읽기",
    answer2: "30분 기도하기"
  },
  {
    question: "수련회에서 했으면 하는것은?",
    answer1: "오래도록 기도하기",
    answer2: "오래도록 찬양하기"
  },
  {
    question: "새가족팀 하면 떠오르는 것은?",
    answer1: "교육",
    answer2: "교제"
  },
  {
    question: "셀모임 하면 떠오르는 것은?",
    answer1: "나눔",
    answer2: "말씀"
  },
  {
    question: "만약 밥 한끼 식사를 같이 할수 있다면?",
    answer1: "바울",
    answer2: "베드로"
  },
  {
    question: "만약 성경의 기적을 볼수 있다면?",
    answer1: "홍해의 기적",
    answer2: "하늘의 불 내린 기적"
  },
  {
    question: "공동체의 분위기는?",
    answer1: "가족같은",
    answer2: "친구같은"
  }
];
/* let questCon = document.getElementsByClassName("question-container")[0];
let html = ``;
for (let i = 0; i < 10; i++) {
  html += `
        <div class="question" id="q${i}">
          <input type="text" name="question" placeholder="질문" />
          <input type="text" name="answer1" placeholder="선택지1" />
          <input type="text" name="answer2" placeholder="선택지2" />
        </div>
        `;
}
questCon.innerHTML = html; */
let containers = document.getElementsByClassName("container");
let choices = document.getElementsByClassName("choice");
let ts = document.getElementsByClassName("t");
let texts = document.getElementsByClassName("text");
let checkImgs = document.getElementsByClassName("checkImg");
const changeSize = () => {
  for (let container of containers) {
    container.style.height = window.innerHeight + "px";
  }
  for (let choice of choices) {
    choice.style.height = window.innerHeight / 2 + "px";
  }
  for (let text of texts) {
    text.style["padding-bottom"] = window.innerHeight / 3 + "px";
  }
  for (let t of ts) {
    t.style["padding-top"] = window.innerHeight / 8 + "px";
  }
  for (let img of checkImgs) {
    img.style.width = window.innerHeight / 2 + "px";
  }
};
// +1 (앞으로) -1 (뒤로)
const move = number => {
  let active = document.getElementsByClassName("active")[0];
  let id = active.id;
  let mvId = document.getElementById(id * 1 + number + "");
  let con = document.getElementsByClassName("container");
  for (let c of con) {
    c.parentElement.classList.add("hide");
    c.parentElement.classList.remove("active");
  }
  mvId.classList.remove("hide");
  mvId.classList.add("active");
};
let timeout;
const check = e => {
  let checks = e.getElementsByClassName("check");
  if (checks[0].classList.value.indexOf("check-active") > -1) {
    checks[0].classList.remove("check-active");
    clearTimeout(timeout);
    return;
  }
  checks[0].classList.add("check-active");
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    move(1);
  }, 2500);
};
const makeTable = arr => {
  let html = ``;
  for (let i in arr) {
    html += `
          <div class="${i == 0 ? "active" : "hide"}" id="${i}">
            <table class="container">
              <colgroup>
                <col width="33%" />
                <col width="33%" />
                <col width="33%" />
              </colgroup>
              <tbody>
                <tr>
                  <td onclick="check(this)">
                    <div class="choice f">
                      <div class="check">
                        <img src="./images/check.png" class="checkImg" />
                      </div>
                      <div class="t">
                        ${arr[i].answer1}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="text">
                      ${arr[i].question}
                    </div>
                  </td>
                  <td onclick="check(this)">
                    <div class="choice s">
                      <div class="check">
                        <img src="./images/check.png" class="checkImg" />
                      </div>
                      <div class="t">
                        ${arr[i].answer2}
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>`;
  }
  document.getElementsByTagName("header")[0].innerHTML = html;
  document.getElementById("audio").style.display = "none";
};
document.getElementById("audio").addEventListener("play", () => {
  makeTable(staticData);
  changeSize();
});
/* const submit = () => {
  let arr = [];
  let qs = questCon.getElementsByClassName("question");
  for (let q of qs) {
    let obj = {};
    let inputs = q.getElementsByTagName("input");
    for (let input of inputs) {
      if (input.value && input.value !== "") {
        obj[input.name] = input.value;
      } else {
        obj = undefined;
      }
    }
    if (obj) {
      arr.push(obj);
    }
  }
  makeTable(arr);
  changeSize();
}; */
addEventListener("resize", changeSize);
