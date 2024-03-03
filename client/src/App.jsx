import {Modal, Box, Typography, TextField, LinearProgress} from '@mui/material';
import { useState } from "react";
import axios from "axios";
import GPTResponse from './components/GPTResponse';

function App() {
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  function handleOpen() {
    setOpen(true);
    setPrompt('');
    setResponse('');
  }

  function handleClose() {
    setOpen(false);
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setResponse('')
    setLoading(true);
    const res = await axios.post('https://vercel.com/amit-kumars-projects-21bf035e/info-mate-backend/7txhcYu9nG2VrHQayGYrhFcDjXrd/chat', {prompt: prompt})
    setResponse(res);
    setLoading(false);
    console.log(res);
  }

  return (
    <div className="app">
      <h1><span className="span">InfoMate:</span></h1> 
      <h1 className="text">Get answers to your questions faster!</h1>
      <button onClick={handleOpen} className="btn">Ask me anything!</button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className='chatgpt-modal'
      >
        <Box className="container">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Drop your questions.
          </Typography>
          <form style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} onSubmit={(e) => handleSubmit(e)}>
            <TextField value={prompt} onChange={(e) => setPrompt(e.target.value)} label="Query" variant="outlined" sx={{margin: "15px 0", width: "100%"}} />
            <button type="submit" className='btn'>Submit</button>
          </form>
          {loading && <LinearProgress sx={{margin: "20px 0"}}/>}
          {response && <GPTResponse response={response}/>}
        </Box>
      </Modal>
      
    </div>
  )
}

export default App
