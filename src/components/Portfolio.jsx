import React from "react";
import { useForm } from "react-hook-form";
import "./portfolio.css";
import { useState } from "react";
function Portfolio() {
  const [selected, setSelected] = useState(null);
    const [rightSelected, setRightSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
    };
    

    const toggleRight = (i) => {
    if (rightSelected === i) {
      return setRightSelected(null);
    }
    setRightSelected(i);
    };
 
  return (
    <div className="portfolio">
      <div className="left">
        <div className="wrapper">
          <div className="accordian">
            <h1>Projects</h1>
            {data.map((item, i) => (
              <div className="item">
                <div className="title" onClick={() => toggle(i)}>
                  <h2>{item.title}</h2>
                  <span>{selected === i ? "-" : "+"}</span>
                </div>
                <div className={selected === i ? "content.show" : "content"}>
                  {item.description.map((note, j) => (
                    <div>{note}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="right">
        <h1>Skills</h1>
        <label className="labels">Programming languages</label>
        <p>
          Java | Spring | Python | JavaScript | Node | Express | React | MySQL |
          NoSQL | jQuery | HTML | CSS | C
        </p>
        <label className="labels">Tools</label>
        <p>
          Azure | Docker | Bootstrap | TensorFlow | JUnit | SOAPUI |
          ApacheJMeter | Git | JSON{" "}
        </p>
        <label className="labels">Developer Knowledge</label>
        <p>
          Microservices | Distributed Systems | Frontend | Backend | Full-Stack
          | Machine Learning Algorithms | Agile methodologies
        </p>

              <h1>Work Experience</h1>
                          {EmploymentData.map((item2, i) => (
              <div className="itemRight">
                <div className="title" onClick={() => toggleRight(i)}>
                  <h2>{item2.title}</h2>
                  <span>{rightSelected=== i ? "-" : "+"}</span>
                </div>
                <div className={rightSelected === i ? "content.show" : "content"}>
                  {item2.description.map((note2, j) => (
                    <div>{note2}</div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

const data = [
  {
    title: "MoneyTracker-MERN-WebApp (React, Node, Express, Mongo)",
    description: [
      "•   Developed a full stack web application that allows users to register an account and manually enter financial transactions that is tracked in a log.",
      "•   Created web server with RESTFUL services with node and express, utilizing JWTs for authentication.",
      "•   Designed dynamic web pages with real-time updates and protected routes in React and styled them with CSS.",
      "Deployed site: https://jolly-figolla-106c15.netlify.app/login",
    ],
  },
  {
    title: "FastAPI_RecipeScrapper (Python, FastAPI, Azure)",
    description: [
      "•   Python recipe scrapper terminal application allowing users to query and add recipes.",
      "•   API calls developed using python FastAPI.",
      "•   Server file hosted on Azure allowing users only needing the client file to use the application.",
    ],
  },
  {
    title: "Clustering-Algorithms (Python)",
    description: [
      "•   Recreated K-Means, Nearest Neighbor, and DBScan clustering algorithms from scratch.",
      "•   Ran algorithms on 2 datasets. Included a 300-sample dataset with 10 features to predict presence of coronary heart disease(chd).",
      "•   Measured cluster’s accuracy for predicting chd. Achieved accuracy scores 70%.",
    ],
  },
  {
    title: "Find Your Representative Web Application (Java, Spring MVC))",
    description: [
      "•   Web application that takes in the address of a user and returns the representative for the area.",
      "•   Created RESTful service which integrates with Google Maps API to get latitude and longitude from the input address and the Represent Civic Information API to retrieve representative information.",
      "•   Create web page interface using HTML, CSS, and JQuery.",
    ],
  },
  {
    title: "SQL Clothing JDBC Query Application (Java, SQL)",
    description: [
      "•   Terminal application that allows users to query a relational database.",
      "•   Program made in java with database querying executed with SQL commands.",
      "•   Uses SQL functions such as projection, selection, union, and join for queries.",
    ],
  },

  {
    title: "Car Rental UI Unix Shell Database (SQL, Unix-shell)",
    description: [
      "•   Programmed a car rental query application to help users find cars that suits their needs.",
      "•   Example queries: list customers with sufficient funds, list available cars.",
      "•   Created a SQL database in SQL developer with a simple user interface made in Unix-shell.",
      "•   All tables are normalized to 3NF using the Bernsteins algorithm.",
    ],
  },
];

const EmploymentData = [
  {
    title: "QA Analyst (Equitable Bank)",
    description: [
      "•   Created automated test cases, test suites, and groovy scripts to test functionality of APIs from the online banking applications using SOAPUI and ReadyAPI.",
      "•   Developed and ran daily scheduled tests for the web app’s APIs using 7 different testing environments to report bugs/error to dev ops. Achieved 80% test coverage in 2 testing environments.",
      "•   Developed, executed and reported performance tests using Apache JMeter for API calls, collaborating with performance team and dev ops to identify calls from test reports and resolve issues.",

    ],
  },
];

export default Portfolio;
