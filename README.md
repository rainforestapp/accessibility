Simple browser extensions to notify websites of your accessibility requirements.

Adds a ``.colorblind`` class to the body of every website you visit.

### Why?
There is no standardised way of communicating one's accessibility requirements to a browser (and hence a website). __The accessibility extension is a potential standard way to simply define one's accessibility issues, and doesn't require the developer to do any additional work aside from actually designing for those issues.__

For example, let's say we want to create conditional styles for colorblind users. Without using this extension, we would have to create the infrastructure and code to store whether the user is colorblind or not. With this extension all we need to do is create a new stylesheet for ``.colorblind``.

### Usage:

#### Chrome extension
Install from the Chrome web store.

Alternatively, to install manually (for development, for example):

1. clone this repo / download as ZIP
2. in Chrome, goto Extensions preferences (under Chrome preferences)
3. enable 'Developer mode' by checking the developer mode checkbox
4. click 'load unpacked extension' and select the 'chrome-extension' folder from this repo
5. enjoy!

### Sites that are accessibility-friendly
i.e. that have created styles to target accessibility issues:

- [rainforestqa.com](https://rainforestqa.com)

### Todo:
- [x] Chrome extension
- [x] add 'colorblind' class to body
- [ ] toggleable accessibility requirements from localstorage + options page
- [ ] detect when page has styles for colorblind users and signify in omnibox
- [ ] firefox extension
- [ ] IE extension
- [ ] Safari extension

### Contributing:
Just make a Pull Request! Please try and avoid adding unneccessary extensions and requesting unneeded permissions of the user - the objective is to keep these extensions as lightweight and simple as possible.
