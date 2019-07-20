import React from 'react';
import EditText from 'react-editext';

export default (props) => (
    <EditText {...props}></EditText>
);

/**
value	string	Yes	''	Value of the content and input [in edit mode]
type	string	Yes	text	Input type. Possible options are: text, number, email, textarea, date, datetime-local, time, month, url, week, tel
hint	node	No	''	A simple hint message appears at the bottom of input element. Any valid element is allowed.
onSave	function	Yes		Function will be called when save button clicked. value is passed to cb.
inputProps	object	No		Props to be passed to input element. Any kind of valid DOM attributes are welcome.
viewProps	object	No		Props to be passed to div element that shows the text. You can specify your own styles or className
validation	function	No		Pass your own validation function. takes one param -> value. It must return true or false
validationMessage	string	No	Invalid Value	If validation fails this message will appear
onValidationFail	function	No		Pass your own function to track when validation failed. See Examples page for the usage.
onCancel	function	No		Function will be called when editing is cancelled.
saveButtonContent	node	No	''	Content for save button. Any valid element is allowed. Default is: ✓
cancelButtonContent	node	No	''	Content for cancel button. Any valid element is allowed. Default is: ✕
editButtonContent	node	No	''	Content for edit button. Any valid element is allowed. Default is: ✎
saveButtonClassName	string	No		Custom class name for save button.
cancelButtonClassName	string	No		Custom class name for cancel button.
editButtonClassName	string	No		Custom class name for edit button.
viewContainerClassName	string	No		Custom class name for the container in view mode.See here
editContainerClassName	string	No		Custom class name for the container in edit mode. Will be set to viewContainerClassName if you set it and omit this. See here
mainContainerClassName	string	No		Custom class name for the top-level main container. See here
hideIcons	bool	No	false	Set it to true if you don't want to see default icons on action buttons. See Examples page for more details.
buttonsAlign	string	No	after	Set this to before if you want to locate action buttons before the input instead of after it. See here.
*/