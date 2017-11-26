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

import { h, Component } from "preact"

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

export default class Clone extends Component {

  /**
   * Element attributes to properties mapping
   *
   * @param {Element} el - Element
   *
   * @return {Object} Properties
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
   * Render node and its children recursively
   *
   * @return {string|Component} Component or text string
   */
  render() {
    const { node } = this.props
    if (node instanceof Element) {
      return h(node.tagName.toLowerCase(), this.getProps(node),
        Array.prototype.map.call(node.childNodes, child => {
          return new Clone({ node: child }).render()
        })
      )
    } else {
      return node.textContent
    }
  }
}
