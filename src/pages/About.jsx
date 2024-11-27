import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './about.css'



export default function TransitionsModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box>
              <div className='CardProfile'>
                  <div className='CardMain'>
                    <selection class name="hSelection">
                        <h4>Укажите телефон</h4>
                        <button viebox="0 0 24 24"></button>
                    </selection>
                    <selection>
                      
                    </selection>
                  </div>
              </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

















// import React from 'react'

// function About() {
//   return (
//     <div style={{height: '100vh'}}>
//         <div>
//             <div style={{display: 'flex', justifyContent: 'center'}}>
//                 <img src="https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Pitstsa_30sm/Obzhorka_30sm/Medium.png?hash=f7cb500910fd30ed1c98bd37b27ba6af" alt="pizza" />
//                 <img src="https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v1/Pitstsa_30sm/Margarita_30sm/Medium.png?hash=e7ac3d125c355e46ec2091677801f5eb" alt="pizza" />
//                 <img src="https://staticcontent.mypizza.kg/Dishes/Imperiia_Pitstsyi/v10/Pitstsa_30sm/Klassika_30sm/Medium.png?hash=7912b7354473adc68ed589d2f71d8da4" alt="pizza" />
//             </div>
//                 <p style={{margin: '10px', fontSize: '25px', fontWeight: 'bold'}}>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus illum commodi perspiciatis, odio molestias voluptatum quasi earum magni eius veritatis laborum est quisquam exercitationem quo fuga voluptatem, repellat doloremque qui.
//                 </p>
//         </div>
//     </div>
//   )
// }

// export default About