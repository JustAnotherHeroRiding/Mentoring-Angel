## What is Gradle

Gradle **automates building, testing, and deployment of software** from information in **build scripts**.
### Why Gradle

**Gradle** is a widely used and mature tool with an active community and a strong developer ecosystem.
- Gradle is the most popular build system for the **JVM** and is the default system for **Android** and **Kotlin Multi-Platform projects.** It has a rich community plugin ecosystem.
- Gradle can automate a wide range of software build scenarios using either its built-in functionality, third-party plugins, or custom build logic.
- Gradle provides a high-level, declarative, and expressive build language that makes it easy to read and write build logic.
- Gradle is fast, scalable, and can build projects of any size and complexity.
- Gradle produces dependable results while benefiting from optimizations such as incremental builds, build caching, and parallel execution.

### Supported Languages
Gradle supports Android, Java, Kotlin Multiplatform, Groovy, Scala, Javascript, and C/C++.


### Gradle Concepts

#### Projects

A Gradle **project** is a piece of software that can be built, such as an application or a library.
**Single project** builds include a single project called the **root project**.
**Multi-project** builds include **one root project** and **any number of subprojects**.

#### Build Scripts

**Build scripts** detail to Gradle what steps to take to build the project.
Each project can include one or more build scripts.

#### Dependency Management

**Dependency management** is an automated technique for declaring and resolving external resources required by a project.
Each project typically includes a number of external dependencies that Gradle will resolve during the build.

#### Tasks

**Tasks are a basic unit of work** such as compiling code or running your test.
Each project contains one or more tasks defined inside a build script or a plugin.

#### Plugins

Plugins are used to **extend Gradle’s capability** and optionally contribute **tasks** to a project.



## What is Maven

### Maven's Objectives

Maven's primary goal is to allow a developer to comprehend the complete state of a development effort in the shortest period of time. In order to attain this goal, Maven deals with several areas of concern:

- Making the build process easy
- Providing a uniform build system
- Providing quality project information
- Encouraging better development practices

### Making the build process easy

While using Maven doesn't eliminate the need to know about the underlying mechanisms, Maven does shield developers from many details.

### Providing a uniform build system

Maven builds a project using its project object model (POM) and a set of plugins. Once you familiarize yourself with one Maven project, you know how all Maven projects build. This saves time when navigating many projects.

### Providing quality project information

Maven provides useful project information that is in part taken from your POM and in part generated from your project's sources. For example, Maven can provide:

- Change log created directly from source control
- Cross referenced sources
- Mailing lists managed by the project
- Dependencies used by the project
- Unit test reports including coverage

Third party code analysis products also provide Maven plugins that add their reports to the standard information given by Maven.

### Providing guidelines for best practices development

Maven aims to gather current principles for best practices development and make it easy to guide a project in that direction.

For example, specification, execution, and reporting of unit tests are part of the normal build cycle using Maven. Current unit testing best practices were used as guidelines:

- Keeping test source code in a separate, but parallel source tree
- Using test case naming conventions to locate and execute tests
- Having test cases setup their environment instead of customizing the build for test preparation

Maven also assists in project workflow such as release and issue management.

Maven also suggests some guidelines on how to layout your project's directory structure. Once you learn the layout, you can easily navigate other projects that use Maven.

While Maven takes an opinionated approach to project layout, some projects may not fit with this structure for historical reasons. While Maven is designed to be flexible to the needs of different projects, it cannot cater to every situation without compromising its objectives.

If your project has an unusual build structure that cannot be reorganized, you may have to forgo some features or the use of Maven altogether.

### What is Maven Not?

You might have heard some of the following things about Maven:

- Maven is a site and documentation tool
- Maven extends Ant to let you download dependencies
- Maven is a set of reusable Ant scriptlets

While Maven does these things, as you can read above in the “What is Maven?” section, these are not the only features Maven has, and its objectives are quite different.


### Feature Summary

The following are the key features of Maven in a nutshell:

- Simple project setup that follows best practices - get a new project or module started in seconds
- Consistent usage across all projects - means no ramp up time for new developers coming onto a project
- Superior dependency management including automatic updating, dependency closures (also known as transitive dependencies)
- Able to easily work with multiple projects at the same time
- A [large and growing repository of libraries and metadata](https://maven.apache.org/repository/) to use out of the box, and arrangements in place with the largest Open Source projects for real-time availability of their latest releases
- Extensible, with the ability to easily [write plugins](https://maven.apache.org/plugin-developers/) in Java or scripting languages
- Instant access to new features with little or no extra configuration
- Ant tasks for dependency management and deployment outside of Maven
- Model based builds: Maven is able to build any number of projects into predefined output types such as a JAR, WAR, or distribution based on metadata about the project, without the need to do any scripting in most cases.
- Coherent site of project information: Using the same metadata as for the build process, Maven is able to generate a web site or PDF including any documentation you care to add, and adds to that standard reports about the state of development of the project. Examples of this information can be seen at the bottom of the left-hand navigation of this site under the "Project Information" and "Project Reports" submenus.
- Release management and distribution publication: Without much additional configuration, Maven will integrate with your source control system (such as Subversion or Git) and manage the release of a project based on a certain tag. It can also publish this to a distribution location for use by other projects. Maven is able to publish individual outputs such as a JAR, an archive including other dependencies and documentation, or as a source distribution.
- Dependency management: Maven encourages the use of a central repository of JARs and other dependencies. Maven comes with a mechanism that your project's clients can use to download any JARs required for building your project from a central JAR repository much like Perl's CPAN. This allows users of Maven to reuse JARs across projects and encourages communication between projects to ensure that backward compatibility issues are dealt with.