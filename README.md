1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById, getElementsByClassName, querySelector and querySelectorAll are JavaScript DOM selection methods. getElementById selects and returns an element with a unique id from the HTML elements. One id has to be used on only one element, if multiple elements have the same id, getElementById will return only the first element. So if the user wants to select multiple elements from the HTML he can use same class name on the elements and select it by using getElementsByClassName instead. It selects all the elements from the HTML that has the same class name. What it returns is like an array, but not exactly an array. Whereas even though querySelector selects only one element like getElementById, but the difference is it can select the element even if it's from an id, class or a tag. In case of multiple elements using the same class or tag, it selects the first element from these. querySelectorAll can be used the same way in case of class or tags, but the difference is it selects all elements under that class name or tag and returns it.



2. How do you create and insert a new element into the DOM?

Answer: To create an element in a HTML document, we can use document.createElement(). Then we can use innerText to add text content to the element, or innerHTML can also be used to add HTML content to the element. Then we can append the element as a child to a parent element in the HTML document. We can use appendChild() for that.



3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling is a mechanism in Document Object Model (DOM) in which when an element receives an event it is propagated through its ancestor elements to the root element. Event is added to the child or its parent element using addEventListener(). If event listeners are added to multiple elements on the DOM tree then innermost element is triggered first. Ancestor elements sequentially respond to events triggered by the child element.


