# Feedback Frenzy


## Description

I created an interface for users to submit feedback to Prime by utilizing react and redux to store their answers. After creating the components for each feedback form, I required each value to be filled out with the exception of the comments page. A review page allows the user to see his or her answers before submitting the information the database. Upon submission, the user will see a submission success page where they can click a button to create another feedback submission. When clicking this button, the redux state gets cleared and the user is returned to the first page.

## Getting Started

Create your database with the data.sql provided. 

Running the following commands to install packages needed, starting up the server and client.

npm install
npm run server
npm run client

## Forms: 

There are four forms needed to complete the feedback request.

First form starts with the "How are you feeling today?" question.
- This form should have an area where the user can enter a number between 1 and 5 that measures how they are feeling for the day. 
- Forms 1-3 are required to be filled out before navigating to the next page.
- There will be a next button that allows the user to move onto the next form while also storing the input value to the redux store.

The second form asks, "How well are you understanding the content?".

The third form asks, "How well are you being supported?".

Fourth form allows the user to leave any additional comments.
- The comment field does not require any values.

## Review Component

- The review component will let the users review their answers by listing the input values for each form.
- Users will not be able to change their answers.
- There should be a submit button that sends the data to the database and takes the user to the submission sucess page.

## Submitting Feedback

After submitting the data to the server, users should see a submission success page.
- There should be a button that clears the stored information and links back to the home page to allow the user to submit feedback again.

Additional README details can be found [here](https://github.com/PrimeAcademy/github-finalization-assignment).
