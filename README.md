# Bugzilla

Welcome to Bugzilla!

The goal of this project is to take various concepts of web software design and apply them in a react application. This application is a rework of https://github.com/atrzaska/bugzilla_vue form vue to react.

## Project description

Bugzilla is a simple project management solution similar to Pivotaltracker.
In bugzilla you can create projects, which have stories.
Each story can have tasks and comments.
Story also has status from `started` to `finished`.
Project owners can also invite other users (registered or unregistered).
Invitation emails are sent to invited users asking them to join the project.

## Tech stack

- react 17
- react router
- bootstrap 5
- axios api
- yup validation

## Development Requirements

- react 17
- nodejs 14
- yarn
- direnv

To install them run:

    brew install nodejs direnv yarn

## Backend API for this Single Page Application

This application is using backend API https://github.com/atrzaska/bugzilla_api. It will not work without it.

## Development Setup

    direnv allow
    yarn && yarn serve

Now you can visit [`localhost:3000`](http://localhost:3000) from your browser.

## What is implemented

- auth system
    - login
    - registration
    - email confirmation
    - password recovery via email
    - resend confirmation instructions via email
    - cancel account from profile settings
    - update email from profile settings with reconfirmation via email
    - update password in profile settings
- project member invitation system via email
- design based on customized `Bootstrap 5`
- user role system with access management
- story state system

Pages/components:
- product page with product layout
- signin page
- signup page
- send reset password email page
- reset password page
- resend confirmation email page
- terms page
- privacy page

- profile settings page
- projects list/new/edit pages
- delete project modal
- stories list (current, backlog, icebox, done) pages
- stories new/edit page
- delete story modal
- members list
- invite new member page
- delete member confirmation modal
- leave project confirmation modal
- change role of member page
- header with profile menu
- sidebar with app modules
- logged in app pages with app layout
- auth pages with auth layout
- bootstrap 5 toast component
- bootstrap 5 modal component
- live validations using bootstrap and yup
- backend validation

## Available commands
```
yarn start
yarn build
yarn test
```
