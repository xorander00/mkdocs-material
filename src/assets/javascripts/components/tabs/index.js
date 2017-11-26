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

export class Tabs extends Component {

  /**
   * Constructor
   */
  constructor(props) {
    super(props)

    /* Set initial state */
    this.setState({
      active: false
    })
  }

  /**
   * Handle scroll event
   */
  handleScroll = ev => {
    const active = ev.offset >=
      this.base.children[0].offsetTop + (5 - 48) // TODO: put into constant
    if (active !== this.state.active) {
      this.setState({ active })
    }
  }

  /**
   * Register scroll handler and render tabs
   */
  render() {
    return (
      <Viewport onScroll={this.handleScroll}>
        <nav class="md-tabs" data-md-component="tabs"
          data-md-state={this.state.active ? "hidden" : ""}>
          {this.props.children}
        </nav>
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
export default el => {
  return render(
    <Tabs>
      {Array.prototype.map.call(el.children, child =>
        <Clone node={child} />
      )}
    </Tabs>, el.parentNode, el
  )
}
