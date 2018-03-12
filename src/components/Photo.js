import React from 'react';

//it fromats each photo and puts it in the image source(line 7)
const Pic = props =>(

<li>
    <img src={`https://farm${props.farm}.staticflickr.com/${props.server}/${props.id}_${props.secret}.jpg`} alt=""/>
</li>
);


export default Pic;
