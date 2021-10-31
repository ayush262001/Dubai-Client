import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog() {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.href="/editprofile";
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Change Email</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Change your existing email id, note that your previous payment data will be erased
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="New Email Address"
            type="email"
            fullWidth
            variant="standard"
          />

          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}