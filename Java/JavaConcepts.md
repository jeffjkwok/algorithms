*Notes from:* https://sp18.datastructur.es/index.html

## Syntax Features:
* All code lives inside a class and all code ends with semi-colons
* Variable must be declared before use; strongly typed
* Code that is executed inside a function called main
* Functions must have a return type; if nothing returned use void
* The compiler ensures type consistency; if it isn't consistent, program will no compiler
* **javac** is used to compile programs while **java** is used to execute programs; remember to always compile before execution
* has an enhanced for loop which doesn't use the index for the iteration of the array. EX: for(String s: a), where a is an array of strings

## Static Typing:

#### Advantages:
* Types are checked before being run so its much easier to catch type errors; if you distribute a compiled program its almost guaranteed to be free from type errors and more reliable.
* Easier to understand because every variable, parameter, function has a declared type

#### Disadvantages:
* *will fill out later*

#### Defining and using Classes:
* a class that uses another is sometimes called a client
* an **Object in java** is an instance of any class
* instance variable or non-static variables are variables that are declared inside the class
* the methods that do not have the static keyword in the method signature is called a instance method or non-static method
* Variables and methods of a class are also called members of a class ; these members are accessed using dot notation
* static variables should only be accessed using the name of the class than the instance

#### Class Methods vs Instance Methods
* instance methods are actions that can only be taken by a specific instance of a classic
* static method are actions that are taken by the class itself

## Bits

* all information is stored in memory as a sequence of ones and zeros
* 8 primitive types: byte, short, **int**, long float, **double**, boolean, char
* in java char "H" and int 72 are the exact same bit representation "01001000" but the Java interpreter treats them differently when printed because of its type

#### Declaring Varibles
* Java hides memory locations from the programmer so it provides less control which prevents some types of optimization but it also avoids a large class of tricky programming errors. In the end its worth it!
* Java doesn't write anything into the reserved box when a variable is declared so no default values; only when = is used

##### Golden Rule of Equals GRoE
Given variables y and x:
* y = x copies the bits from x into y; where x and y are int variables
* when you use = you are telling the Java interpreter to copy the bits from x into y

#### Reference Types
* everything that is not a primitive type (byte, short, int, long, float, double, boolean, char) is a reference type

#### Object Instantiation
* when instantiating an Objecting using new, Java allocates memory for each instance variable of the class then fills it with a default value; the constructor usually fills every box with some other value

#### Reference Variable Declaration
* when declaring a variable of any reference type, Java allocates a box of 64 bits, no matter what type of object
* what if the object has multiple variables and requires more than 64 bits? Well the answer is that the 64 bit box that is created contains not the data of the object but the address of the object in memory
