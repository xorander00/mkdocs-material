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

export default class ScrollObserver {

  /**
   * Update scroll state
   */
  update = () => {
    this.props.onScroll({
      get offset() {
        return document.scrollingElement.scrollTop
      },
      get max() {
        return document.scrollingElement.scrollHeight
      }
    })
  }

  /**
   * [componentDidMount description]
   */
  componentDidMount() {
    addEventListener("scroll", this.update, { passive: true })
  }

  /**
   * [componentWillUnmount description]
   */
  componentWillUnmount() {
    removeEventListener("scroll", this.update, { passive: true })
  }

  /**
   * [render description]
   * @param  {[type]} children [description]
   * @return {[type]}          [description]
   */
  render({ children: [child] }) {
    return typeof child === "function" ? child() : child
  }
}
