```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({fieldName: 'someValue'}, {$inc: {counter: 1}});

//Alternative solution: Cast the counter to a number before incrementing
db.collection('myCollection').updateOne({fieldName: 'someValue'}, {$inc: {counter: parseInt('1',10)}});
```