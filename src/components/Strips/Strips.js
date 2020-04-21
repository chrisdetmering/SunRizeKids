import React from 'react'; 
import classes from './Strips.module.css';
import Strip from './Strip/Strip';

const strips = () => { 
  const strips = [
    { id: '32432', header: 'What is SunRize Kids?', contentType: 'content-1' }, 
    { id: '32432', header: 'How Does it work?', contentType: 'content-2' }, 
    { id: '32432', header: 'Join the Challenge in Two Simple Steps!', contentType: 'content-3' }, 
    { id: '32432', header: 'Great Kids Are...', contentType: 'content-4' }, 
  ]

  return(<div className={classes}>
      {strips.map((strip, i) => ( 
        <Strip 
          key={strip.id * i}
          header={strip.header}
          type={strip.contentType}
          bg={i} />
      ))}
      </div>
  )

}

export default strips; 