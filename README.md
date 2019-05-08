This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

1. Make API call
1. Loop through 'blanks' array values to get field labels
1. Create form
1. Put user inputs into array
1. Save to store?
1. Get 'value' array values
1. Write 'value' values and 'blank' inputs to page - alternate 'value' and 'blank' input
``

The base url to get a random madlib template, is as follows:
http://madlibz.herokuapp.com/api/random
The url query options are as follows:

Query	Type	Description
minlength	Number	The min number of user inputs in template
maxlength	Number	The max number of user inputs in template
Example API Calls
Here is an example call:

http://madlibz.herokuapp.com/api/random?minlength=5&maxlength=25
Example output:

{
    "value": [
        "Ye can always pretend to be a bloodthirsty ",
        ", threatening everyone by waving yer ",
        " sword in the air, but until ye learn to ",
        " like a pirate, ye'll never be ",
        " accepted as an authentic ",
        ". So here's what ye do: Cleverly work into yer daily conversations ",
        " pirate phrases such as \"Ahoy there, ",
        ",\"\"Avast, ye ",
        ",\" and \"Shiver me ",
        ".\" Remember to drop all yer gs when ye say such words as sailin', spittin', and fightin'. This will give ye a/an ",
        " start to being recognized as a swashbucklin' ",
        ". Once ye have the lingo down pat, it helps to wear a three-cornered ",
        " on yer head, stash a/an ",
        " in yer pants, and keep a/an ",
        " perched atop yer ",
        ". Aye, now ye be a real pirate!",
        0
    ],
    "blanks": [
        "noun",
        "adjective",
        "verb",
        "adverb",
        "noun",
        "adjective",
        "plural noun",
        "plural noun",
        "plural noun",
        "part of the body",
        "noun",
        "noun",
        "noun",
        "noun",
        "part of the body"
    ],
    "title": "Talk Like a Pirate"
}
