import MenuList from "./MenuList.jsx";
import { useState } from 'react';
function MenuItem({item}) {
    const [displayCurrntChildren, setDisplayCurrntChildren] = useState({});
    function handleToggleChildren(getCurrentLabel) {
        setDisplayCurrntChildren({
            ...displayCurrntChildren,
            [getCurrentLabel] : !displayCurrntChildren[getCurrentLabel]
        });
    }
    return (
        <li>
           <div>
               <p>{item.label}</p>
               {
                   item && item.children && item.children.length ? (
                       <span onClick={()=> handleToggleChildren(item.label)}>
                           {
                               displayCurrntChildren[item.label] ? '-' : '+'
                           }
                       </span>
                   ) : null
               }
           </div>
            {
                item && item.children && item.children.length > 0 && displayCurrntChildren[item.label]
                    ? <MenuList list={item.children} />
                    : null
            }
        </li>
    );
}

export default MenuItem;