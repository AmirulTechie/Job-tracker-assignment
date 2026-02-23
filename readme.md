# **1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

**Ans:** The difference between `getElementById`, `getElementsByClassName`, and `querySelector/querySelectorAll` is actually how they select an element. `getElementById` selects a single element by their `#id` from the HTML document, while `getElementByClassName` selects all the elements with the same class name. On the other hand, `querySelector` selects the first element that matches a valid CSS selector. `querySelectorAll` selects all the elements that match the CSS selector.

---

# **2. How do you create and insert a new element into the DOM?**

**Ans:** I can create and insert a new element by using `createElement` and `append` or `appendChild`. `createElement` creates a new element and `append` or `appendChild` inserts the element.

---

# **3. What is Event Bubbling? And how does it work?**

**Ans:** Event Bubbling is a JavaScript mechanism in the DOM where an event starts from the target element and then propagates upward to its parent, grandparent, etc. elements. When an element is clicked, the event starts on that element first, then bubbles up to its parent, grandparent and so on until it reaches the document.

---

# **4. What is Event Delegation in JavaScript? Why is it useful?**

**Ans:** Event Delegation is a technique in JS DOM, where we attach a single event listener to the parent element to handle events for its child elements. It's useful because, instead of adding multiple event listeners to elements, we rely on the parent element to detect which child triggered the event.

---

# **5. What is the difference between preventDefault() and stopPropagation() methods?**

**Ans:** `preventDefault()` is a method that stops a default action which a browser would normally execute. `stopPropagation()` is a method that stops event propagation from event bubbling.