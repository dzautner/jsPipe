Implementing pipes in Javascript using psudo operator overloading.
======
Most of the credit goes to Dr. Axel Rauschmayer that introduced me to the concept of psudo operator overloading in Javascript in his [great article](http://www.2ality.com/2011/12/fake-operator-overloading.html?m=1) about the subject.

The code it self is pretty simple (containing just 28 lines of Javascript for the actual pipe implementation).

I have used the fact that when doing operations on Objects, the method valueOf of the Object is being triggered.
Using a bit of trickery, (and overwriting primitive prototypes) I was able to go as far as to make the following work and produce the expected result:
 ```javascript
var result;
p([1,6,4,9,3])
 | sort
 | removeLessThenThree
 | doubleAll
 | print // prints [8, 2, 18]
 | function (value) { result = value; }
 |pe
```

This little trick is obviously not suitable for real usage, but it is a great example of Javascript's hidden flexibility.

