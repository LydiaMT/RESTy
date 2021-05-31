import React from 'react';
import './help.scss';

const Help = () => {
  return (
    <section>
      <h2>Welcome To Resty</h2>
      <p><span className="special-font">RESTy</span> is an API tool to test your routes and CRUD methods. <span className="special-font">RESTy</span> is simple to use, and stores your past queries for you so you can easily requery your routes and API calls.</p>
      <br/>
      <h5>To use RESTy:</h5>
      <ol>
        <li><span className="special-font">1.</span> Enter your route into the URL input on the Home page. For PUT and POST requests, add a body as well. </li>
        <li><span className="special-font">2.</span> Click the GO! button.</li>
        <li><span className="special-font">3.</span> Successful calls will return the results of your query. Unsuccessful calls will throw an error.</li>
      </ol>
      <br/>
      <p>It's as simple as that! Navigate to the History page to see a complete selection of your past queries. Click the query to see it's metadata, or click rerun to make the API call again. You can re-run previous API calls from the History or Home page.</p>
      <br/>
      <p><span className="special-font">PRO TIP:</span> <a href="https://reqres.in/" rel="noreferrer noopener" target="_blank">reqres</a> is great for API tests. </p>
      <h6>Happy programming!</h6>
    </section>
  )
}

export default Help