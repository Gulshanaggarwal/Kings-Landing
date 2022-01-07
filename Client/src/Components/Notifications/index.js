import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { destoryAlert } from '../../features/notificationSlice';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

//const Alert = React.forwardRef(function Alert(props, ref) {
// return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
//});

let stop;

export default function Notification() {

  const { alerts } = useSelector((state) => state.notification);
  const [alert, setAlert] = useState({ message: "Nothing", type: "info" })
  const [show, setShow] = useState(false);


  const dispatch = useDispatch();




  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setShow(true);
      stop=setTimeout(() => {
        setShow(false);
        dispatch(destoryAlert());
        
      }, 3000);
    }
    return ()=>{
      clearTimeout(stop);
    }
  }, [alerts])

  const handleClose = () => {
    setShow(false);
    dispatch(destoryAlert());

  }
  return show && (
    <div className="fixed left-0 top-0 w-full">
      <Collapse in={show}>
        <Alert severity={alert.type} variant="filled"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={handleClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {alert.message}
        </Alert>
      </Collapse>
    </div>
  )
}


