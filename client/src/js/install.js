const butInstall = document.getElementById('buttonInstall');

// logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // prevent prompt from appearing on mobile
    event.preventDefault();
    // event to be triggered later
    window.deferredPrompt = event;
    // show install button
    butInstall.classList.toggle('hidden', false);
  });

// click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
      // deferred prompt not available
      return;
    }
    // show  install prompt
    promptEvent.prompt();
    const result = await promptEvent.userChoice;
    // reset deferred prompt
    window.deferredPrompt = null;
    // hide the install button
    butInstall.classList.toggle('hidden', true);
  });

// Handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});i