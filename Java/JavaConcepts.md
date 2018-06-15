# Java Concepts
*Notes and Info Regurgitated from:* https://sp18.datastructur.es/index.html

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
* in java char "H" and int 72 are the exact same bit representation "01001000" but the Java interpreter treats them differently when printed because of its type

#### Primatives
* primatives are representation of information
* there are 8 types: byte, short, **int**, long float, **double**, boolean, char
* Each primative is represented by a certain number of bits; ex: int is 32 while byte is 8

#### Declaring Varibles
* Java hides memory locations from the programmer so it provides less control which prevents some types of optimization but it also avoids a large class of tricky programming errors. In the end its worth it!
* Java doesn't write anything into the reserved box when a variable is declared so no default values; only when = is used

### Golden Rule of Equals (GRoE)
Given variables y and x:
* y = x copies the bits from x into y; where x and y are int variables
* when you use = you are telling the Java interpreter to copy the bits from x into y
* so whether its the actual data that is copied in terms of bits or the address of it being store in a variable, GRoE copies that to a new variable
* **copying the bits is also called pass by value**

#### Reference Types
* everything that is not a primitive type (byte, short, int, long, float, double, boolean, char) is a reference type
* referenced type variables are used to store the location in memory of where the object is located
* a reference type is always a box the size of 64 bits; it never stores the entire object itself

#### Object Instantiation
* when instantiating an Objecting using new, Java allocates memory for each instance variable of the class then fills it with a default value; the constructor usually fills every box with some other value
* the size of each object is defined by the type of each field

#### Reference Variable Declaration
* when declaring a variable of any reference type, Java allocates a box of 64 bits, no matter what type of object
* what if the object has multiple variables and requires more than 64 bits? Well the answer is that the 64 bit box that is created contains not the data of the object but the address of the object in memory

#### Parameter Passing
* when you are passing parameters to a function you are copying the bits as well; GRoE also applies to parameter passing
* passing parameters simply copy the bits to the new scope

~~~java
public static void main(String[] args) {
    double x = 5.5;
    double y = 10.5;
    double avg = average(x, y);
}
// the average method has two variable containers that are declared as a and b
// when x and y are passed into the method then the bits from x and y are copied to a and b respectively
~~~

#### Instantiation of Arrays
* Arrays are also Objects and they use the new keyword to instantiate/declare;
* when declaring an array variable, it only creates a memory box of bits; that means that the variable mainly holds the address of the array
* size of the array is always specified when the array is created and cannot be changed

#### Building a IntLists Classes
Create a class IntList that is similar to a linked list and add method size and iterative size. Size should use recursion while iterativeSize should not
Also write a get method of IntList that allows you to get the nth item of the list
```java
public class IntList {
  public int first;
  public IntList rest;

  public IntList(int f, IntList r){
    first = f;
    rest = r;
  }

// recurisve; base case being that the rest == null
  public int size(){
    if(rest == null)
      return 1;
    return 1 + this.rest.size();
  }

// iterative
  public int size(){
    int totalSize = 0;
    IntList current = this;
    while(current != null){
      totalSize++;
      current = current.rest;
    }
    return totalSize;
  }

// my answer; iterative
  public int get(int i){
    IntList current = this;
    int count = 0;
    int answer;
    while(count != i){
      current = current.rest;
    }
    answer = current.first;
    return answer;
  }
  //  their answer! recursion
  // public int get(int i){
  //   if(i == 1)
  //     return first
  //  return rest.get(i-1)
  // }
}
}
```

### Naked Data Structure
* the IntList class created above is a naked recursive data structure; in order use the class correctly the programmer must understand and utilize recursion even for the simple list related tasks
* It limits the usefulness to newer programmers and introduces a whole new class of tricky errors that programmers might run into depending on the methods that are provided

## SSLists

#### Improvements: IntList to SLList & Creating a Bureaucracy (separate classes)
Now we start creating a SSList class. We start with building out a Node class. After creating the SSList it already is more useful than the IntList class because it hides the fact that there is a null link from the user. Then we add the addFirst and getFirst methods.

```java
  public class SSList{

    public static class Node{
      public int value;
      public Node next;
      public Node(int i, Node n){
        value = i;
        next = n;
      }
    }

    private Node head;

    public SSList(int i){
      head = new Node(i, null);
    }
// add to front
    public void addToFront(int i){
      head = new Node(i, head);
    }
// get front
    public int getFront(){
      return head.value;
    }
  }
```

#### Improvement: Public vs Private
* private variables and methods can only be accessed by code in the **same .java file**
* in large projects the private keyword is invaluable signal that tells pieces of code should be ignored; while the public keyword should be thought as a declaration that a method or variable is available and will work forever as it does now
* **When you create a public member be careful because basically you are committing to supporting that member's behavior exactly as it is now forever**


