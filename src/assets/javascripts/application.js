import "../images/icons/bitbucket.svg"
import "../images/icons/github.svg"
import "../images/icons/gitlab.svg"

import "../stylesheets/application.scss"
import "../stylesheets/application-palette.scss"

import { h, render } from "preact"
import "preact-dom"
import Tabs from "./components/tabs"
import StaticNode from "./components/common/StaticNode"

// this holds our rendered root element so we can re-render in response to HMR updates.

// Making our app's initialization a function means it's repeatable.
const init = x => {

  setTimeout(() => {
    const el = document.querySelector("[data-md-component=tabs]")
    const nodes = Array.prototype.map.call(el.children, h)
    const root = render(
      <Tabs>
        <StaticNode el={el.children[0]} />
      </Tabs>, el.parentNode, el
    )
    console.log(root)
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
