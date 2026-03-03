1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById, getElementsByClassName, querySelector and querySelectorAll are JavaScript DOM selection methods. getElementById selects and returns an element with a unique id from the HTML elements. One id has to be used on only one element, if multiple elements have the same id, getElementById will return only the first element. So if the user wants to select multiple elements from the HTML he can use same class name on the elements and select it by using getElementsByClassName instead. It selects all the elements from the HTML that has the same class name. What it returns is like an array, but not exactly an array. Whereas even though querySelector selects only one element like getElementById, but the difference is it can select the element even if it's from an id, class or a tag. In case of multiple elements using the same class or tag, it selects the first element from these. querySelectorAll can be used the same way in case of class or tags, but the difference is it selects all elements under that class name or tag and returns it.



2. How do you create and insert a new element into the DOM?

Answer: To create an element in a HTML document, we can use document.createElement(). Then we can use innerText to add text content to the element, or innerHTML can also be used to add HTML content to the element. Then we can append the element as a child to a parent element in the HTML document. We can use appendChild() for that.



3. What is Event Bubbling? And how does it work?

Answer: Event Bubbling is a mechanism in Document Object Model (DOM) in which when an element receives an event it is propagated through its ancestor elements to the root element. Event is added to the child or its parent element using addEventListener(). If event listeners are added to multiple elements on the DOM tree then innermost element is triggered first. Ancestor elements sequentially respond to events triggered by the child element.



4. What is Event Delegation in JavaScript? Why is it useful?

Answer: Event Delegation in (DOM) is when instead of adding event listeners on each child, its used on the parent element instead. So when event happens on any child element event listener on the parent element handles it. event.target can be used to determine which child triggered the event. In this way it is useful because we can avoid repeating adding event listener on every child. Code is cleaner this way.



5. What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() is used to prevent default actions of an element in a browser. Example of such default action is following a url clicking on a link or submitting a form using submit button. But it does not prevent the event from bubbling up or propagating through its ancestor elements. Whereas stopPropagation() method stops the event from bubbling up through the ancestor elements in the DOM tree. But it does not prevent the default actions which can be prevented by using preventDefault().