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

export class SidebarPosition extends Component {

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
    // const offset  = ev.offset
    // const visible = ev.height
    //
    // /* Update offset, in case window is resized */
    // if (ev && ev.type === "resize")
    //   this.setup()
    //
    // /* Set bounds of sidebar container - must be calculated on every run, as
    //    the height of the content might change due to loading images etc. */
    // const bounds = {
    //   top: this.pad_ ? this.header_.offsetHeight : 0,
    //   bottom: this.parent_.offsetTop + this.parent_.offsetHeight
    // }
    //
    // /* Calculate new offset and height */
    // const height = visible - bounds.top
    //              - Math.max(0, this.offset_ - offset)
    //              - Math.max(0, offset + visible - bounds.bottom)
    //
    // /* If height changed, update element */
    // if (height !== this.height_)
    //   this.el_.style.height = `${this.height_ = height}px`
    //
    // /* Sidebar should be locked, as we're below parent offset */
    // if (offset >= this.offset_) {
    //   if (this.el_.dataset.mdState !== "lock")
    //     this.el_.dataset.mdState = "lock"
    //
    // /* Sidebar should be unlocked, if locked */
    // } else if (this.el_.dataset.mdState === "lock") {
    //   this.el_.dataset.mdState = ""
    // }
  }

  /**
   * Register scroll handler and render tabs
   */
  render() {
    return (
      <Viewport onScroll={this.handleScroll}>
        <nav className="md-sidebar md-sidebar--primary"
          data-md-component="navigation" data-md-state="">
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
    <SidebarPosition>
      {Array.prototype.map.call(el.children, child =>
        <Clone node={child} />
      )}
    </SidebarPosition>, el.parentNode, el
  )
}
