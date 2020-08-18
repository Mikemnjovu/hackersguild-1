/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */
export const HACKERS_GUILD = "Hackers Guild";
export const SOCIAL_MEDIA = {
  facebook: "https://web.facebook.com/thehackersguild/",
  instagram: " https://www.instagram.com/hackersguild/",
  twitter: " https://twitter.com/thehackersguild",
};
export const LANDING_IMAGE_DATA = {
  title: "Learn, Innovate and Grow",
  content:
    "Innovative educational services in computer science and  programming training, youth development and workforce development. ",
  button: {
    className: "btn__normal",
    content: "Subscribe",
  },
};
export const NAV = {
  button: {
    className: "btn__outline-black",
    content: "Learn more",
  },
};
export const OUR_SERVICES = {
  title: "Our services",
  discription:
    "Hackers Guild (HG) is a Zambian non-profit organization whose primary roles include innovative educational services in computer  science and programming training, youth development and workforce development.",
};
export const SECTIONS = {
  firsSection: "What we do",
};
export const WHAT_WE_DO = {
  hackerthons: {
    title: "Hackerthons",
    discription:
      "To promote collaboration and sharing of knowledge we use hackathorns as a good place to highlight skills gained from respective coding clubs, Students are challenge to start solving real world problems using the skills gained fromcoding club activities.",
    button: {
      className: "btn__outline-green",
      content: "Learn more",
    },
    imgAlt: "hackerthons",
  },

  schoolClubs: {
    title: "School Clubs",
    discription:
      "As an initiative to spark computer science interest in high school, HG works with school age youth through coding clubs. The school coding clubs are meant to groom upcoming  developers, as such we will set them up to be more than just an ordinary school club but a place to have fun as they build skills that will inform their career path. HG’s approach is to mentor a group of pupils who will take up the leadership role of the club with supervision of the teacher. They are then exposed to basic Web and mobile app development, electronics and game development.",
    button: {
      className: "btn__outline-green",
      content: "Learn more",
    },
    imgAlt: "school clubs",
  },

  bootCamps: {
    title: "BootCamps",
    discription:
      " The flagship program at HG is its 3 month-long intensive coding “bootcamp” that teaches professional software development from a beginner level leading to marketable skills, with focus on web and mobile application development. This program allows participants to learn how to be a programmer and builds adaptive skills that may be  utilized in any programming language, leading students to be capable of solving complex problems using technology.",
    button: {
      className: "btn__outline-green",
      content: "Learn more",
    },

    imgAlt: "boot camp",
  },
};

export const WORKSECTION = {
  title: "Work with us",
  discription:
    "Divide details about your product or agency work into parts. Write a few lines about each one and contact us about any further collaboration. We will responde get back to you in a couple of hours.",
};
export const TEST = {
  title: "test",
};
