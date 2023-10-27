"use client";
const subItem = [
  {
    id: 0,
    items: "courses",
    subItems: [
      {
        id: 0,
        name: "class 11 to 12",
        subItemAbout: "competitive exam preparation",
        svg: "/header/barGraph.svg",
        listPresent: "true",
        list: ["IITJEE", "Neet", "CUET"],
        lists: [
          {
            lid: 0,
            name: "IITJEE",
            subItemAbout: "engineering exam preparation",
            listPresent: "false",
            svg: "/header/iit.svg",
            path: "/exam/11/jee"
          },
          {
            lid: 1,
            name: "Neet",
            subItemAbout: "medical exam preparation",
            listPresent: "false",
            svg: "/header/medical.svg",
            path: "/exam/11/neet"
          },
          {
            lid: 2,
            name: "CUET",
            subItemAbout: "common university entrance test",
            listPresent: "false",
            svg: "/header/cuet.svg",
            path: "/exam/11/cuet"
          },
        ],
      },
      {
        id: 1,
        name: "class 9 to 10",
        svg: "/header/barGraph.svg",
        listPresent: "true",
        subItemAbout: "competitive exam prep,cbse tutions and more",
        list: ["IITJEE Foundation", "Neet Foundation"],
        lists: [
          {
            lid: 0,
            name: "IITJEE",
            subItemAbout: "engineering exam preparation",
            listPresent: "false",
            svg: "./header/iit.svg",
            path: '/exam/9/jee'
          },
          {
            lid: 1,
            name: "Neet",
            subItemAbout: "medical exam preparation",
            listPresent: "false",
            svg: "/header/medical.svg",
            path: '/exam/9/neet'
          },
          {
            listHeading: true,
            name: "CBSE tutions",
            svg: "null",
            subItemAbout: "null",
            path: '/exam/9/cbse'
          },
          {
            lid: 2,
            name: "English",
            listPresent: "false",
            svg: "/header/science.svg",
            path: '/exam/9/english'
          },
          {
            lid: 3,
            name: "Science",
            listPresent: "false",
            svg: "/header/science.svg",
            path: '/exam/9/science'
          },
          {
            lid: 4,
            name: "Maths",
            listPresent: "false",
            svg: "/header/math.svg",
            path: '/exam/9/maths'
          },
        ],
      },
      {
        id: 2,
        name: "class 4 to 8",
        svg: "/header/barGraph.svg",
        listPresent: "true",
        subItemAbout: "competitive exam prep,cbse tutions and more",
        list: ["IITJEE Foundation", "Neet Foundation"],
        lists: [
          {
            lid: 0,
            name: "Foundation",
            subItemAbout: "engineering and medical exam preparation",
            listPresent: "false",
            svg: "/header/foundation.svg",
            path: '/exam/4/foundation'
          },
          {
            listHeading: true,
            name: "CBSE tutions",
            svg: "null",

            subItemAbout: "null",
          },
          {
            lid: 2,
            name: "English",
            listPresent: "false",
            svg: "/header/science.svg",
            path: '/exam/4/english'
          },
          {
            lid: 3,
            name: "Science",
            listPresent: "false",
            svg: "/header/science.svg",
            path: '/exam/4/science'
          },
          {
            lid: 4,
            name: "Maths",
            listPresent: "false",
            svg: "/header/math.svg",
            path: '/exam/4/maths'
          },
          {
            listHeading: true,
            name: "Infinity Futurz",
            svg: "null",

            subItemAbout: "null",
          },
          {
            lid: 5,
            name: "Young Product Designers Program",
            listPresent: "false",
            subItemAbout: "unleash your creativity",
            svg: "/header/ypdp.svg",
            path: '/exam/4/ypdp'
          },
          {
            lid: 6,
            name: "High Order Thinking Skills",
            listPresent: "false",
            subItemAbout: "boost your anlytical thinking",
            svg: "/header/hots.svg",
            path: '/exam/4/hots'
          },
        ],
      },
      {
        id: 3,
        name: "class 1 to 3",
        svg: "/header/barGraph.svg",
        listPresent: "true",
        subItemAbout: "english maths science coding and more",
        list: ["IITJEE Foundation", "Neet Foundation"],
        lists: [
          {
            lid: 0,
            name: "Headstart Program",
            subItemAbout: "english + maths + science + coding",
            listPresent: "false",
            svg: "/header/foundation.svg",
            path: '/exam/1/foundation'
          },
          {
            listHeading: true,
            name: "Infinity Futurz",
            svg: "null",

            subItemAbout: "null",
          },
          {
            lid: 5,
            name: "Young Product Designers Program",
            listPresent: "false",
            subItemAbout: "unleash your creativity",
            svg: "/header/ypdp.svg",
            path: '/exam/1/ypdp'
          },
          {
            lid: 6,
            name: "High Order Thinking Skills",
            listPresent: "false",
            subItemAbout: "boost your anlytical thinking",
            svg: "/header/hots.svg",
            path: '/exam/1/hots'
          },
        ],
      },
    ],
  },
  {
    id: 1,
    items: "study materials",
    subItems: [
      {
        id: 0,
        name: "class 11 to 12+",
        subItemAbout: "free material for competitive exams,cbs,isc and more",
        svg: "/header/barGraph.svg",
        listPresent: "true",
        list: [
          "IITJEE",
          "Neet",
          "CUET",
          "CBSE",
          "ICSE",
          "State Boards",
          "Olympiads",
        ],
        lists: [
          {
            lid: 0,
            name: "IITJEE",
            subItemAbout: "engineering exam preparation",
            listPresent: "true",
            svg: "/header/iit.svg",
            books: [
              "physics",
              "maths",
              "chemistry",
              "sample paper",
              "past year paper",
            ],
            path:'./books/JEE/11/12/12plus'
          },
          {
            lid: 1,
            name: "Neet",
            subItemAbout: "medical exam preparation",
            listPresent: "true",
            svg: "/header/medical.svg",
            books: [
              "physics",
              "maths",
              "chemistry",
              "sample paper",
              "past year paper",
            ],
            path:'./books/NEET/11/12/12plus'
          },
          {
            lid: 2,
            name: "CUET",
            subItemAbout: "university exam preparation",
            listPresent: "true",
            svg: "/header/cuet.svg",
            books: [
              "physics",
              "maths",
              "chemistry",
              "economics",
              "accounting",
              "buisness studies",
              "past year paper",
            ],
            path:'./books/CUET/11/12/12plus'
          },
          {
            lid: 3,
            name: "CBSE",
            listPresent: "true",
            svg: "null",
            books: [
              "physics",
              "maths",
              "chemistry",
              "economics",
              "accounting",
              "buisness studies",
              "past year paper",
            ],
            path:'./books/CBSE/11/12/12plus'
          },
          {
            lid: 4,
            name: "ICSE",
            listPresent: "true",
            svg: "null",
            books: ["physics", "maths", "chemistry", "biology"],
            path:'./books/ICSE/11/12/12plus'
          },
          {
            lid: 5,
            name: "State Board",
            listPresent: "true",
            svg: "null",
            books: ["Maths", "Science"],
            path:'./books/STATE/11/12/12plus'
          },
          {
            lid: 6,
            name: "Olympiads",
            listPresent: "true",
            svg: "null",
            books: [
              "Rajasthan",
              "madhyapradesh",
              "west bengal",
              "uttarpradesh",
              "gujrat",
              "Telengana",
            ],
            path:'./books/OLYMPIADS/11/12/12plus'
          },
        ],
      },
      {
        id: 1,
        name: "class 9 to 10",
        subItemAbout: "competitive exams prep,cbse,tution and more",
        svg: "/header/barGraph.svg",
        listPresent: "true",
        list: [
          "IITJEE Foundation",
          "Neet Foundation",
          "CBSE",
          "ICSE",
          "State Boards",
          "Olympiads",
        ],
        lists: [
          {
            lid: 0,
            name: "IITJEE Foundation",

            listPresent: "true",
            svg: "/header/iit.svg",
            books: ["physics", "maths", "chemistry"],
            path:'./books/IITJEE/9/10/'
          },
          {
            lid: 1,
            name: "NEET Foundation",
            listPresent: "true",
            svg: "/header/medical.svg",
            books: ["physics", "maths", "chemistry"],
            path:'./books/NEET/9/10/'
          },
          {
            lid: 2,
            name: "CBSE",
            listPresent: "true",
            svg: "null",
            books: [
              "physics",
              "maths",
              "chemistry",
              "economics",
              "accounting",
              "buisness studies",
            ],
            path:'./books/CUET/9/10/'
          },
          {
            lid: 3,
            name: "ICSE",
            listPresent: "true",
            svg: "null",
            books: ["physics", "maths", "chemistry", "biology"],
            path:'./books/ICSE/9/10/'
          },
          {
            lid: 4,
            name: "State Board",
            listPresent: "true",
            svg: "null",
            books: ["Maths", "Science"],
            path:'./books/STATE/9/10/'
          },
          {
            lid: 5,
            name: "Olympiads",
            listPresent: "true",
            svg: "null",
            books: [
              "Rajasthan",
              "madhyapradesh",
              "west bengal",
              "uttarpradesh",
              "gujrat",
              "Telengana",
            ],
            path:'./books/Olympiads/9/10/'
          },
        ],
      },
      {
        id: 2,
        name: "class 6 to 8",
        subItemAbout: "competitive exams prep,cbse,tution and more",
        svg: "/header/barGraph.svg",
        listPresent: "true",
        list: ["CBSE"],
        lists: [
          {
            lid: 0,
            name: "CBSE",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
            path:'./books/CBSE/6/7/8'
          },
        ],
      },
      {
        id: 3,
        name: "NCERT Solution",

        svg: "null",
        listPresent: "true",
        list: [
          "Class 6",
          "Class 7",
          "Class 8",
          "Class 9",
          "Class 10",
          "Class 11",
          "Class 12",
        ],
        lists: [
          {
            lid: 0,
            name: "Class 6",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
          },
          {
            lid: 1,
            name: "Class 7",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
          },
          {
            lid: 2,
            name: "Class 8",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
          },
          {
            lid: 3,
            name: "Class 9",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
          },
          {
            lid: 4,
            name: "Class 10",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
          },
          {
            lid: 5,
            name: "Class 11",
            listPresent: "true",
            svg: "null",
            books: [
              "physics",
              "maths",
              "chemistry",
              "economics",
              "accounting",
              "buisness studies",
            ],
          },
          {
            lid: 6,
            name: "Class 12",
            listPresent: "true",
            svg: "null",
            books: [
              "physics",
              "maths",
              "chemistry",
              "economics",
              "accounting",
              "buisness studies",
            ],
          },
        ],
      },
      {
        id: 4,
        name: "NCERT Exampler",

        svg: "null",
        listPresent: "true",
        list: [
          "Class 6",
          "Class 7",
          "Class 8",
          "Class 9",
          "Class 10",
          "Class 11",
          "Class 12",
        ],
        lists: [
          {
            lid: 0,
            name: "Class 6",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
          },
          {
            lid: 1,
            name: "Class 7",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
          },
          {
            lid: 2,
            name: "Class 8",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
          },
          {
            lid: 3,
            name: "Class 9",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
          },
          {
            lid: 4,
            name: "Class 10",
            listPresent: "true",
            svg: "null",
            books: ["english", "maths", "science", "social science"],
          },
          {
            lid: 5,
            name: "Class 11",
            listPresent: "true",
            svg: "null",
            books: [
              "physics",
              "maths",
              "chemistry",
              "economics",
              "accounting",
              "buisness studies",
            ],
          },
          {
            lid: 6,
            name: "Class 12",
            listPresent: "true",
            svg: "null",
            books: [
              "physics",
              "maths",
              "chemistry",
              "economics",
              "accounting",
              "buisness studies",
            ],
          },
        ],
      },
      {
        id: 5,
        name: "Popular Books",

        svg: "null",
        listPresent: "true",
        list: [
          "HC Verma",
          "RD Sharma",
          "Dk Goel",
          "RS Agarwal",
          "TS Grewal",
          "Sandeep Garg",
          "Lakhmir Singh",
        ],
        lists: [
          {
            lid: 0,
            name: "HC Verma",
            listPresent: "true",
            svg: "null",
            books: ["class 6", "class 7"],
          },
          {
            lid: 1,
            name: "RD Sharma",
            listPresent: "true",
            svg: "null",
            books: [
              "class 6",
              "class 7",
              "class 8",
              "class 9",
              "class 10",
              "class 11",
              "class 12",
            ],
          },
          {
            lid: 2,
            name: "Dk Goel",
            listPresent: "null",
            svg: "null",
            books: ["class 11", "class 12"],
          },
          {
            lid: 3,
            name: "RS Agarwal",
            listPresent: "null",
            svg: "null",
            books: [
              "class 6",
              "class 7",
              "class 8",
              "class 9",
              "class 10",
              "class 11",
              "class 12",
            ],
          },
          {
            lid: 4,
            name: "TS Grewal",
            listPresent: "null",
            svg: "null",
            books: ["class 7", "class 8"],
          },
          {
            lid: 5,
            name: "Sandeep Garg",
            listPresent: "null",
            svg: "null",
            books: ["class 11", "class 12"],
          },
          {
            lid: 6,
            name: "Lakhmir Singh",
            listPresent: "null",
            svg: "null",
            books: [
              "Physics class 9",
              "Physics class 10",
              "Chemistry class 9",
              "Chemistry class 10",
              "Biology class 9",
              "Biology class 10",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    items: "result",
    subItems: [],
  },
  {
    id: 3,
    items: "more",
    subItems: [
      {
        id: 0,
        name: "about us",
        svg: "/header/barGraph.svg",
      },
      {
        id: 1,
        name: "teaching philosophy",

        svg: "/header/barGraph.svg",
      },
      {
        id: 2,
        name: "book counselling sessions",

        svg: "/header/barGraph.svg",
      },
      {
        id: 3,
        name: "scholarships",

        svg: "/header/barGraph.svg",
      },
      {
        id: 4,
        name: "rank predictor",

        svg: "/header/barGraph.svg",
      },
      {
        id: 5,
        name: "IL for schools",

        svg: "/header/barGraph.svg",
      },
      {
        id: 6,
        name: "Careers",

        svg: "/header/barGraph.svg",
      },
    ],
  },
];
export default subItem;