#### Improvement: Nested Classes
There are two classes defined above but one, the Node class, is just a supporting character of SSList. So embed the class declaration into the SSList class. This keeps it organized. If the nested class has no need to use any of the instance members of the SSList class, then you can turn the nested Node class into public static class to remove access to methods and variables such as addToFront(), getFront(), and head. By setting it to a public static class, it saves a bit of memory.

Can also declare the nested class to be private in well this way you can make sure other classes cant never use this nested class

** A simple rule of thumb is that if you don't use any instance members of the outer class, make the static class static**

#### addToBack() and size()

```java
public class SSList{
  private Node head;
  ...

  public addToBack(int i){
    Node current = head;
    while(current.next != null){
      current = current.next;
    }
    current.next = new Node(i, null);
  }

// recursive private helper to help create another method because it does not have a rest variable like IntList
  private static int size(Node n){
    if(n.next == null)
      return 1;
    return 1 + size(n.next);
  }
//its a common idea to write an OUTER method that user can call which is what this size method is below
  public int size(){
    return size(head);
  }

  ...
}
```
We have two size methods because in Java it is allowed since they have different parameters. Also they are overloaded because these methods have the same name but different signatures

#### Improvement: Caching
Since the size method written above is recursive it would take forever. In order to optimize, we can just add a size variable to the SSList class. This method of saving important dat to speed up retrieval is known as caching.

```java
// rewriting the class to make sure that it caches that data for faster retrieval
  public class SSList{
    private Node head;
    private int size;

    public SSList(int i){
      head = new Node(i, null);
      size = 1;
    }

    public void addToFront(int i){
      head = new Node(i, head);
      size++;
    }

    public void addToBack(int i){
      Node current = head;
      if(head == null){
        head = new Node(i, null);
        return;
      }
      while(current.next != null){
        current = current.next;
      }
      current.next = new Node(i, null);
      size++;
    }

    public int size(){
      return size;
    }
  }
// this modification makes it faster to retrieve but also slows down the add method but by a trivial amount

```

### Invariants
An invariant is a fact about a data structure that is guaranteed to be true. Invariants make it easier to reason about code and give you goals reach to make sure your code works

A SLList with a sentinel node (a node that is always there but holds a values that is irrelevant) has the following invariants:
* the sentinel reference always points to the sentinel nodes
* if the head exists, is always at sentinel.next.item and the size variable is the total number of items that have added

## DLList
SSList are difficult to add to the back since you would have to iterate to the end to add in addition if you wanted to remove from the end of the list then you would need to find the second to last node which would also be tricky. The solution is create a list with nodes that have a previous pointer. This structure is called a Doubly Linked list. This extra pointer will lead to extra code complexity.

```java
public class DLList<Item>{

// head will always be sentinel.next and end will always be sentinel.prev
  private int length;
  private Node head;
  private Node tail;

  public DLList(){
    length = 0;
  }

  private class Node{
    public Node prev;
    public Node next;
    public Item value;

    public Node(int i, Node p, Node n){
      value = i;
      prev = p;
      next = n;
    }
  }

  public boolean isEmpty(){
    return length == 0;
  }
  public int size(){
    return length;
  }

  public void addToFront(Item value){
    Node n = new Node(value, null, head);
    if(head != null)
      head.prev = n;
    head = n;
    if(tail == null)
      tail = n;
    length++;
  }

  public void addToBack(Item value){
    Node n = new Node(value, tail, null);
    if(tail != null)
      tail.next = n;
    tail = n;
    if(head == null)
      head = n;
    length++;
  }

  public Item removeFront(){
    if(length == 0)
      return null
    Node del = head;
    head = head.next;
    head.prev = null;
    length--;
    return del.value;
  }

  public Item removeEnd(){
    if(length == 0)
      return null;
    Node del = tail;
    tail = tail.prev;
    tail.next = null;
    length--;
    return del.value;
  }

}
```

### Generics
In Java, Generics are added to the language that will allow you to create data structures that hold any reference type. The syntax is a bit strange but the basic idea is that right after the name of the class declaration you use an arbitrary placeholder inside angle brackets <>.

After defining a generic class, there is also a special syntax required to instantiate to class. To do so, the desired type needs to be put inside of the angle brackets during the declaration and  use empty <> for instantiation

Since generics only work with reference types, you can't put primitive like int or double in <>, instead we use the reference version of primitive type which for int is Integer

```java
public class DLList<T> {...};
// T is a placeholder object can use any variable name; This mean our methods now take T instances as paramters too;
// applying that to our DLList to instantiate we must use this:
DLList<String> list = new DLList<>("Bone");
// during this creation of the list, the compiler replaces all instances of T with String
```

Rules of Thumb:
* in the java file implementing a dat structure specify your generic type name only once at the very top of the file after the class name
* in the other .java files, that use your data structure, specify the desired type during declaration and use the empty <> during instantiation
* if you need to instantiate a generic over a primitive use their reference counterpart: Integer, Double, Character, Boolean, Long, Short, Byte, or Float

minor note: you could declare the type inside the <> brackets when instantiating but not necessary as long as you are declaring a variable on the same line.

