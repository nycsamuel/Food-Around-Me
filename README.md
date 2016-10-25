# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Building Your First Full-stack Application

#### Overview

This second project is your first foray into building a full-stack application. You'll be building a Node app, which means you'll learn about what it takes to build a functional application from the ground up yourself.

This is exciting! It's a lot, but we'll give you the tools over the next few weeks to be able build what you need, and you get to decide what you do with it. And you get to be creative in choosing what sort of application you want to build!

You will be working individually for this project, and you'll be designing the app yourself. We hope you'll exercise creativity on this project, sketch some wireframes before you start, and write user stories to define what your users will want to do with the app. Make sure you have time to run these ideas by your instructors to get their feedback before you dive too deep into code! Remember to keep things small and focus on mastering the fundamentals – scope creep/feature creep is the biggest pitfall for any project!

---

#### Requirements

Your app must:

- Have at least 2 models (more if they make sense) – one representing someone using your application, and one that represents the main functional idea for your app
- Allow users to log-in and log-out using the Passport.js authentication template provided.
  - NOTE: Use [this Node/Express template](https://github.com/GA-WDI/express_auth_student_template) to start that implements the Passport.js local-strategy.  Do not build auth on your own.
- Have complete RESTful routes for at least one of your resources with GET, POST, PUT, and DELETE
- Have at least one form that posts to your application's database and style that form using CSS
- Use a "mobile" first design with a grid system that you've built using Flexbox
- Have at least 3 tables that have relationships with at least one-to-many and one-many-to-many
- Access data from at least one publicly available or private external API
- Include and build from wireframes that you designed during the planning process
- Use a task runner - like Gulp/Grunt - to compress and minify your JavaScript and CSS files
- Comment your code appropriately
- Adhere to the [AirBnB style guide](https://github.com/airbnb/javascript) for writing your JavaScript
- Adhere to the [Google style guide](https://google.github.io/styleguide/htmlcssguide.xml) for writing your HTML/CSS
- Be deployed to Heroku and accessible to the public

**Bonus:**

- Handle user's logged in state throughout the application:
    - User should not be prompted to re log-in until he logs out.
    - The user should have a personalized experience of the app when logged in, example: displaying his username at the top right corner of the app's header.
- Need permission first: Use MongoDB in any capacity in your application. Suggested ways to use it:
    - Search online for an API data dump you can use to enhance the experience of you app. Import it and use it.
    - Store your users activity in a Mongo document to keep track of their actions.

---

#### Necessary Deliverables

* A working full-stack application, built by you, hosted on Heroku
* A git repository hosted on GitHub, with a link to your hosted application, and frequent commits dating back to the very beginning of the project
* A readme.md file with explanations of the technologies used, wireframes the approach taken, installation instructions, unsolved problems, ERDs of database structure, etc.

---

#### Suggested Ways to Get Started

* Begin with the end in mind. Know where you want to go by planning with wireframes & user stories, so you don't waste time building things you don't need
* Don’t hesitate to write throwaway code to solve short term problems
* Read the docs for whatever technologies you use. Most of the time, there is a tutorial that you can follow, but not always, and learning to read documentation is crucial to your success as a developer
* Commit early, commit often. Don’t be afraid to break something because you can always go back in time to a previous version.
* User stories define what a specific type of user wants to accomplish with your application. It's tempting to just make them to-do lists for what needs to get done, but if you keep them small & focused on what a user cares about from their perspective, it'll help you know what to build
* Write pseudocode before you write actual code. Thinking through the logic of something helps.

---

#### Potential Project Ideas

##### Cheerups
The world is a depressing place.

Your task is to create an app that will allow people to create and share "cheerups" - happy little quips to brighten other people's' days. Cheerups will be small - limited to 139 characters. Members will be able to promote Cheerups that they like and maybe even boost the reputation of the Cheerupper.

##### Bookmarket
You will create an application where users can bookmark links they want to keep.

But what if users could trade bookmarks for other bookmarks? Or sell bookmarks for points? Or send bookmarks to your friends. Or something even crazier.

##### Photo sharing app
Users will be able to register and create albums and photos. Albums and photos will need to be named and described by their owners. Users will be able to view other user's' albums. Maybe users can comment on photos, or either up/down vote them.

---

### Useful Resources

* **[Heroku](http://www.heroku.com)** _(for hosting your back-end)_
* **[Writing Good User Stories](http://www.mariaemerson.com/user-stories/)** _(for a few user story tips)_
* **[Presenting Information Architecture](http://webstyleguide.com/wsg3/3-information-architecture/4-presenting-information.html)** _(for more insight into wireframing)_

---

#### Project Feedback + Evaluation

Your project will be evaluated using [this rubric](rubric.md), assessing the following:

- **Professionalism**
- **Functionality and Requirements**
- **Quality and Consistency**
- **Workflow and Deployment**
- **Creativity**
