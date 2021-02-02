/* eslint-disable */

// // optionally configure local env vars
// require('dotenv').config()

// // details in https://css-tricks.com/using-netlify-forms-and-netlify-functions-to-build-an-email-sign-up-widget
const fetch = require("node-fetch")
const { EMAIL_TOKEN } = process.env

exports.handler = async event => {
  console.log(JSON.parse(event.body)) // todo -- delete this once you're one developing, we don't need this in the netlify logs

  const email = JSON.parse(event.body).payload.email
  const formName = JSON.parse(event.body).payload.data["form-name"]

  if (formName === "newsletter") {
    console.log(`Recieved a Newsletter submission: ${email}`)
    try {
      const response = await fetch(
        "https://api.buttondown.email/v1/subscribers",
        {
          method: "POST",
          headers: {
            Authorization: `Token ${EMAIL_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      )
      const data = await response.json()

      if (response.status === 400) {
        return {
          statusCode: 400,
          body: JSON.stringify({
            message: "Looks like that address already subscribed.",
          }),
        }
      }

      console.log(`New subscriber submitted to Buttondown - ${data.email}`)
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Success!" }),
      }
    } catch (error) {
      console.log("error", error)
      throw new Error("Oh no! There was an error")
    }
  }

  if (formName === "contact") {
    console.log("You need to implement this!")
  }
}
