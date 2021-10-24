$(document).ready(function () {
  console.log("ready!");
  const applicationState = {
    header: "JESSE LANGFORD",
    headerLinks: [
      { title: "Home", section: "#home" },
      { title: "About", section: "#about" },
      { title: "Strengths", section: "#services" },
      { title: "Experience", section: "#experience" },
      { title: "Portfolio", section: "#portfolio" },
      { title: "Blogs", section: "#blogs" },
    ],
    infoTitle: "I'M JESSE LANGFORD",
    infoDescription: "GOLF INSTRUCTOR TURNED FULL STACK DEVELOPER",
    aboutParagraph:
      "My name is Jesse Langford, a Full Stack Developer based in Hong Kong, 4 years ago I left my job teaching golf in Beijing to pursue my passion for writing code. Since then I have designed, implemented and maintained numerous web applications and systems integrations.",
    aboutInfoList: [
      { label: "EMAIL", value: "jesselangford472@gmail.com" },
      { label: "LOCATION", value: "Sai Ying Pun, Hong Kong" },
    ],
    socials: [
      {
        href: "https://github.com/JWLangford",
        title: "Github",
        icon: "fa fa-github",
      },
      {
        href: "https://www.linkedin.com/in/jessewlangford/",
        title: "Linkedin",
        icon: "fa fa-linkedin",
      },
      {
        href: "mailto:jesselangford472@gmail.com",
        title: "Email",
        icon: "fa fa-envelope",
      },
      {
        href: "https://stackoverflow.com/users/8101284/j-langford?tab=profile",
        title: "Stack Overflow",
        icon: "fa fa-stack-overflow",
      },
      {
        href: "https://jesse-94998.medium.com/",
        title: "Blogs",
        icon: "fa fa-medium",
      },
      {
        href: "https://www.codementor.io/@jesselangford472?refer=badge",
        title: "Codementor",
        icon: "fa fa-laptop",
      },
    ],
    skills: [
      { title: "Javascript", percent: "85" },
      { title: "Go", percent: "80" },
      { title: "React Js", percent: "75" },
      { title: "React Native", percent: "70" },
    ],
    strengths: [
      {
        title: "User Interfaces",
        description:
          "Created engaging and efficient user interfaces with React and React Native",
        icon: "fa fa-tv",
      },
      {
        title: "API Development",
        description:
          "Built fast and scalable APIs using Golang,  Node.js and AWS Lambda",
        icon: "fa fa-share-alt",
      },
      {
        title: "Content Creation",
        description:
          "Wrote technical blogs, API documentation and other helper assets",
        icon: "fa fa-file-alt",
      },
      {
        title: "Volunteering",
        description: "Volunteer at local coding schools for children",
        icon: "fa fa-hands-helping",
      },
    ],
    experience: [
      {
        image: "1.jpg",
        date: "June 2015 - May 2016",
        title: "PGA Golf Instructor",
        actions: [
          "Conducted individual and group golf lessons for members.",
          "Assisted in the creation and distribution of promotional content on social media and in print.",
        ],
      },
      {
        image: "2.jpg",
        date: "March 2016 - August 2016",
        title: "Apprenticeship Software Developer",
        actions: [
          "Gained tactical knowledge about how to understand customer problems and create software solutions.",
          "Learned through doing by building apps individually and collaboratively with pair programming and test-driven development.",
        ],
      },
      {
        image: "3.jpg",
        date: "November 2016 - Present",
        title: "Full-Stack Developer",
        actions: [
          "Created industry leading user interfaces with React JS",
          "Built iOS and Android applications using React Native",
          "Constructed fast and scalable back end APIs using Golang and AWS Lambda.",
        ],
      },
    ],
    portfolio: [
      {
        title: "PassKit Portal",
        href: "https://app.passkit.com",
        image: "https://jesselangford-cdn.s3.amazonaws.com/images/portal-2.png",
      },
      {
        title: "Loopy Loyalty",
        href: "https://app.loopyloyalty.com/",
        image:
          "https://jesselangford-cdn.s3.amazonaws.com/images/loopy-loyalty-2.png",
      },
      {
        title: "Lucid Backgrounds",
        href: "https://lucid-backgrounds.com",
        image: "https://jesselangford-cdn.s3.amazonaws.com/images/lucid-1.png",
      },
    ],
    blogs: [
      {
        title: "Validate Your React App's User Session a Focus Event Listener",
        image: "10.jpeg",
        href: "https://javascript.plainenglish.io/validate-your-apps-session-on-focus-892f610f7e23",
        date: "October 17, 2010",
        description:
          "Recently I’ve been working on upgrading the security of my web applications. One of the easiest security features to add is a robust Content-Security-Policy.",
      },
      {
        title: "Testing Material UI Forms with React-Testing-Library",
        image: "9.png",
        href: "https://javascript.plainenglish.io/testing-material-ui-forms-with-react-testing-library-50a9d4d300f2",
        date: "May 4, 2021",
        description:
          "Test cases can be difficult to write when dealing with forms. I have found this especially difficult with my preferred UI library: Material UI",
      },
      {
        title: "Adding Anti-Corruption-Layers to Your Web Application",
        image: "7.jpg",
        href: "https://jesse-94998.medium.com/adding-anti-corruption-layers-to-your-web-application-cfb530e04193",
        date: "April 14, 2021",
        description:
          "If the asynchronous data you're receiving is difficult to work with or needs sanitizing, then consider adding an anti-corruption layer to your app.",
      },

      {
        title: "3 Parallels Between Web Development and Golf Instruction",
        image: "6.png",
        href: "https://jesse-94998.medium.com/3-parallels-between-web-development-and-golf-instruction-9a09fcabade",
        date: "April 4, 2021",
        description:
          "Before I became a web developer, I was a golf instructor.",
      },

      {
        title: "Enhance your input fields with wait logic",
        image: "1.jpg",
        href: "https://jesse-94998.medium.com/enhance-your-input-fields-with-wait-logic-eedbb5b834f1",
        date: "February 11, 2021",
        description:
          "Input fields that wait for a user to finish typing before performing an action are common feature in web applications.",
      },

      {
        title: "Reusable React Permission HOC",
        image: "2.jpg",
        href: "https://jesse-94998.medium.com/reusable-react-permission-hoc-b735b51986c1",
        date: "February 5, 2021",
        description:
          "I wanted to share a design pattern I use to manage what certain users can or cannot see inside the React applications I build",
      },

      {
        title: "Building reusable react hooks with generics",
        image: "3.jpg",
        href: "https://jesse-94998.medium.com/building-reusable-react-hooks-with-generics-a73ebedd40de",
        date: "January 2, 2021",
        description:
          "In my previous post, I showed a simple react hook that makes a specific api call. This time, I want to show how to turn that specific hook into a better, more reusable version.",
      },

      {
        title: "Building a simple react hook api with typescript",
        image: "4.jpg",
        href: "https://jesse-94998.medium.com/building-a-simple-react-hook-api-with-typescript-cec9207f3230",
        date: "January 1, 2021",
        description:
          "Making api calls is something I do frequently, so one of the first hooks I set out to make was a simple hook that makes an api call, returns data, or an error message if something goes wrong.",
      },

      {
        title: "Configuring a Content-Security-Policy with Lambda Edge",
        image: "5.jpg",
        href: "https://jesse-94998.medium.com/configuring-a-content-security-policy-with-lambda-edge-11493cdc22ad",
        date: "September 29, 2020",
        description:
          "Recently I’ve been working on upgrading the security of my web applications. One of the easiest security features to add is a robust Content-Security-Policy.",
      },
    ],
  };

  $("#header-title").text(applicationState.header);

  $.each(applicationState.headerLinks, (index, value) => {
    const activeClassName = '<li class="menu-item active"></li>';
    const className = '<li class="menu-item"></li>';
    const lineItem = index === 0 ? activeClassName : className;

    const item = $(lineItem).append(
      `<a href=${value.section}>${value.title}</a>`
    );

    $("#header-links").append(item);
  });

  $("#about-title").text(applicationState.infoTitle);

  $("#about-description").text(applicationState.infoDescription);
  $("#about-paragraph").text(applicationState.aboutParagraph);

  $.each(applicationState.aboutInfoList, (index, value) => {
    $("#about-info-list").append(
      `<li><strong>${value.label}:</strong>  ${value.value}</li>`
    );
  });

  $.each(applicationState.socials, (index, value) => {
    $("#socials").append(
      `<a target="_blank" href=${value.href} title=${value.title} class="btn"><i class="${value.icon}"></i></a>`
    );
  });

  $.each(applicationState.skills, (index, value) => {
    $("#skill-progress").append(
      `<div class="skill-item" data-percent=${value.percent}>
        <span class="skill-title">${value.title}</span>
         <div class="skill-progress">
           <div class="skill-percent" style="width: ${value.percent}%">
           </div>
         </div>
       </div>`
    );
  });

  $.each(applicationState.strengths, (index, value) => {
    $("#strength-list").append(
      `<div class="col-xs-12 col-sm-6 col-md-3">
        <div class="service-item">
          <div class="service-icon">
            <i class="${value.icon}"></i>
          </div>
        <div class="service-content">
          <h6>${value.title}</h6>
          <p>
            ${value.description}
          </p>
        </div>
      </div>
    </div>`
    );
  });

  $.each(applicationState.experience, (index, value) => {
    const item = $(`<div class="experience-item"></div>`);

    const itemContent = $(`<div class="experience-content"></div>`);

    const image = $(
      `<div class="experience-image">
        <img src="images/experience/${value.image}" alt="" />
      </div>`
    );

    const date = $(`<span class="experience-date">${value.date}</span>`);

    const title = $(`<h5>${value.title}</h5>`);

    const content = $("<div></div>");

    $.each(value.actions, (index, action) => {
      content.append(`
      <p>
        • ${action}
      </p>`);
    });

    itemContent.append([date, title, content]);

    item.append([image, itemContent]);

    $("#experience-list").append(item);
  });

  $("#portfolio-list").append(`<div class="grid-sizer"></div>`);

  $.each(applicationState.portfolio, (index, value) => {
    $("#portfolio-list").append(
      `
      <div class="grid-item equal web">
        <div
          class="media"
          style="
            background-image: url(${value.image});
          "
        >
          <img
            src="${value.image}"
            alt="Project"
          />
        </div>
        <div class="caption">
          <div class="caption-inner">
            <h2 class="title">
              <a href="${value.href}" target="_blank"
                >${value.title}</a
              >
              </h2>
              <ul class="cat">
                <li>Web</li>
              </ul>
            </div>
          </div>
        </div>
      `
    );
  });

  $.each(applicationState.blogs, (index, value) => {
    $("#blogs").append(
      `
      <div class="col-md-4">
        <article class="post">
          <div
            class="post-media image"
            style="background-image: url(images/posts/${value.image})"
          >
              <img src="images/posts/${value.image}" alt="Post" />
          </div>
          <div class="post-content">
            <h6 class="title">
              <a
                href="${value.href}"
                target="_blank"
              > ${value.title} </a
              >
              </h6>
              <div class="post-details">
                <a class="post-date">${value.date}</a>
              </div>

            </div>
          </article>
        </div>
      `
    );
  });
});
