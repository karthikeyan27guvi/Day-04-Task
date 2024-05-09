let resume ={
    name: "Karthikeyan",
    contact: {
    email: "karthick27official@gmail.com",
    phone: "9597362374"
  },
  summary: "Highly motivated and experienced 'invoice processing' with 1.6 years of experience in SAP tool.",
  experience: [
    {
      company: "KG Invicta services",
      position: "Process associate",
      startDate: "21-06-2022",
      endDate: "12-01-2024",
      achievements: [
        "Processing invoice with speed and accuracy.",
        "Hit POT(Payment on Time."
      ]
    },
    {
      company: "Robert Bosch Global software technologies",
      position: "Process associate",
      startDate: "04-04-2024",
      endDate: "Pursuing",
      achievements: [
        "Processing invoice with speed and accuracy.",
        "Hit POT(Payment on Time."
      ]
    }
  ],
  education: [
    {
      school: "CSI Boys Hr Sec school",
      degree: "Bachelor of Science in Information Technology",
      startDate: "2017-09-01",
      endDate: "2020-05-31"
    }
  ],
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "React Native"
  ]
}

//for in______________________________________________________________-

for (let i in resume)
  {
      if(typeof(resume[i])==="string" || typeof(resume[i]==="number"))
          {
              console.log(i,resume[i])
          }
  }
//for loop______________________________________________________________

for (let i = 0; i < resume.experience.length;i++) {
  console.log(`Company: ${resume.experience[i].company}`);
  console.log(`Position: ${resume.experience[i].position}`);
  console.log(`Start Date: ${resume.experience[i].startDate}`);
  console.log(`End Date: ${resume.experience[i].endDate}`);
  console.log(`Achievements:`);
} 
 
//for of______________________________________________________________

for (let prop of Object.keys(resume)) {
if (prop === "experience") {
  for (let i = 0; i < resume[prop].length; i++) {
    console.log(`Name: ${resume.name}`);
    console.log(`Company: ${resume[prop][i].company}`);
    console.log(`Position: ${resume[prop][i].position}`);
    console.log(`Start Date: ${resume[prop][i].startDate}`);
    console.log(`End Date: ${resume[prop][i].endDate}`);
    console.log(`Achievements:`);
    for (let j = 0; j < resume[prop][i].achievements.length; j++) {
      console.log(`  - ${resume[prop][i].achievements[j]}`);
    }
  }
} else {
  console.log(`${prop}: ${JSON.stringify(resume[prop])}`);
}
}

//forEach________________________________________________________________

Object.keys(resume).forEach((prop) => {
if (prop === "experience") {
  resume[prop].forEach((experience) => {
    console.log(`Name: ${resume.name}`);
    console.log(`Company: ${experience.company}`);
    console.log(`Position: ${experience.position}`);
    console.log(`Start Date: ${experience.startDate}`);
    console.log(`End Date: ${experience.endDate}`);
    console.log(`Achievements:`);
    experience.achievements.forEach((achievement) => {
      console.log(`  - ${achievement}`);
    });
  });
} else {
  console.log(`${prop}: ${JSON.stringify(resume[prop])}`);
}
});
  



