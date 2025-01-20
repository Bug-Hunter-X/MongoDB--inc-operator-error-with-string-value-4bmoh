# MongoDB $inc operator error with string value

This example demonstrates an incorrect usage of the `$inc` operator in a MongoDB update query.  The issue arises when trying to increment a field whose value is a string instead of a number.  The correct solution involves ensuring that the field being incremented has a numeric value.  Refer to the `bugSolution.js` for the corrected version.
