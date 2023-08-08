# Inspire: An Innovative Text Editor

Welcome to Inspire, an innovative text editor powered by React and the open-source EditorJS library. This text editor provides a rich set of features and tools to help you create and edit content seamlessly. It includes capabilities for formatting text, adding headers, creating lists,  and more.

## visit the website
You can access the online text editor by visiting the following link: [Online Text Editor](https://texteditor-987a3.web.app/)

## Features

Inspire comes with a range of features that enhance your text editing experience:

- **Text Formatting:** Apply bold, italic, and underline styles to your text.
- **Headers:** Add different levels of headers to organize your content.
- **Lists:** Create bulleted and numbered lists for clear content structuring.
- **Embed Media:** Easily embed media such as images, videos, and more.
- **Quote Blocks:** Insert quoted text with configurable captions.
- **Checklists:** Include interactive checklists to keep track of tasks.

## Typewriter Effect

The welcome message in Inspire uses a typewriter effect to gradually display the text. The `Typewriter` component is employed to achieve this effect. The text is displayed character by character with a specified delay between each character.

```jsx
import Typewriter from "./Typewriter";

// Usage
<Typewriter text="Welcome to Inspire: An Innovative Text Editor!" delay={100} />
