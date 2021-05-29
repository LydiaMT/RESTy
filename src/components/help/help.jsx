import React from 'react';
import './help.scss';

const Help = () => {
  return (
    <section>
      <h2>Welcome To Resty</h2>
      <p>RESTy is an API tool to test your routes and CRUD methods. RESTy is simple to use, and stores your queries in session so you can requery over and over again as you test your routes and API calls</p>
      <h5>To use RESTy:</h5>
      <p>
        <ol>
          <li>1. Enter your route into the URL input on the Home page</li>
          <li>2. Use the query paramaters input form for your PUT, POST, and DELETE routes</li>
          <li>3. Click the Go! button</li>
          <li>4. Successful calls will return the results of your query. Unsucessful calls will throw an error.</li>
        </ol>
      </p>
      <p>It's as simple as that! Navigate to the History page to see a complete selection of your past queries. Click the query to see it's metadata, or click re-run to make the API call again. You can re-run previous API calls from the History or Home page.</p>
      <h6>Happy programming!</h6>
    </section>
  )
}

export default Help