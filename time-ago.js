/* global customElements */

import { LitElement, html } from 'lit'
import ago from 's-ago'

export class TimeAgo extends LitElement {
  static properties = {
    seconds: {}
  }

  get msec () { return this.seconds * 1000 }
  get date () { return Number.isNaN(this.msec) ? null : new Date(this.msec) }
  get ago () { return this.date ? ago(this.date) : '(Unknown)' }
  get dateStr () { return this.date ? this.date.toLocaleString() : '(Unknown)' }

  render () {
    return html`<abbr title="${this.dateStr}">${this.ago}</abbr>`
  }
}

customElements.define('time-ago', TimeAgo)
