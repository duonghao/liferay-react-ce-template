import "vite/modulepreload-polyfill"; // Required for vite backend integration
import React from "react";
import { render } from "react-dom";
import App from "./App.tsx";
import "./index.css";

const ELEMENT_ID = "sample-custom-element"; // Tag used to represent this element in HTML

class SampleCustomElement extends HTMLElement {
  connectedCallback() {
    render(<App></App>, this);
  }
}

if (!customElements.get(ELEMENT_ID)) {
  customElements.define(ELEMENT_ID, SampleCustomElement);
}
