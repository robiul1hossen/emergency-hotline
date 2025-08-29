## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

- getElementById: returns the first element with the specified ID. If there are multiple elements with the same ID, only the first one is returned.
- getElementsByClassName: returns a collection of all elements with the specified class name. The collection is a live HTMLCollection, which means that it automatically updates whenever the DOM changes.
- querySelector: returns the first element that matches the specified CSS selector. If there are multiple elements that match the selector, only the first one is returned.
- querySelectorAll: returns a collection of all elements that match the specified CSS selector. The collection is a NodeList.

## How do you create and insert a new element into the DOM?

- To create a new element in dom i use document.createElement() method.
- To insert it i use document.appendChild() method.

## What is Event Bubbling and how does it work?

- Event bubbling is the JavaScript mechanism where an event, after being triggered on a specific DOM element, propagates or "bubbles up" through its ancestor elements (parents, grandparents, etc.) all the way to the document's root

## What is Event Delegation in JavaScript? Why is it useful?

- Event delegation is a technique used in JavaScript to attach event listeners to all element in the same parent instead of attaching to each individual.

## What is the difference between preventDefault() and stopPropagation() methods?

- preventDefault() method prevents the default behavior of a submit form. stopPropagation() method prevents the event from propagating up the DOM tree, preventing other event listeners from being triggered.
