/*
 * Copyright (c) 2016-2017 Martin Donath <martin.donath@squidfunk.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import { render, Component } from "preact"

import Clone from "../common/Clone"
import Viewport from "../common/Viewport"

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

export class HeaderShadow extends Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props)

    // let current = this.props.container
    // while ((current = current.previousElementSibling)) {
    //   console.log(this.state.offset, current.offsetHeight)
    //   this.setState({ offset: this.state.offset + current.offsetHeight })
    // }

    /* Set initial state */
    this.setState({
      active: false,
      offset: 0
    })
  }

  // offset

  /**
   * Handle scroll event
   */
  handleScroll = ev => {

    const active = ev.offset >= this.state.height
    if (active !== this.state.active) {
      this.setState({ active })
    }
  }

  // TODO: container should be instantiated and passed as an object with a
  // method to get the current height. This way we encapsulated everything
  // This height should be updated on resize

  /**
   * Handle scroll event
   */
  handleResize = ev => {
    this.setState({ offset: 0 })

    /* Update trigger offset */
    let current = this.props.container
    while ((current = current.previousElementSibling)) {
      console.log(this.state.offset, current.offsetHeight)
      this.setState({ offset: this.state.offset + current.offsetHeight })
    }
    console.log(this.state)
  }

  /**
   * TODO
   */
  render() {
    return (
      <Viewport onScroll={this.handleScroll} onResize={this.handleResize}>
        <header className="md-header" data-md-component="header"
          data-md-state={this.state.active ? "shadow" : ""}>
          {this.props.children}
        </header>
      </Viewport>
    )
  }
}

/* ----------------------------------------------------------------------------
 * Functions
 * ------------------------------------------------------------------------- */

/**
 * Default initializer
 *
 * @param {Element} el - Element
 *
 * @return {VNode} Virtual node
 */
export default (el, container) => {
  return render(
    <HeaderShadow container={container}>
      {Array.prototype.map.call(el.children, child =>
        <Clone node={child} />
      )}
    </HeaderShadow>, el.parentNode, el
  )
}
