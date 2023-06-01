import { useEffect, useState } from 'react'

import styles from './Message.module.css'

function Message({ type, msg }) {

    const [ Visible, setViseble ] = useState(false)

    useEffect(() => {

        if(!msg) {
            setViseble(false)
            return
        }

        setViseble(true)

        const timer = setTimeout(() => {
            setViseble(false)
        }, 3000)

        return () => clearTimeout(timer)

    }, [msg])


    return (
    <>
        {Visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
        )}
    </>
    )
}

export default Message