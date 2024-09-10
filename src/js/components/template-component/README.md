# &lt;memory-game&gt;

A web component that represents a memory game. memory-game acts somewhat as a normal dekstop application with the instances being closeable, dragable and able to open multiple instances at the same time. The Fisher-Yates Shuffle is used to shuffle the cards in the component. This web component makes use of the following components:
- custom-button
- flippable-card

## Events

| Event Name | Fired When |
|------------|------------|
| `memory-game#closed`| The memory-game is closed with the exit button.
| `memory-game#match`| Two cards with the face up match.
| `memory-game#missmatch`| Two cards with the face up doesnt match.
| `memory-game#win`| The player wins the game by finding all matching cards.


## Styling and customization

memory-game is draggable when the component is the child of an node that has a position other than static.

## In HTML

Add the module using the script tag in the head element:
```html
  <script type="module" src="./js/components/memory-game/index.js"></script>
```

Add the element to the HTML:
```html
  <memory-game></memory-game>
```

## In Javascript

Load the module:
```js
  import '../memory-game/'
```

Create a component using the standard DOM API:
```js
  const memory = document.createElement('memory-game')
```
