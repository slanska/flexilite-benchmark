# flexilite-benchmark
Utility and web UI for benchmarking and primary testing of Flexilite EAV/CR
[[https://github.com/slanska/flexilite]]

## Goals of this project

* Provide basic UI for dealing with Flexilite databases, including
data browsing, filtering, CRUD operations, sorting etc.
* Master Webix JavaScript component library [[http://www.webix.com]] and
Webix Jet framework 
* Test all major refactoring actions on Flexilite databases in the interactive
way
* Implement simple benchmarking (via one URL which will run random queries 
on Flexilite and non-Flexilite database), using Apache Benchmark and other
similar utilities, to get empirical results on Flexilite speed capabilities
* Propose and try universal Node.js project structure, which could be 
shared among multiple target plarforms (web, PhoneGap/Cordova, Electron)
* Master gulp or webpack for automated transpiling TypeScript files to ES5
 JavaScript and bundling all resources into single file (minified and debug
 versions)

