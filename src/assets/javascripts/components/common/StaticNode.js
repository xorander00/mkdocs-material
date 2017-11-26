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

import { h, Component } from "preact" // TODO: provide h

export default class StaticNode extends Component {

  /**
   * [getProps description]
   * @param  {[type]} el [description]
   * @return {[type]}    [description]
   */
  getProps(el) {
    return Object.keys(el.attributes)
      .map(key => el.attributes[key].name)
      .reduce((props, key) => {
        props[key] = el.getAttribute(key)
        return props
      }, {})
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    const { el } = this.props
    if (el instanceof Element) {
      return h(el.tagName.toLowerCase(), this.getProps(el),
        Array.prototype.map.call(el.childNodes, child => {
          return new StaticNode({ el: child }).render()
        })
      )
    } else {
      return el.textContent
    }
  }
}
