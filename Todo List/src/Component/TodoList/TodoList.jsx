import { useState } from 'react'
import './TodoList.css'

function TodoList() {

    const [activity, setActivity] = useState('');

    const [listData, setListData] = useState([]);

    function addActivity() {
        if (activity === '') {
            alert('Please enter an activity');
        }
        else {
            setListData((listData) => {
                const updatedList = [...listData, activity];
                setActivity('');
                return updatedList;
            });
        }
    }

    function removeActivity(index) {
        const updatedList = listData.filter((item, id) => {
            return id !== index;
        });
        setListData(updatedList);
        alert('Item removed successfully');
        setActivity('');
    }

    function removeAll() {
        setListData([]);
        alert('All items removed successfully');
        setActivity('');
    }

    return (
        <>
            <div className='container'>
                <div className='header'>TODO LIST</div>
                <input className='inputBox' type="text" placeholder='Enter Item List' value={activity} onChange={(e) => setActivity(e.target.value)} />
                <button className='btn' onClick={addActivity}>Add Items</button>
                <p className='list-heading'>Here is your Added List</p>
                {listData != [] && listData.map((item, index) => {
                    return (
                        <>
                            <p key={index} className='list-item'>
                                <div className='itemList'>{item}</div>
                                <button className='removeBtn' onClick={() => removeActivity(index)}>Remove it</button>
                            </p>
                        </>
                    )
                })}
                {listData.length >= 1 && <button className='AllBtn' onClick={removeAll}>Remove All</button>}
            </div>
        </>
    )
}

export default TodoList
