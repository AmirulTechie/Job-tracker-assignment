1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: The difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll is actually how they select an element. 'getElementById' selects a single element by their #id from the html document, while 'getElementByClassName' select all the elements with a same class name. On the other hand, 'querySelector' selects the first element that matches a valid css selector. 'querySelectorAll' just selects all the element that matches the css selector.

2. How do you create and insert a new element into the DOM?
Ans: I can create and insert a new element by using 'createElement' and 'append' or 'appendChild'. 'createElement' creates a new element and 'append' or 'appendChild' inserts the element.

3. What is Event Bubbling? And how does it work?
Ans: Event Bubbling is a Javascript mechanism in DOM where a event starts from the target element and then propagates upward to it's parent, grandparent, etc. elements. When a element is clicked, the event starts on that element first, then bubble up to it's parent, grandparent and so on until it reaches the document.

4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is a tachinque in JS DOM, where we attach a single event listener to the parent element to handle event for it's child element. It's useful because, instead of adding multiple event listener to elements we rely on the elements parent to detect which child has occured the event.

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() is a method that would stop a deafult action which a browser would normally execute. stopPropagation() is a method which stops event propagations from event bubbling. 