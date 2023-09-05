**Disclaimer to All**

I am a novice developer growing every day. I had assistance developing this project by ChatGPT, who seems less proficient by the day. Every time I asked for help with a new feature, their additions ended up breaking my app more than improving it. Nonetheless, their contributions are definitely present in the final project, and I am mentioning this to maintain Academic Honesty.

I often seek their input on most questions I have, not only related to programming. Nevertheless, I am proud of my program, and I use it often. It has greatly streamlined my development process.

**JavaScript Tool for Custom HTML Elements and CSS Rules**

This JavaScript program creates a Popup window that allows the user to insert custom HTML elements and CSS rules. Inputs are separated by commas to allow multi-word input.

**Usage**

1. Copy the entire JavaScript code provided in this repository.

2. Create a new bookmark in your web browser.

3. Edit the bookmark and paste the copied JavaScript code into the URL or Location field. You can name the bookmark as you like.

4. Save the bookmark.

5. To use the tool, visit any web page and click on the bookmark you just created. This will open a Popup window with options to insert custom HTML elements and CSS rules.

**Formatting Tags**

**Inserting CSS Rules**

To insert CSS rules, use the following format:

**Do not include brackets**

{selector},{property},{value}

{selector}: The CSS selector.

{property}: The CSS property you want to apply.

{value}: The value of the CSS property.

**Example**

Input: h1,color,red

Output:
h1 {
    color: red;
}

**Inserting CSS Rules without Property**

To insert CSS rules without a property, use the following format:

{property},{value}

{property}: The CSS property you want to apply.

{value}: The value of the CSS property.

**Example**

Input: color,blue

Output: color: blue;

**Inserting HTML Tags**

To insert HTML tags, use the following format:

{Opening Tag},{Closing Tag}

{Opening Tag}: The opening HTML tag.

{Closing Tag}: The closing HTML tag.

**Example**

Input: div style="background-color:#8ebf42",div

Output: <div style="background-color:#8ebf42"></div>

**Inserting HTML self-closing Tags**

To insert self-closing HTML tags, use the following format:

{Self-Closing Tag}

**Example**

Input: meta charset="UTF-8" lang="en"

Output: <meta charset="UTF-8" lang="en"/>

The output of your selections will be displayed in a text area within the Popup window. You can copy the generated HTML and CSS code using the "Copy Selection" button. For efficiency's sake, use CTRL + X to cut the code instead of copying it with CTRL + C. This way, the input field stays clear for the following parameters.

I created this project because, while learning how to code, I have tried to find ways to streamline my projects. It may seem like not a lot to make a whole program that saves between 3 and 7 keystrokes at a time. However, with a full website, you've got to figure that it saves hundreds, if not thousands, of keystrokes. I don't know about anyone else, but HTML tags are SO annoying to create for me. Anyway, enjoy, and thanks for reading!
