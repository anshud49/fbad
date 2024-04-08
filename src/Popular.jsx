import React, { useState, useEffect } from 'react';

export default function Popular({ onChildValue }) {
  function ListItem({ value }) {
    const handleClick = () => {
      onChildValue(value);
    };

    return <li onClick={handleClick}>{value}</li>;
  }

  // make array of favourite topics from local storage 
  const sf = JSON.parse(localStorage.getItem('favorited-categories'));
  
  //make state to know that whether favourite category array is empty or not
  const [pop, setPop] = useState(false);

  useEffect(() => {
    if (sf && sf.length > 0) {
      setPop(true);
    } else {
      setPop(false);
    }
  }, [sf]);

  return (
    <div className='popular'>
      {/* display favourite topic if favourite category array is not empty else display popular topic  */}
      <h1>{pop ? 'Favourite Topics' : 'Popular Topics'}</h1>
      <div className='list'>
        <ul className='list-items'>
          {/* print the favourite category array first  */}
          {sf && sf.length > 0 && sf.map((item, index) => (
            <ListItem key={index} value={item} />
          ))}

          <ListItem value='ENGINEERING DAYS' />
          <ListItem value='BANGALORE STORIES' />
          <ListItem value='GOA DIARIES' />
          <ListItem value='NITK STUFFS' />
          <ListItem value='IIM THINGS' />
          <ListItem value='IIMB FACTS' />
          <ListItem value='SHAYARI' />
          <ListItem value='VIKAS MEENA' />
        </ul>
      </div>
    </div>
  );
}
