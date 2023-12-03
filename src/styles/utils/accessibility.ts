import { StylesConfig } from '../../config';

const AccessibilityStyles = {
  '&.aim-disabled': {
    '& *[tabindex]:focus': {
      outline: 'none',
    },
  },
  '&.aim-enabled': {
    '& input:not([type="checkbox"]) *[tabindex]:focus': {
      outlineWidth: 2,
      outlineStyle: 'auto',
      outlineOffset: 2,
      outlineColor: StylesConfig.primary.base,
    },

    '& input[type="checkbox"] *[tabindex]:focus': {
      outline: 'none',
    },
  },
};

function useAccessibilityStyles() {
  function tabbed(e: any) {
    if (e.keyCode === 9) {
      document.documentElement.classList.remove('aim-disabled');
      document.documentElement.classList.add('aim-enabled');

      window.removeEventListener('keydown', tabbed);
      window.addEventListener('mousedown', clicked);
    }
  }

  function clicked() {
    document.documentElement.classList.remove('aim-enabled');
    document.documentElement.classList.add('aim-disabled');
    document.getElementById('aim-styles')?.remove();

    window.removeEventListener('mousedown', clicked);
    window.addEventListener('keydown', tabbed);
  }

  document.documentElement.classList.add('aim-disabled');
  window.addEventListener('keydown', tabbed);
}

export { useAccessibilityStyles };
export default AccessibilityStyles;
