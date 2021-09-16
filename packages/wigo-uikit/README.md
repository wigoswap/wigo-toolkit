# Wigo UIkit

## Install

`yarn add @wigoswap/wigo-uikit`

## Setup

### Theme

Before using Wigo UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@wigoswap/wigo-uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@wigoswap/wigo-uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://wigoswap.github.io/wigo-uikit/)
