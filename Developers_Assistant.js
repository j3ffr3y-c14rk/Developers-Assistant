/* This javascript program creates a Popup window that allows the user to insert custom HTML elements and CSS rules. Inputs are seperated by commas in order to allow multi-word input. */
javascript: (function() {
    // Create a container div for the HTML elements and CSS rules options
    var containerDiv = document.createElement('div');
    // Create input fields and buttons for various options
    var inputField1 = createInputField('text', 'Format: {selector}, {property}, {value}');
    var insertCSSRuleButton = createButton('Selector, Property, Value', insertCSSRule);
    var inputField2 = createInputField('text', 'Format: {property}, {value}');
    var insertNoPropertyCSSRuleButton = createButton('No Property CSS Rule', insertNoPropertyCSSRule);
    var inputField3 = createInputField('text', 'Format: {Opening Tag}, {Closing Tag}');
    var insertTagRuleButton = createButton('Opening Tag, Closing Tag', insertTagRule);
    var inputField4 = createInputField('text', 'Format: {Self-Closing Tag}');
    // Create a text area for output
    var insertSelfClosingTagRuleButton = createButton('Self-Closing Tag', insertSelfClosingTagRule);
    // Create buttons for copying and deleting text
    var textArea = createTextArea('550px', '380px');
    var copyButton = createButton('Copy Selection', copySelection);
    var deleteButton = createButton('Delete Text', deleteText);
    // Add all the elements to the container div
    containerDiv.appendChild(inputField1);
    containerDiv.appendChild(insertCSSRuleButton);
    containerDiv.appendChild(inputField2);
    containerDiv.appendChild(insertNoPropertyCSSRuleButton);
    containerDiv.appendChild(inputField3);
    containerDiv.appendChild(insertTagRuleButton);
    containerDiv.appendChild(inputField4);
    containerDiv.appendChild(insertSelfClosingTagRuleButton);
    containerDiv.appendChild(textArea);
    containerDiv.appendChild(copyButton);
    containerDiv.appendChild(deleteButton);
    // Open a popup window and add the container div to it
    var popup = window.open('', 'Web Developers Assistant Tool', 'width=900,height=550');
    popup.document.body.appendChild(containerDiv);
    // Function to create an input field
    function createInputField(type, placeholder) {
        var inputField = document.createElement('input');
        inputField.type = type;
        inputField.placeholder = placeholder;
        inputField.style.width = '500px';
        return inputField;
    }
    // Function to create a button
    function createButton(text, clickFunction) {
        var button = document.createElement('button');
        button.textContent = text;
        button.addEventListener('click', clickFunction);
        return button;
    }
    // Function to create a  text area
    function createTextArea(width, height) {
        var textArea = document.createElement('textarea');
        textArea.style.width = width;
        textArea.style.height = height;
        return textArea;
    }
    // Function to create a  CSS rule
    function insertCSSRule() {
        var inputText = inputField1.value.trim();
        if (inputText) {
            var parts = inputText.split(',');
            if (parts.length === 3) {
                var selector = parts[0].trim();
                var property = parts[1].trim();
                var value = parts[2].trim();
                var cssRule = `${selector} {\n ${property}: ${value}; \n}`;
                textArea.value += cssRule;
                inputField1.value = '';
            }
        }
    }
    // Function to insert a CSS rule without property
    function insertNoPropertyCSSRule() {
        var inputText = inputField2.value.trim();
        if (inputText) {
            var parts = inputText.split(',');
            if (parts.length === 2) {
                var property = parts[0].trim();
                var value = parts[1].trim();
                var noPropertyCSSRule = ` ${property}: ${value}; \n`;
                textArea.value += noPropertyCSSRule;
                inputField2.value = '';
            }
        }
    }
    // Function to insert a tag rule
    function insertTagRule() {
        var inputText = inputField3.value.trim();
        if (inputText) {
            var parts = inputText.split(',');
            if (parts.length === 2) {
                var openingTag = parts[0].trim();
                var closingTag = parts[1].trim();
                var tagRule = `<${openingTag}> </${closingTag}>`;
                textArea.value += tagRule;
                inputField3.value = '';
            }
        }
    }
    // Function to insert a self-closing tag rule
    function insertSelfClosingTagRule() {
        var inputText = inputField4.value.trim();
        if (inputText) {
            var selfClosingTag = inputText;
            var selfClosingTagRule = `<${selfClosingTag}/>`;
            textArea.value += selfClosingTagRule;
            inputField4.value = '';
        }
    }
    // Function to copy the selection
    function copySelection() {
        textArea.select();
        document.execCommand('copy');
    }
    // Function to delete the selection
    function deleteText() {
        textArea.value = '';
    }
})();