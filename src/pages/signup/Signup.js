// styles
import './Signup.css'

import { useState } from 'react'

export default function Signup() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [thumbnail, setThumbnail] = useState('')
    const [thumbnailError, setThumbnailError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password, displayName, thumbnail)
    }

    const handleFileChange = (e) => {
        setThumbnail(null)
        let selected = e.target.files[0]
        console.log(selected)

        if (!selected) {
            setThumbnailError('please select a file')
            return
        }
        // if we are not selecting a fiel of type image 
        if (!selected.type.includes('image')) {
            setThumbnailError('seleted fiel must be an image')
            return
        }

        if (selected.size > 100000) {
            setThumbnailError('image size must be less than 100kb')
            return
        }
        setThumbnailError(null)
        setThumbnail(selected)
        console.log('thumbnail updated')
    }



    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <h2>Sign up</h2>
            <label htmlFor="">
                <span>email:</span>
                <input required type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
            </label>
            <label htmlFor="">
                <span>password:</span>
                <input required type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
            </label>
            <label htmlFor="">
                <span>display name:</span>
                <input required type="text" onChange={(e) => setDisplayName(e.target.value)} value={displayName} />
            </label>
            <label htmlFor="">
                <span>profile image:</span>
                <input required type="file" onChange={handleFileChange} />
                {thumbnailError && <div className='error'>{thumbnailError}</div>}
            </label>
            <button className="btn">Sign up</button>
        </form >
    )
}
