# **Week1 Assignment- HTML** #
**Exercise 1.1**

When a user enters an URL in the browser, how does the browser fetch the desired result ? \
Explain this with the below in mind and Demonstrate this by drawing a diagramfor the same.(2-3hours)\
a. What is the main functionality of the browser?\
b. High Level Components of a browser.\
c. Rendering engine and its use.\
d. Parsers (HTML, CSS, etc)\
e. Script Processors\
f. Tree construction.\
g. Order of script processing\
h. Layout and Painting\

- - -

Web browsers are primarily used to display and access websites on the internet, as well as other content created with programming languages such as Hypertext Markup Language (HTML) and Extensible Markup Language (XML) (XML). Browsers convert Hypertext Transfer Protocol (HTTP) web pages and websites into human-readable content.\

A web browser’s primary function is to render HTML, the code that is used to design or “mark up” web pages. When a browser loads a web page, it processes the HTML, which may contain text, links, and references to images and other items like CSS and JavaScript functions. The browser then renders these objects in the browser window after processing them. Browsers can interpret and display content such as video, images, text, hyperlinks, and XML files.

![Web Browser Working](https://data-flair.training/blogs/wp-content/uploads/sites/2/2021/04/image0112.jpg)

### **The browser's main components are:** ###

1. **The user interface:** this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
2. **The browser engine:** marshals actions between the UI and the rendering engine.
3. **The rendering engine:** responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
4. **Networking:** for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
5. **UI backend:** used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
6. **JavaScript interpreter:** Used to parse and execute JavaScript code.
7. **Data storage:** This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

![Web Browser Components](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/PgPX6ZMyKSwF6kB8zIhB.png)

### The rendering engine ###
The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen.

By default the rendering engine can display HTML and XML documents and images. It can display other types of data via plug-ins or extension; for example, displaying PDF documents using a PDF viewer plug-in. However, in this chapter we will focus on the main use case: displaying HTML and images that are formatted using CSS.

Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.

WebKit is an open source rendering engine which started as an engine for the Linux platform and was modified by Apple to support Mac and Windows.\

**The main flow** \
The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.

After that, this is the basic flow of the rendering engine:

![Rendering Engine](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/bPlYx9xODQH4X1KuUNpc.png)

The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.\

### **Parsing** ###\
Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

Parsing can be separated into two sub processes: lexical analysis and syntax analysis.

Lexical analysis is the process of breaking the input into tokens. Tokens are the language vocabulary: the collection of valid building blocks. In human language it will consist of all the words that appear in the dictionary for that language.

Syntax analysis is the applying of the language syntax rules.

Parsers usually divide the work between two components: the lexer (sometimes called tokenizer) that is responsible for breaking the input into valid tokens, and the parser that is responsible for constructing the parse tree by analyzing the document structure according to the language syntax rules.

The lexer knows how to strip irrelevant characters like white spaces and line breaks.

![Parser](https://web-dev.imgix.net/image/T4FyVKpzu4WKF1kBNvXepbi08t52/TfY1qPDNbZS8iBnlAO4b.png?auto=format&w=101)

The parsing process is iterative. The parser will usually ask the lexer for a new token and try to match the token with one of the syntax rules. If a rule is matched, a node corresponding to the token will be added to the parse tree and the parser will ask for another token.

If no rule matches, the parser will store the token internally, and keep asking for tokens until a rule matching all the internally stored tokens is found. If no rule is found then the parser will raise an exception. This means the document was not valid and contained syntax errors.\

### **Script Processor** ###
The script processor executes Javascript code to process an event. 

![Script Processor](https://media.geeksforgeeks.org/wp-content/uploads/20201120105838/WebScripting.png)

### **Render-tree Construction, Layout, and Paint** ###
The CSSOM and DOM trees are combined into a render tree, which is then used to compute the layout of each visible element and serves as an input to the paint process that renders the pixels to screen. Optimizing each of these steps is critical to achieving optimal rendering performance.

In the previous section on constructing the object model, we built the DOM and the CSSOM trees based on the HTML and CSS input. However, both of these are independent objects that capture different aspects of the document: one describes the content, and the other describes the style rules that need to be applied to the document.\

![Render-tree](https://web-dev.imgix.net/image/C47gYyWYVMMhDmtYSLOWazuyePF2/b6Z2Gu6UD1x1imOu1tJV.png?auto=format&w=845)

To construct the render tree, the browser roughly does the following:

1. Starting at the root of the DOM tree, traverse each visible node.

2. Some nodes are not visible (for example, script tags, meta tags, and so on), and are omitted since they are not reflected in the rendered output.
  Some nodes are hidden via CSS and are also omitted from the render tree; for example, the span node---in the example above---is missing from the render tree because we have an explicit rule that sets the "display: none" property on it.
  For each visible node, find the appropriate matching CSSOM rules and apply them.

1. Emit visible nodes with content and their computed styles.

The final output is a render tree that contains both the content and style information of all the visible content on the screen. With the render tree in place, we can proceed to the "layout" stage.

