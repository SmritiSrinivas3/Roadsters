import { disableCache } from '@iconify/react'
import { collection, onSnapshot } from 'firebase/firestore'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../utils/firebase'
import './ItemCard.css'
import { Icon } from '@iconify/react';


export default function ItemCard() {

    const itemColRef = collection(db, 'items')
    const [item, setItem] = useState([])

    useEffect(
        () =>
            onSnapshot(itemColRef, (snapshot) => {
                setItem(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
            })

        , [])


    return (
        <div className='itemCard'>
            {item.map((elem) => (
                <>
                    <div className="individualCard">
                    <Icon className='itemLikeButton' icon="icon-park-outline:like" color="#227f9d" width="24" height="24" inline={true} />
                        <img id={elem.id} src={elem.itemImg}></img>
                        <div className="itemCardDetails">
                            <h4 id={elem.id}> <b>{elem.itemName} {elem.itemRange} - {elem.itemColor}</b></h4>
                            <h5>{elem.itemCost} Rs</h5>
                            <button>Add to Cart</button>
                        </div>
                    </div>

                </>
            ))}
        </div>
    )
}
