import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "react";

function App() {
  const [visitorCount, setVisitorCount] = useState("");

  useEffect(() => {
    fetch('https://a25714b3o5.execute-api.us-east-1.amazonaws.com/default/userCountFunction')
    .then(response => response.json())
    .then(data => {
      setVisitorCount(data.body);
    })
}, []);
  return (
    <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Norberto Merani</title>
        <link rel="stylesheet" href="index.css" />
        <h1 style={{textAlign: 'center'}}>Norberto Merani</h1>
        <p id="counter"> Total number of visitors </p>
        <p id="visitorCount" > {visitorCount} </p>
        <h2> Education </h2>
        <b> Florida International University</b> <p> 2019 - December 2023 </p>
        <p> BS in Computer Science, GPA 3.18 </p>
        <h2> Work </h2>
        <b> Tutor/Web Developer </b>
        <p> August 2022 - August 2023 </p>
        <li> Collaboratively managed the <a href="https://asi.cs.fiu.edu/">ASI Portal site</a> using Django and Git. </li>
        <li> Entered SQL queries to generate reports on the average number of students using our tutoring service on a biweekly basis. </li>
        <li> Educated up to 20-30 FIU students per month, providing assistance in computer science subjects. </li>
        <h2> Skills </h2>
        <p> Certifications: AWS Certified Cloud Practitioner </p>
        <p> Programming: Java, Python, C, JS </p>
        <p> Web Development: HTML, Django, Bootstrap, React </p>
        <p> Tools: Git, Visual Studio, VS Code, IntelliJ, Android Studio </p>
        <p> Database: PostgreSQL </p>
        <p> Cloud: AWS S3, AWS CodePipeline, AWS Lambda, AWS API Gateway </p>
        <h2> Projects </h2>
        <b> ASI Portal Development Team </b>
        <p> August 2022 - August 2023 </p>
        <li> Oversaw portal site development updates, utilizing frameworks for full stack development. </li>
        <li> Generated SQL queries to report statistics on students tutored every month. </li>
        <br />
        <b><a href="https://github.com/NorMeni/norbertoresume">Resume Site</a> </b>
        <p> December 2024 - Current </p>
        <li> Deployed a static site on <b>S3</b> and automated deployment using <b>Github Actions</b> and <b>CodePipeline</b>. </li>
        <li> Implemented a dynamic visitor counter that sends a request to <b>API Gateway</b> to trigger a <b>Lambda</b> function in order to update a <b>DynamoDB</b> table, gaining experience in full-stack programming.
          <br />
        </li></div>
  )
}

export default App;
