# React + TypeScript + Vite

This template provides a minimal setup to get a Front-end Liferay Client Extension (CX) working with React and Vite with HMR. The template can be used to deploy a single CX or a bundle of CXs, all of which share common dependancies.

## Setup

### Enabling HMR

For development purposes, in local liferay instances vite's dev server is used to serve static files. By default, liferay is unable to recognise changes to files being served and refresh on change. To enable this, the following script must be injected on liferay's end.

```html
<script type="module">
  import RefreshRuntime from 'http://localhost:5173/@react-refresh'
  RefreshRuntime.injectIntoGlobalHook(window)
  window.$RefreshReg$ = () => {}
  window.$RefreshSig$ = () => (type) => type
  window.__vite_plugin_react_preamble_installed__ = true
</script>
```

Add this script to Site Settings -> Analytics -> Matomo.

## Adding New Front-end CX

1. Define the client extension metadata in the client-extension.*.yaml. The `sample-custom-element` metadata can be used as a template on what to specify. 

2. Create a CX folder with the same name as the CX ERC defined previously (e.g. sample-custom-element).

3. Define a `main.tsx` that creates a custom element which renders the react component. The `main.tsx` file in sample-custom-element/ can be used as a template. Ensure that the element-id is unique, as with all custom elements.

## Commands

### Deploying to local
```bash
blade gw deploy
```

### Building for deployment on production
```bash
blade gw deployPrd
```

### Initialising vite's dev server
```bash
npm run dev
```