import "./App.css";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Embed from "@editorjs/embed";
import Typewriter from "./Typewriter";
function App() {
  const LinkTool = require("@editorjs/link");
  const RawTool = require("@editorjs/raw");
  const SimpleImage = require("@editorjs/simple-image");
  const Checklist = require("@editorjs/checklist");
  const Quote = require("@editorjs/quote");
  const editor = new EditorJS({
    holder: "editorjs",
    tools: {
      raw: RawTool,
      embed: {
        class: Embed,
        config: {
          services: {
            youtube: true,
            coub: true,
          },
        },
      },
      quote: {
        class: Quote,
        inlineToolbar: true,
        shortcut: "CMD+SHIFT+O",
        config: {
          quotePlaceholder: "Enter a quote",
          captionPlaceholder: "Quote's author",
        },
      },
      header: {
        class: Header,
        inlineToolbar: ["link"],
      },
      list: {
        class: List,
        inlineToolbar: true,
      },
      linkTool: {
        class: LinkTool,
        // config: {
        //   endpoint: 'http://localhost:8008/fetchUrl', // Your backend endpoint for url data fetching,
        // }
      },
      checklist: {
        class: Checklist,
        inlineToolbar: true,
      },
    },
  });
  return (
    <div className="App">
      <div className="container">
        <div className="text-intro">
        <Typewriter text="  Welcome to Inspire: An Innovative Text Editor!" delay={100} />
        </div>
        <div id="editorjs"></div>
      </div>
    </div>
  );
}

export default App;
