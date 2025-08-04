import React from 'react';
import { useBackButton } from '../hooks/useBackButton';

/**
 * BackButtonHandler component for individual pages
 * @param {Function} onBackPress - Custom handler for back button press
 * @param {boolean} preventAppClosure - Whether to prevent app closure on main screens
 * @param {boolean} enabled - Whether to enable back button handling
 */
const BackButtonHandler = ({ 
  onBackPress = null, 
  preventAppClosure = true, 
  enabled = true 
}) => {
  useBackButton(enabled ? onBackPress : null, preventAppClosure);
  return null;
};

export default BackButtonHandler;
