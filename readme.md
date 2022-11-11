# How to use

Put this file in your nui directory where you can import it.

Also install axios because it is dependent on it.

```shell
npm install axios
```

or

```shell
yarn add axios
```

or

```shell
pnpm add axios
```

# Functions

## OnNuiEvent

Example:

```js
import { OnNuiEvent } from './nui.js';

OnNuiEvent('show', (payload) => {
  showUI = payload;
});
```

## OnKeyEvent

Example:

```js
import { OnKeyEvent } from './nui.js';

OnKeyEvent(['Escape', 'Backspace'], () => {
  showUI = false;
});
```

## RemoveNuiListener

Example:

```js
import { RemoveNuiListener } from './nui.js';

RemoveNuiListener(); // removes all key and message listeners
```

## post

Example:

```js
import { post } from './nui.js'

// for the await put in an async function or use in an app that supports toplevel await.
const inv = await post('yp-testscript', 'getinventory', payload = {citizenid = 'ABC12345'})
```
