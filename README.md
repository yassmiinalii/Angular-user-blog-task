# Users Blog App  Frontend Task



## The Task requirement is:

Please complete the following task:
1. Create a new angular project.
2. Create a web page with a navbar on top of it.
3. The navbar should include usernames from the following API:
[https://jsonplaceholder.typicode.com/users]
4. When you click on a certain username from the navbar, the posts made by that user should be loaded to
the page. Use the following API to get the posts made by a certain user:
[https://jsonplaceholder.typicode.com/posts?userId=userId]
5. Each post should include the following:
• Username or email.
• User profile image and post image. For both, you can use a random image from any image
placeholder website (e.g. unsplash.com) just to keep the UI consistent.
• Post text with a limit for the number of characters included (use a pipe).
• A button to show comments. You can get the comments made to a certain post using the following API:
[https://jsonplaceholder.typicode.com/comments?postId=postId]

6. For all APIs mentioned above, when you call an API once, it shouldn’t be called again. So, please cache all APIs.
7. Create a neat, responsive UI using SASS. You may only use Bootstrap, yet ready-to-use libraries like
angular material are not allowed. The general identity, colors, fonts, and different design elements are of your choice.


## Deployment Version
https://users-blog-app.web.app/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
