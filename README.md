1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans- getElementById selects and return only one element by its id.
     getElementsByClassName selects all elements with the given class name and returns all elements with the class name as an HTML collection.
     querySelector selects the first element that matches the selector and returns it.
     querySelectorAll selects all the element that mathces the selector and returns as a NodeList.

2. How do you create and insert a new element into the DOM?
Ans- We use document.createElement() to create a new element. After inserting content we can use parent.appendChild(elementName) to insert the element into the DOM.

3. What is Event Bubbling and how does it work?
Ans- Event Bubbling is when an event starts from the deepest target element and propagates upward through its ancestors to the root.
     For example, if you click a button inside a div, the click event first happens on the button, then on the parent div, then on the body, and finally on the document.
     Unless it is stopped, the event continues to bubble up through all ancestors.
     This behavior allows parent elements to listen for events on their children without adding individual listeners to each child.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans- Event delegation is a technique in JavaScript where instead of attaching event listeners to many individual child elements, we attach a single event listener to their parent element.
     Since events bubble up in the DOM, the parent can catch events that happen on its children. This technique is very useful because:
     It reduces the number of event listeners, improving performance, works even if new child elements are added dynamically and makes the code cleaner and easier to manage.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans- Difference between preventDefault() and stopPropagation() can be -
     preventDefault() is used when we want to stop the browser’s normal action. For example, if you click a link, normally it opens another page. If we use preventDefault(),
     the link won’t open, but the event will still move up to parent elements.
     stopPropagation() is used when we don’t want the event to move up (or bubble) to parent elements. For example, clicking a button inside a div might also trigger the div’s click event.
     If we use stopPropagation(), only the button’s event runs, not the div’s.
