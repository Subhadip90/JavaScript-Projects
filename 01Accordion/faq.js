const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
// console.log(accordianBody);



const faqs = [];

function showFaq(element, index) {

  if (document.querySelectorAll('.faq p')[index].style.display == 'none') {
    document.querySelectorAll('.faq p')[index].style.display = 'block';
  }
  else {
    document.querySelectorAll('.faq p')[index].style.display = 'none';
  }
}

function createFaq() {

  // creting elements

  let element = document.createElement('div');
  let header = document.createElement('div');
  let title = document.createElement('h3');
  let btn = document.createElement('div');
  let ans = document.createElement('p');

  // setting value to the elements

  element.setAttribute('class', 'faq');
  header.setAttribute('class', 'faq_header');
  btn.setAttribute('class', 'show_btn');
  ans.setAttribute('class', 'hidden');
  btn.innerText = '+';
  btn.style.display = 'flex';
  btn.style.justifyContent = 'center';
  btn.style.alignItems = 'center';


  let myElement = {
    element, title, header, btn, ans
  }
  return myElement;
}


// adding elements

faqData.forEach(element => {
  let faqMain = createFaq();
  faqMain.title.innerHTML = element.question;
  faqMain.ans.innerHTML = element.answer;
  faqMain.element.setAttribute('id', element.id);

  //appending elements

  accordianBody.append(faqMain.element);
  faqMain.element.append(faqMain.header);
  faqMain.header.append(faqMain.title);
  faqMain.header.append(faqMain.btn);
  faqMain.element.append(faqMain.ans);
});



function btnStatusUpdate() {
  let btns = document.querySelectorAll(".show_btn");

  // console.log(btns);
  //loop through all buttons

  btns.forEach((element, index) => {
    element.addEventListener("click", () => {
      showFaq(element, index);
    });
  });

}


btnStatusUpdate();