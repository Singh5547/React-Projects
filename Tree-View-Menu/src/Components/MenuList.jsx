import MenuItem from "./MenuItem.jsx";

function MenuList({list = []}) {
    return (
        <ul className="menu-list-container">
            {
                list && list.length
                    ? list.map((listItem, index) => <MenuItem key={index} item={listItem}/>)
                    : <h1>No Items in Menu</h1>

            }
        </ul>
    );
}

export default MenuList;