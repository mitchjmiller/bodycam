import { useState } from 'react';
import { Snackbar } from 'react-native-paper';

import { SnackOptions, SnackService } from '../services/Snack.service';

export const Snack = () => {

  const [visible, setVisible] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [duration, setDuration] = useState<number | undefined>(7000);

  const onDismiss = () => {
    // Reset defaults
    setVisible(false);
    setDuration(7000);
    setMessage('');
  };

  SnackService.listen('snack', (opts: SnackOptions) => {
    setMessage(opts.message);
    setDuration(opts.duration);
    setVisible(true);
  });

  return (
    <Snackbar
      visible={visible}
      duration={duration}
      onDismiss={onDismiss}
  >{message}</Snackbar>
  );
};