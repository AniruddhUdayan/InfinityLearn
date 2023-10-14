const items = [
  {
    id: 0,
    subItems: [
      {
        id: 0,
        name: "class 11 to 12",
        listPresent: "true",
        list: ["IITJEE Preparation", "Neet ", "CUET"],
        lists: [
          {
            lid: 0,
            name: "IITJEE Preparation",
            subItemAbout: "engineering exam ",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "/header/iit.svg",
            targetExams:"JEEMAIN",
            grades:[11,12,13]
          },
          {
            lid: 1,
            name: "Neet Preparation",
            subItemAbout: "medical exam",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "/header/medical.svg",
            targetExams:"NEET",
            grades:[11,12,13]
          },
          {
            lid: 2,
            name: "CUET Preparation",
            subItemAbout: "common entrance test",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "/header/cuet.svg",
            targetExams:"CUET",
            grades:[12]
          },
        ],
      },
      {
        id: 1,
        name: "class 9 to 10",
        listPresent: "true",
        list: ["IITJEE", "Neet", "CUET"],
        lists: [
          {
            lid: 0,
            name: "IIT-JEE Foundation",
            subItemAbout: "engineering exam ",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "/header/iit.svg",
            targetExams:"JEEMAIN",
            grades:[9,10]
          },
          {
            lid: 1,
            name: "Neet Foundation",
            subItemAbout: "medical exam",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "/header/medical.svg",
            targetExams:"NEET",
            grades:[9,10]
          },
          // {
          //   lid: 2,
          //   name: "CUET Foundation",
          //   subItemAbout: "common entrance test",
          //   examTime: "26 weeks to exam",
          //   listPresent: "false",
          //   svg: "/header/cuet.svg",
          // },
        ],
      },
      {
        id: 2,
        name: "class 4 to 8",
        listPresent: "true",
        list: ["Foundation", "Aptitude"],
        lists: [
          {
            lid: 0,
            name: "Foundation",
            subItemAbout: "engineering+medical ",
            examTime: "class 8 only",
            listPresent: "false",
            svg: "/header/iit.svg",
            targetExams:"FOUNDATION",
            grades:[6,7,8]
          },
          {
            lid: 1,
            name: "Aptitude Test",
            subItemAbout: "Bsics",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "/header/medical.svg",
            targetExams:"APTITUDETEST",
            grades:[4,5]
          },
        ],
      },
      ,
    ],
  },
  {
    id: 1,
    subItems: [
      {
        id: 0,
        name: "class 11 to 12",
        subItemAbout: "competitive exam preparation",
        svg: "/barGraph.svg",
        listPresent: "true",
        list: ["IITJEE", "Neet", "CUET"],
        lists: [
          {
            lid: 0,
            name: "IITJEE",
            subItemAbout: "engineering exam ",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "/header/iit.svg",
          },
          {
            lid: 1,
            name: "Neet Preparation",
            subItemAbout: "medical exam",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "/header/medical.svg",
          },
          {
            lid: 2,
            name: "CUET Preparation",
            subItemAbout: "common entrance test",
            examTime: "26 weeks to exam",
            listPresent: "false",
            svg: "/header/cuet.svg",
          },
        ],
      },
    ],
  },
];
export default items;