```java
// the type on the right side is redundant
DLList<Integer> d =  new DLList<Integer>(5);
```


## Arrays

#### Basics
Arrays are a special object that consists of a numbered of sequences of memory boxes. To get the nth item of the array, bracket notation is used. An array consists of a fixed integer length, x, and a sequence of x memory boxes. Also arrays do not have methods.

#### 3 methods to Instantiate an array:
```java
// this notation creates and array with the specified length and fill in each memory box with a default value of 0
x = new int[3];
// creates y and then creates an array of a length of 5 with those specific elements
y = new int[]{1, 2, 3, 4, 5};
// this notation is used to declare and create z, its the same as above but it omits the new keyword and can only be done when combined with variable declaration
int[] z = {6, 7, 8, 9, 10};
```
#### Array Access and Modifications
One way to copy one array to another is to use System.arraycopy. It uses 5 parameters:
* the array as the source
* where to start the source array
* the array to use as destination
* where to start in the destination array*
* how many items to copying
This method is typically faster than a loop but the only issue is that its harder to read. In addition Java arrays only preform bounds checking a runtime meaning that it compiles but crashes at run time.

#### 2D Arrays
The syntax for the arrays of arrays could be challenging.
```java
// to instantiate 2D int array
int[][] array = new int[4][];
// this creates an array that holes integer arrays; note that we have to manual create the inner arrays like follows
array[0] = new int[]{0, 1, 2, 3};

// java can also create multidimensional arrays with the inner arrays create automatically but with default values
int[][] array = new int[4][4]
// or multidimensional arrays with the inner arrays already populated with this syntax
int[][] array = new int[][]{{1}, {1, 2}, {1, 2, 3}};
```

#### Arrays vs classes
* Both are used to organize a bunch of memory
* Both have a fixed number of "boxes"
* Arrays are accessed via square bracket notation, Classes are accessed via dot notation
* Elements in the array must be all the same type, elements in a class can be different Types
* array indices are computed at runtime, we cannot compute class member variable names

#### Java Arrays vs Other Languages
Java arrays:
* have no special syntax for slicing like in python
* cannot be shrunk or expanded like in ruby
* do not have member methods such as in javascript
* must container values of the same unlike python

#### ArrayList or AList
When talking about methods of doubly linked list the get method is usually slower than the getBack method depending on how it is implemented. Iterating through the list is typically just linear, n. So we implement an AList class instead because of instant retrieval.

#### The naive array based List
acessing the nth element of an array takes constant time, which suggest that array based list would be much more capable for a get method as opposed to a linked list.

```java
// Basic Array list
public class AList{
  private int[] items;
  private int size;

  public AList(){
      size = 0;
      items = new int[100];
  }

// methods of AList
  private void resize(int capacity){
      int[] temp = new int[capacity];
      System.arraycopy(items, 0, temp, 0, size);
      items = temp;
  }

  public void addLast(int i){
    if(size== items.length){
      resice(size+1);
    }
    items[size] = i;
    size++;
  }
  public void getLast(int i){
    return items[size-1];
  }
  public int get(int i){
    return items[i];
  }
  public int size(){
    return size;
  }
  public int removeLast(){
    int ans = getLast();
    size--;
    return ans;
  }
}
```

The invariants of AList are:
* the position of the next item to be inserted is always Size, addLast()
* the number of items in the AList is always size, getLast()
* the position of the last item in the list is always size - 1, size()

#### Implementation Alist
These methods are closely related to the invariants
* addLast is just arr[size]
* getLast is arr[size-1]
* removeLast just decrement the size by one so it will write over it if addLast is performed. But it is good practice to null out objects when they are removed

#### Abstraction
implementation details can be hidden away from users. But as implementers, we can give them any implementation of a list as long as it meets their needs. A user should have no knowledge of how the inner workings are designed.

#### Naive Resizing arrays
If adding an element to an array with all indices filled will cause an error. The answer to this problem is that we need to build a new array that is big enough to accommodate the new data.

```java
// This process of creating a new array and copying the items over is called resizing however we're actually just creating a new array
int[] a = new int[ size + 1 ];
System.arraycop(items, 0 , a, 0, size);
a[size] = 11;
items = a;
size = ++;
```

#### Geometric Resizing
Instead of adding a number of memory boxes by some resizing factor, we instead multiply so that we do not have to copy the array every time it over flows its size.

#### Memory Performance
What happens if we fill up to the size limit of our AList and remove 99% of the indices. there will be way too much memory unused. To fix this issue, we can downsize the array when it starting to look empty. Just define a usage ratio and halve the size of the array when its less than the ratio.

#### Generic AList
It possible to modify the Alist so that it can hold any data type. But in Java, generic arrays are not allowed, To do this, need to use the generics syntax with the angle braces and use any arbitrary type parameter for integer wherever appropriate.
```java
// We cant use this syntax
Item[] items = new Item[8];
// Have to cast even though it yields a compilation warning
Item[] items = (Item[]) new Object[8];
```
