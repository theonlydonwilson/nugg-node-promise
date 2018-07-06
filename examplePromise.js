#answers to questions in readme


Promise.resolve(1) //sets the promise input value to resolve to 1
	.then(y => y + 1)//sets a new promise to set y = (value passed to the original promise + 1) 
	.then(y => {//creates new promise chain
	   throw new Error('Error');//stops entire process amd throws error of 'Error'
	   })
	.catch (() => 1)//catchs null value and resets to 1 
	.then(y=> y + 1)//sets a new promise to set y = (value passed to the catch above + 1) 
	.then(y => console.log(y)) //sets new promise to log the value of y to the console
	.catch(console.error);//catch any error thrown within the promise chain
