import React ,{useEffect}from 'react'
import classe from './cockpit.css'

const cockpit = (props) => {
    console.log('useeffect cockpit.js')
    let classes = []
    let btnClass=""
    if(props.showPerson){
        btnClass=classe.Red
    }
 
    if(props.persons.length<=2){
      classes.push('red');
    
    }
    if(props.persons.length<=1){
      classes.push('bold')
    }
 return(   
<div>
<h1>{props.title}</h1>
<p className={classes.join(' ')}>This is really working!</p>
<button
  className={btnClass}
  onClick={props.clicked}>Toggle Persons</button>
</div>
 )
}

export default cockpit;