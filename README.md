**JavaScript Tool for Custom HTML Elements and CSS Rules**

This JavaScript program creates a Popup window that allows the user to insert custom HTML elements and CSS rules. Inputs are separated by commas to allow multi-word input.

Usage:
1.) Copy the entire JavaScript code provided in this repository.
2.) Create a new bookmark in your web browser.
3.) Edit the bookmark and paste the copied JavaScript code into the URL or Location field. You can name the bookmark as you like.
4.) Save the bookmark.
5.) To use the tool, visit any web page and click on the bookmark you just created. This will open a Popup window with options to insert custom HTML elements and CSS rules.

**Formatting Tags**

**Inserting CSS Rules**
To insert CSS rules, use the following format:
**Do not include brackets**
{selector},{property},{value}
    {selector}: The CSS selector.
    {property}: The CSS property you want to apply.
    {value}: The value of the CSS property.
Example:
h1,color,red

**Inserting CSS Rules without Property**
To insert CSS rules without a property, use the following format:
{property},{value}
    {property}: The CSS property you want to apply.
    {value}: The value of the CSS property.
Example:
color,blue

**Inserting HTML Tags**
To insert HTML tags, use the following format:
{Opening Tag},{Closing Tag}
    {Opening Tag}: The opening HTML tag.
    {Closing Tag}: The closing HTML tag.
Example:
div, /div

**Inserting Self-Closing HTML Tags**
To insert self-closing HTML tags, use the following format:
{Self-Closing Tag}
    {Self-Closing Tag}: The self-closing HTML tag.

The output of your selections will be displayed in a text area within the Popup window. You can copy the generated HTML and CSS code using the "Copy Selection" button and then for efficiency sake Cut with CTRL + x, instead of copying with CTRL + c so that way the input field stays cleared for the following parameter.
