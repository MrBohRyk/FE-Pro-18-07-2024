      
           //создание функции с помощью FunctionDeclaration(Именованые)
       function myFirstFunction () {      // function()
            document.write("<p>Hello from MyFirstFunction!");
            document.write("<p>How are you?");
            document.write("<p>Goodbye!");
        }


      
       var mySecondFunction = function () { // undefined
            document.write("<p>Hello from MySecondFunction!");
        }
        // Вызов функций.

       // myFirstFunction()
    
       

        // mySecondFunction()

        // Вызов функций.

     
      

        //console.dir(window)


        if(confirm()){
            myFirstFunction()
        }else{
            mySecondFunction()
        }