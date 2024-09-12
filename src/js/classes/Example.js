/**
 * @file Module for the class Player.
 * @module src/Player
 * @author Karin Silfversparre <ks224ac@student.lnu.se>
 * @version 1.0.0
 */

import { PlayingCard } from './PlayingCard.js'

/**
 * Represents a player.
 */
export class Player {
  /**
   * Array of the cards a player has.
   *
   * @type {PlayingCard[]}
   */
  #hand
  /**
   * The nickname of the player.
   *
   * @type {string}
   */
  #nickname
  /**
   * The total value a player chooses to draw cards up to.
   *
   * @type {number}
   */
  #standValue

  /**
   * Creates a new Player object.
   *
   * @param {string} nickname - The nickname of the player.
   * @param {number} [standValue=14] - The total value a player chooses to draw cards up to.
   * @class
   */
  constructor (nickname, standValue = 14) {
    this.#hand = []

    this.#nickname = nickname

    this.#standValue = standValue
  }

  /**
   * Determines if a player wants to draw another card.
   *
   * @returns {boolean} True if a player wants to draw antoher card, otherwise false.
   */
  get canHit () {
    return this.#hand.length < 2 || (this.valueOf() < this.#standValue && this.#hand.length < 5)
  }

  /**
   * Determines if a player is busted.
   *
   * @returns {boolean} True if a player is busted, otherwise false.
   */
  get isBusted () {
    return this.valueOf() > 21
  }

  /**
   * Determines if a player is a natural winner.
   *
   * @returns {boolean} True if a player is a natural winner, otherwise false.
   */
  get isNaturalWinner () {
    return this.valueOf() === 21 || (this.#hand.length === 5 && this.valueOf() < 21)
  }

  /**
   * Returns the nickname of the player.
   *
   * @returns {string} The nickname of the player.
   */
  get nickname () {
    return this.#nickname
  }

  /**
   * Adds one card to the players hand.
   *
   * @param {PlayingCard} playingCard - The card to add to the players hand.
   */
  addToHand (playingCard) {
    this.#hand.push(playingCard)
  }

  /**
   * Removes all cards from a players hand and returns them.
   *
   * @returns {PlayingCard[]} All the cards the player had.
   */
  discardHand () {
    return this.#hand.splice(0)
  }

  /**
   * Returns a string representing the object.
   *
   * @returns {string} A string that represents the current object.
   */
  toString () {
    if (this.#hand.length < 1) {
      return `${this.#nickname}: -`
    } else if (this.valueOf() > 21) {
      return `${this.#nickname}: ${this.#hand.join(' ')} (${this.valueOf()}) BUSTED!`
    } else {
      return `${this.#nickname}: ${this.#hand.join(' ')} (${this.valueOf()})`
    }
  }

  /**
   * Returns a number representing the value of the players hand.
   *
   * @returns {number} The value of the players hand.
   */
  valueOf () {
    // Some returns immediately after first hit of an ace.
    if (!this.#hand.some((card) => card.valueOf() === 1)) {
      return this.#hand.reduce((a, b) => a + b.valueOf(), 0)
    } else {
      const sumWith1 = this.#hand.reduce((a, b) => a + b.valueOf(), 0)
      const sumWith14 = sumWith1 - 1 + 14
      if (sumWith14 > 21) {
        return sumWith1
      } else {
        return sumWith14
      }
    }
  }
}
