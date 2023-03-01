# MVC Tech Blog ![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

The URL or route "/14-Model-View-Controller-MVC-Tech-Blog" is associated with a particular page or resource within a website or web application. This resource could take the form of a blog post, landing page, or section of the website that pertains to the Model-View-Controller (MVC) architecture pattern utilized for developing web applications.

## Contents
* [Description](#description)
* [Installation](#installation)
* [Preview](#preview)
* [Link](#link)
* [License](#license)
* [Questions](#questions)
  
## Description
<div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap">rewrite this please 

This project is a MVC tech blog where the aim and criteria was:

 * User can publish their blog posts
 * User's can comment on other user's posts as well as their own
 * For a user to be able to publish a post or submit a comment they will have to be logged in or sign up 
 * This blog was built using:
      * Node.js and the Express framework on the backend to handle server-side logic and routing
      * To handle models and database interactions, we are utilizing the Sequelize ORM and a MySQL database.
      * On the frontend, we are using Express Handlebars to render dynamic HTML pages and allowing users to submit and view comments when they are logged in.
      * Express Session as a middleware that allows to store session data in cookies, used to track user sessions and authenticate users
      * bcrypt to encript passwords in the database
      * dotenv  to load environment variables from a .env file, used to protect sensitive information such as database passwords
      * Moment.js to format dates displayed

  * All in all, this tech blog is a full-featured web application that allows users to publish posts, submit comments, and view content in a dynamic and secure manner.
</div>
## Installation 
 
<ol><li><p>Install all necessary dependencies by running <code>npm install</code>.</p></li><li><p>Copy the <code>.env.EXAMPLE</code> file, rename it to <code>.env</code>, and add your database credentials.</p></li><li><p>Initialize the database by running <code>mysql -u root -p</code>, entering your password, then running <code>source db/schema.sql</code>, and finally <code>quit</code>.</p></li><li><p>Seed the database by running <code>npm run seed</code>.</p></li><li><p>Finally, run the application locally with <code>npm run start</code>.</p></li></ol>

<div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"><div class="flex flex-grow flex-col gap-3"><div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap"><div class="markdown prose w-full break-words dark:prose-invert light"><p>To install all dependencies, run the following command in your terminal:</p><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs">npm install
</code></div></div></pre><p>Then, copy the <code>.env.EXAMPLE</code> file and rename it to <code>.env</code>. Add your database credentials to the new <code>.env</code> file.</p><p>To initialize the database, run the following commands:</p><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><span class=""></span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-css">mysql -u root -<span class="hljs-selector-tag">p</span>
</code></div></div></pre><p>Enter your password and then run:</p><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><span class=""></span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash"><span class="hljs-built_in">source</span> db/schema.sql
quit
</code></div></div></pre><p>To seed the database, run the following command:</p><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs">npm run seed
</code></div></div></pre><p>To run the application locally, use the following command:</p><pre><div class="bg-black mb-4 rounded-md"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans"><span class=""></span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg></button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-sql">npm run <span class="hljs-keyword">start</span>
</code></div></div></pre><p>This will start the application on your local machine.</p></div></div></div><div class="flex justify-between"><div class="text-gray-400 flex self-end lg:self-center justify-center mt-2 gap-3 md:gap-4 lg:gap-1 lg:absolute lg:top-0 lg:translate-x-full lg:right-0 lg:mt-0 lg:pl-2 visible"><button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg></button><button class="p-1 rounded-md hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 disabled:dark:hover:text-gray-400"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path></svg></button></div></div></div>

## Preview

 ![Screenshot of website]()

## Link
 * Link to deployed application: 
 
      http://www.heroku.com/

## License 
        This project is licensed under the MIT License. For more information about this license, please visit:
            * https://choosealicense.com/licenses/mit/

## Questions
If you have any questions, feel free to contact me using the information provided below. Additionally, you can check out what else I'm currently working on.   
[Github](https://www.github.com/amarfiguig)  
[Email](myfiguig@gmail.com)
