let movies = [
    {
      name: "telly adda",
      des: "apnader jonnoi amra",
      image: "slider1.jpg",
    },
    {
      name: "telly adda",
      des: "boooooom ",
      image: "slider2.jpeg",
    },
    {
      name: "telly adda",
      des: " booooooooooom ",
      image: "slider3.png",
    },
  
    {
      name: "telly adda",
      des: " booooooooooooom ",
      image: "slider4.jpg",
    },
  
    {
      name: "utsho here",
      des: "thank you ",
      image: "slider5.jpeg",
    },
  ];
  
  const carousel = document.querySelector(".carousel");
  let sliders = [];
  
  let slideIndex = 0; // track the current slide
  
  const createSlide = () => {
    if (slideIndex >= movies.length) {
      slideIndex = 0;
    }
  
    // create DOM Elements
    let slide = document.createElement("div");
    let imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p = document.createElement("p");
  
    // attaching all element
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);
  
    // setting up images
    imgElement.src = movies[slideIndex].image;
    slideIndex++;
  
    // setting elements classnames
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";
  
    sliders.push(slide);
  
    if (sliders.length) {
      sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${
        30 * (sliders.length - 2)
      }px)`;
    }
  };
  
  for (let i = 0; i < 3; i++) {
    createSlide();
  }
  
  setInterval(() => {
    createSlide();
  }, 3000);
  
