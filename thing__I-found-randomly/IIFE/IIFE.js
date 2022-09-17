// An IIFE (Immediately Invoked Function Expression) is a JavaScript 
// function that runs as soon as it is defined. 

//https://developer.mozilla.org/en-US/docs/Glossary/IIFE

// As we will not reuse the code again, using IIFE in this case is better 
// than using a function declaration or a function expression.




const getFileStream = async (url) => { 
    // implementation
  };
  
  (async () => {
    const stream = await getFileStream('https://domain.name/path/file.ext');
    for await (const chunk of stream) {
      console.log({ chunk });
    }
  })();



  //waittt wtf is await???