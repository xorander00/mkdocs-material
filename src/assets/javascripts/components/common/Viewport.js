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

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

export default class Viewport {

  /**
   * Update scroll state
   */
  updateScroll = () => {
    if (typeof this.props.onScroll === "function")
      this.props.onScroll({
        get offset() {
          return document.scrollingElement.scrollTop
        },
        get height() {
          return document.scrollingElement.scrollHeight
        }
      })
  }

  /**
   * Update viewport state
   */
  updateResize = () => {
    if (typeof this.props.onResize === "function")
      this.props.onResize({
        get offset() {
          return document.scrollingElement.scrollTop
        },
        get height() {
          return document.scrollingElement.scrollHeight
        }
      })
  }

  /**
   * Register scroll and viewport listeners
   */
  componentDidMount() {
    addEventListener("scroll", this.updateScroll, { passive: true })
    ;["resize", "orientationchange"].forEach(event => {
      addEventListener(event, this.updateResize, { passive: true })
    })

    /* Initial render - call resize handler first, as a resize might will most
       likely invalidate all previous scroll position */
    this.updateResize()
    this.updateScroll()
  }

  /**
   * Unregister scroll and viewport listeners
   */
  componentWillUnmount() {
    removeEventListener("scroll", this.updateScroll, { passive: true })
    ;["resize", "orientationchange"].forEach(event => {
      removeEventListener(event, this.updateResize, { passive: true })
    })
  }

  /**
   * Render wrapped node
   *
   * @param {object} props - Properties
   *
   * @return {VNode} Virtual node
   */
  render({ children: [child] }) {
    return typeof child === "function" ? child() : child
  }
}
