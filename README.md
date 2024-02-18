<h1>Overview</h1>
<b>TanStack Query</b> (FKA React Query) is often described as the missing data-fetching library for web applications, but in more technical terms, it makes fetching, caching, synchronizing and updating server state in your web applications a breeze.
<h2>Motivation</h2>
<p>Most core web frameworks do not come with an opinionated way of fetching or updating data in a holistic way. Because of this developers end up building either meta-frameworks which encapsulate strict opinions about data-fetching, or they invent their own ways of fetching data. This usually means cobbling together component-based state and side-effects, or using more general purpose state management libraries to store and provide asynchronous data throughout their apps.

While most traditional state management libraries are great for working with client state, they are not so great at working with async or server state. This is because server state is totally different. For starters, server state:
</p>
<li>Is persisted remotely in a location you do not control or own
</li>
<li>Requires asynchronous APIs for fetching and updating
</li>
<li>Implies shared ownership and can be changed by other people without your knowledge
</li>
<li>Can potentially become "out of date" in your applications if you're not careful</li>

Once you grasp the nature of server state in your application, even more challenges will arise as you go, for example:
<li>Caching... (possibly the hardest thing to do in programming)
</li>
<li>Deduping multiple requests for the same data into a single request
 </li>
 <li>Updating "out of date" data in the background
</li>
<li>Knowing when data is "out of date"
</li>
<li>Reflecting updates to data as quickly as possible
</li>
<li>Performance optimizations like pagination and lazy loading data
</li>
<li>Managing memory and garbage collection of server state
</li>
<li>Memoizing query results with structural sharing</li>
<br/>
<b>For more Info</b> visit (https://tanstack.com/query/latest)


<h1>useQuery</h1>
<p>For fetching Data from our Server in our react App</p>
<img width="424" alt="Screenshot 2024-02-18 154317" src="https://github.com/1234bhaskar/React_Query/assets/104014529/0d8d8e52-359a-4912-8a86-403fb7673ccf">
<h1>staleTime</h1>

<p>
 <header>Stale time can be useful for a number of reasons:</header>
<li>Improves performance: By specifying a stale time, you can improve the performance of your application by reducing the number of network requests that are made.
For example, if you have a list of posts that changes infrequently, you could specify a stale time of 60 seconds. This would mean that React Query would only fetch the data from the server if it has been more than 60 seconds since the data was last fetched.</li>
<li>Reduces load on the server: By specifying a stale time, you can also help to reduce the load on your server by reducing the number of requests that are made</li>
</p>

<img width="960" alt="Screenshot 2024-02-18 153308" src="https://github.com/1234bhaskar/React_Query/assets/104014529/2b81acd7-45ba-4bcd-ba62-6245547fbf48">

<img width="936" alt="Screenshot 2024-02-18 153403" src="https://github.com/1234bhaskar/React_Query/assets/104014529/75e4abdd-ccce-462c-8cf5-257b0153013a">

