import React, { useState, useEffect, useCallback } from 'react';
import { Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

function AlertBar({ errorMessage }) {
  console.log("inside alertbar");
  const [snackbar, setSnackbar] = useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const handleClose = useCallback(() => {
    setSnackbar((snackbar) => { return { ...snackbar, open: false }});
  }, []);

  useEffect(() => {
    setSnackbar((snackbar) => { return { ...snackbar, open: true } });
    setTimeout(() => {
      handleClose();
    }, 3000);
  }, [errorMessage, handleClose, setSnackbar]);


  return (
    <div> { errorMessage.length > 0 &&
      <Snackbar
        anchorOrigin={{ vertical: snackbar.vertical, horizontal: snackbar.horizontal }}
        open={snackbar.open}
        onClose={handleClose}
        key="Error snackbar"
        autoHideDuration={2000}
      >
        <Alert onClose={handleClose} variant="filled" severity="error">
          {errorMessage[0]}
        </Alert>
      </Snackbar>
      }
    </div>
  );
}

export default AlertBar;
