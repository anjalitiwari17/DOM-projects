const reviews = [
    {
      id: 1,
      name: "Anshita",
      job: "Data Analyst",
      img: "./G2.jpeg",
      text: "Data analysts are in great demand across all industries and there is a good career path for those who want to move up the professional ladder. Many top organisations require data analysts to help them to make better use of their data or provide the right insights that will help them in their business activities.",
    },
    {
      id: 2,
      name: "Rishab Singh",
      job: "Full stack developer ",
      img: "./boy1.jpeg " ,
      text: "Full stack development is in high demand because businesses seek professionals who can handle both front-end and back-end development. This versatility streamlines the development process, making full stack developers indispensable in the tech industry.",
    },
    {
      id: 3,
      name: "Naincy",
      job: "Web developer",
      img: "./G3.jpeg",
      text: "Web development comprises creating, maintaining, and coding websites, with three main specializations: front-end, back-end, and full-stack development. Web development is an excellent career choice with high rates of pay and a future-proof profession.",
    },
    {
      id: 4,
      name: "Amrita",
      job: "Software Tester",
      img: "girl1.jpeg",
      text: "Software testing is the process of checking the quality, functionality, and performance of a software product before launching. To do software testing, testers either interact with the software manually or execute test scripts to find bugs and errors, ensuring that the software works as expected",
    },
  ];

  const img = document.getElementById("person-img");
  const author = document.getElementById("author");
  const job = document.getElementById("job");
  const info = document.getElementById("info");

  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const randomBtn = document.querySelector(".random-btn");

  let currentItem = 0;

  window.addEventListener("DOMContentLoaded", function () {
    showPerson();
  });

  function showPerson() {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

  nextBtn.addEventListener("click", function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
      currentItem = 0;
    }
    showPerson();
  });

  prevBtn.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
      currentItem = reviews.length - 1;
    }
    showPerson();
  });

  randomBtn.addEventListener("click", function () {
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson();
  });