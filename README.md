# React + TypeScript + Vite

This template provides a minimal setup to get a Front-end Liferay Client Extension (CX) working with React and Vite with HMR. The template can be used to deploy a single CX or a bundle of CXs, all of which share common dependencies.

## Setup

## Adding New Front-end CX

1. Copy this template into the client-extensions folder in your Liferay workspace.

1. Install dependencies.
    ```shell
    npm i
    ```

1. Define the client extension metadata in the client-extension.*.yaml. The `sample-custom-element` metadata can be used as a template on what to specify. 

2. Create a CX folder with the same name as the CX ERC defined previously (e.g. sample-custom-element).

3. Define a `main.tsx` that creates a custom element which renders the react component. The `main.tsx` file in sample-custom-element/ can be used as a template. Ensure that the element-id is unique, as with all custom elements.

## Commands

### Initialising vite's dev server
```bash
npm run dev
```