//! Standard Template Library (STL)
// The Standard Template Library (STL) is a library in C++ that provides a collection of reusable data structures and algorithms. 
// It is part of the C++ Standard Library and offers a set of generic classes and functions that can be used to solve common programming problems efficiently.

// COMPONENTS OF STL:
//*1.Containers: store and manage collections of objects with different characteristics, such as dynamic resizing, ordered or unordered data, or unique elements.
// Containers are themselves of three types: 
    //? Sequence Containers
            // A sequence container stores that data in a linear fashion. 
            // Vector, List, Dequeue etc
                //! Vector
                    //*  a vector is a dynamic array-like container which have Dynamic Size, Random Access
                    // In sequence containers, we have Vectors, which has following properties:
                    // Faster random access to elements in comparison to array
                    // Slower insertion and deletion at some random position, except at the end.
                    // Faster insertion at the end.
                //! Lists
                    // Random accessing elements is too slow, because every element is traversed using pointers.
                    // Insertion and deletion at any position is relatively faster, because they only use pointers, which can easily be manipulated.
    //? Associative Containers
            // An associative container is designed in such a way that enhances the accessing of some element in that container.
            // It is very much used when the user wants to fastly reach some element. 
            // Some of these containers are, Set, Multiset, Map, Multimap etc.They store their data in a tree-like structure.
    //? Derived Containers
            // these containers are derived from either the sequence or the associative containers.
            //  They often provide you with some better methods to deal with your data. They deal with real life modelling.
            // Some examples of derived containers are Stack, Queue, Priority Queue, etc.

//*2.Algorithm:algorithms provide efficient and generic solutions for common tasks.
// Examples include sorting (std::sort), searching (std::find), transforming (std::transform), and many more. 
//*3.Iterators:provide a uniform way to access elements in containers or sequences. 
//* 4.Function objects:(also known as functors) that act like function pointers.

