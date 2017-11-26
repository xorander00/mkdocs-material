import "../images/icons/bitbucket.svg"
import "../images/icons/github.svg"
import "../images/icons/gitlab.svg"

import "../stylesheets/application.scss"
import "../stylesheets/application-palette.scss"

import { render } from "preact"
import "preact-dom"
import initializeTabs from "./components/tabs"

import Clone from "./components/common/Clone"

// this holds our rendered root element so we can re-render in response to HMR updates.

// Making our app's initialization a function means it's repeatable.
const init = x => {

  setTimeout(() => {
    initializeTabs(document.querySelector("[data-md-component=tabs]"))
  }, 500)
}

// initial render!
// init()

/* Provide this for downward compatibility for now */
const app = {
  initialize: init
}

export {
  app
}

// github example: https://blog.codeinfuse.com/getting-started-with-preactjs-a-step-by-step-guide-f3197f871753
