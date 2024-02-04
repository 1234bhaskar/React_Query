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
