const fetch = require("node-fetch")
const { EMAIL_TOKEN } = process.env

exports.handler = async event => {
  const { payload } = await JSON.parse(event.body)
  const { email, form_name } = payload

  if (form_name === "newsletter") {
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

      console.log(`New subscriber submitted to Buttondown - ${data.email}`)
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Success!" }),
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  if (form_name === "contact") {
    console.log("You need to implement this!")
  }
}
