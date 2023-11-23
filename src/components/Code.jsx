import { useContext } from "react";

import Editor from "./Editor";
import {Box,styled} from '@mui/material';

import { DataContext } from "../context/DataProvider";
const Container=styled(Box)`
display:flex;
background-color:#070764;
height:52vh;

@media only screen and (max-width: 768px){
    display:block;
    height:auto
}
`
const Code=()=>{
    const {html,setHtml,css,setCss,js,setJs}=useContext(DataContext);
    return (
        <Container>
        <Editor
        heading="HTML"
        icon="/"
        color="#FF3C41"
        value={html}
        onChange={setHtml}
        />
        <Editor
        heading="CSS"
        icon="*"
        color="#08e32b"
        value={css}
        onChange={setCss}
        />
        <Editor
        heading="JavaScript"
        icon="()"
        color="#FCD000"
        value={js}
        onChange={setJs}
        />
        </Container>
    )
}
export default Code;