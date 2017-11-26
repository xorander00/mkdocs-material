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

import { h, Component, render } from "preact" // TODO: provide h
// import { VirtualNode } from "virtual-dom"
// import Markup from "preact-markup"

import ScrollObserver from "./common/ScrollObserver"
// import StaticNode from "./common/StaticNode"

/* ----------------------------------------------------------------------------
 * Variables
 * ------------------------------------------------------------------------- */

/* ----------------------------------------------------------------------------
 * Class
 * ------------------------------------------------------------------------- */

// TODO: use flow

export default class Tabs extends Component {

  constructor(props) {
    super(props)
    this.setState({
      active: false
    })
  }  // }

  // https://www.npmjs.com/package/react-scroll-listener
  // https://github.com/bloodyowl/react-media-queries !!!!!

  componentWillMount() {
    console.log("will mount", this.props)
    // this.setState({ content: this.props.children[0] })
    // {render()}
  }

  // componentDidMount() {
  //   this.base
  // }

  // shouldComponentUpdate() {
  //   return false
  // }

  //
  // componentWillUnmount() {
  //   document.documentElement.removeEventListener("scroll", this.handleScroll)
  // }

  /**
   * [handleScroll description]
   * @param  {[type]} ev [description]
   */
  handleScroll = ev => {
    const active = ev.offset >=
      this.base.children[0].offsetTop + (5 - 48)                                 // TODO: quick hack to enable same handling for hero
    if (active !== this.state.active) {
      this.setState({ active })
    }
  }

  /**
   * [render description]
   * @return {[type]} [description]
   */
  render() {
    return (
      <ScrollObserver onScroll={this.handleScroll}>
        <nav class="md-tabs" data-md-component="tabs"
          data-md-state={this.state.active ? "hidden" : ""}>
          {this.props.children}
        </nav>
      </ScrollObserver>
    )
  }
}
