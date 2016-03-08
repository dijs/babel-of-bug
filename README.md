Bug Example
---------

How to reproduce:

- clone this repo
- run `npm install`
- run `npm start`

Since the es2015 preset contains the "for...of" operator, this should not fail.

I first encountered this issue while working iOS 8, which does not have the 'Symbol' feature built in. And this "for ... of" polyfill seems to be using Symbol. Should a es5 polyfill ever use 'Symbol'?
