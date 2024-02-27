# Ionic Application Memory Leak Test
This application is to test out a memory leak scenario I stumbled upon while experimenting with different markup.

In the end it was discovered that the leak is caused by having the LastPass Chrome extension enabled. But that leak does not happen at all in a [plain React sample](https://github.com/jameson-w-taylor/pure-react-memory-leak-test), nor does it happen in this Ionic sample unless there is a specific style of markup used.

Also of note, it seems that in the "happy path" the heap snapshot seems to release everything as expected but the "memory leak" adds an extra reference that says around (but does not accumulate, so not a "leak"). Might be worth exploring why the Ionic sample does this, but only when using the same markup that had issues with the LastPass extension.

## Developer Setup
1. Run `npm install`
1. Run `npm run dev`
1. Follow scenarios described in first view of the app