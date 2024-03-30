
## What is the JVM

Java Virtual Machine, or JVM, loads, verifies and executes Java bytecode. It is known as the interpreter or the core of Java programming language because it executes Java programming.

### The role of JVM in Java

JVM is specifically responsible for converting bytecode to machine-specific code and is necessary in both JDK and JRE. It is also platform-dependent and performs many functions, including memory management and security. In addition, JVM can run programs written in other programming languages that have been translated to Java bytecode.

#### Java Native Interface

Java Native Interface (JNI) is often referred to in connection with JVM. JNI is a programming framework that enables Java code running in JVM to communicate with (i.e., to call and be called by) applications associated with a piece of hardware and specific operating system platform. These applications are called native applications and can often be written in other languages. Native methods are used to move native code written in other languages into a Java application.
### JVM components

JVM consists of three main components or subsystems:

- **Class Loader Subsystem** is responsible for loading, linking and initializing a Java class file (i.e., “Java file”), otherwise known as dynamic class loading.
- **Runtime Data Areas** contain method areas, PC registers, stack areas and threads.
- **Execution Engine** contains an interpreter, compiler and garbage collection area.

<img style="background-color: white; padding: 16px;" src="https://static.javatpoint.com/images/jvm-architecture.png" />
## What is Java Runtime Environment (JRE)?

[Java Runtime Environment](https://www.ibm.com/cloud/learn/jre), or JRE, is a set of software tools responsible for execution of the Java program or application on your system.

JRE uses heap space for dynamic memory allocation for Java objects. JRE is also used in JDB (Java Debugging).

### The role of JRE in Java

If a programmer would like to execute a Java program using the Java command, they should install JRE. If they are only installing (and not developing or compiling code), then only JRE is needed.

## What is Java Development Kit (JDK)?

Java Development Kit, or JDK, is a software development kit often called a superset of JRE. It is the foundational component that enables Java application and Java applet development. It is platform-specific, so separate installers are needed for each operating system (e.g., Mac, Unix and Windows).

### The role of JDK in Java

JDK contains all the tools required to compile, debug and run a program developed using the Java platform. (It’s worth noting that Java programs can also be run using command line.)

### JDK components

JDK includes all the Java tools, executables and binaries needed to run Java programs. This includes JRE, a compiler, a debugger, an archiver and other tools that are used in Java development.


## How JVM, JRE and JDK work together

Let’s first look at how the three core components of Java work together, and then we can examine the differences. The diagram below provides an image of how JVM, JRE and JDK fit together in the Java landscape.

<img src="https://www.ibm.com/blog//wp-content/uploads/2021/06/Screen-Shot-2021-07-01-at-10.06.53-AM.png"/>


If you envision a baseball sliced open, it contains three main components: the round cushioned core, the wool and cotton midsection and the cowhide exterior. A ball without all three of these layers will not perform its intended function. Much like the three basic parts of a baseball, JVM, JRE and JDK all have very specific functions. Without all three, Java will not operate successfully.

## JDK vs. JRE vs. JVM: Key differences

And now, for the differences:

- JDK is the development platform, while JRE is for execution.
- JVM is the foundation, or the heart of Java programming language, and ensures the program’s Java source code will be platform-agnostic.
- JVM is included in both JDK and JRE – Java programs won’t run without it.
## Complementary technologies

There are many complementary technologies that can be used to enhance JVM, JRE or JDK. The following technologies are among the most frequently used:

- **Just-in-time Compiler (JIT)** is part of JVM and optimizes the conversion of bytecode to machine code. It selects similar bytecodes to compile at the same time, reducing the overall duration of bytecode to machine code compilation.
- **Javac**, another complementary tool, is a compiler that reads Java definitions and translates them into bytecode that can run on JVM.
- **Javadoc** converts API documentation from Java source code to HTML. This is useful when creating standard documentation in HTML.