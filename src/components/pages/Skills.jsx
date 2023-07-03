import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Skill from "./Skill";
const Skills = () => {
    
    const [html, setHtml] = useState(0);
    const [css, setCss] = useState(0);
    const [js, setJs] = useState(0);
    const [reactJs, setReactJs] = useState(0);
    const [git, setGit] = useState(0);
    const [bootstrap, setBootstrap] = useState(0);
    const [redux, setRedux] = useState(0);
    const [mui, setMui] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setHtml((pre) => {
          const diff = Math.floor(Math.random() * 10);
          return Math.min(diff + pre, 90);
        });
        setCss((prev) => {
          const diff = Math.floor(Math.random() * 10);
          return Math.min(prev + diff, 80);
        });
        setJs((prev) => {
          const diff = Math.floor(Math.random() * 10);
          return Math.min(prev + diff, 60);
        });
        setReactJs((prev) => {
          const diff = Math.floor(Math.random() * 10);
          return Math.min(prev + diff, 75);
        });
        setGit((prev) => {
          const diff = Math.floor(Math.random() * 10);
          return Math.min(prev + diff, 60);
        });
        setBootstrap((prev) => {
          const diff = Math.floor(Math.random() * 10);
          return Math.min(prev + diff, 80);
        });
        setRedux((prev) => {
          const diff = Math.floor(Math.random() * 10);
          return Math.min(prev + diff, 50);
        });
        setMui((prev) => {
          const diff = Math.floor(Math.random() * 10);
          return Math.min(prev + diff, 70);
        });
       
      }, 100);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
    return ( 
        <Grid container rowSpacing={6} sx={{ mt: 4 }}>
          <Skill value={html} label="Html" color={"#6272a4"} />
          <Skill value={css} label="Css" color={"#6272a4"} />
          <Skill value={bootstrap} label="bootstrap" color={"#6272a4"} />
          <Skill value={js} label="Js" color={"#6272a4"} />
          <Skill value={reactJs} label="ReactJs" color={"#6272a4"} />
          <Skill value={redux} label="redux" color={"#6272a4"} />
          <Skill value={mui} label="Mui" color={"#6272a4"} />
          <Skill value={git} label="git" color={"#6272a4"} />
        </Grid>
     );
}
 
export default Skills;