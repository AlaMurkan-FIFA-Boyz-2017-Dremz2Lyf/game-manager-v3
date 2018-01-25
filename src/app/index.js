import Home from './components/Home';

// register the micro app in the main app's registry
if (!window.microAppRegistry) {
  console.error('main app hasn\'t created the registry yet');
} else {
  window.microAppRegistry.registerApp('react-micro-app-starter-kit', Home);
}

