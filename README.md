Project Assignment: Blog Server with React, Redux, Redux Toolkit, Vitest, and React Router

!!DO NOT USE NEXTJS FOR THIS PROJECT!!

THIS MAY BE DONE ALONE OR IN GROUPS OF 2. The MAXIMUM GROUP SIZE IS 2. NO EXCEPTIONS.

Overview: The purpose of this project is to create a blog application using React, Redux, Redux Toolkit, Vitest, and React Router. The blog server will be provided, and be a barebones implementation of RESTful HTTP routes to CRUD (create, read, update, delete) blog posts that persist in a data.json file. The server will provide routes for blog post creation, reading, updating, and deleting. The blog posts will consist of two properties: title and content, both of which should be treated as strings. In addition, the server will also provide properties for id, last updated, and originally published.

Requirements:

    Clone and start up the blog server from https://github.com/matgargano/dummy-blog-server.
    Use the latest React, Redux, Redux Toolkit, Vitest, and React Router versions to create a React application with the following features:
        A consistent header and footer on each page with navigation links for HOME, CREATE, etc. The navigation item for the current page should be bold.
        The following routes at a minimum:
            VIEW:
                / – homepage, list out the existing blog posts
                /blog/{ID} – individual blog post
            CREATE/UPDATE:
                /create – a form to add a blog post
                /blog/{ID}/edit
        Ability to perform all 4 CRUD operations for blog posts: create, read, update, delete
        When viewing a blog post, display the last updated, originally published dates along with the blog post’s content
        A loading state for when the app is retrieving the content
        Unit tests for each component
        Use ESLint along with Prettier for code quality and consistency.
    Commit only the necessary files for the React App, do not commit the blog server.
    If submitting as part of a group, submit one repo (each of you submits the same repo in Blackboard). The repo’s commit history MUST contain commits from both members.

Submission:

    Submit the URL to your GitHub repository that contains the React application.
    If submitting as part of a group, each member must submit the same URL to the same repository.
