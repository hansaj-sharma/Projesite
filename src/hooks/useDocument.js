import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useDocument = (collection, id) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)

    // realtime data for document
    useEffect(() => {
        const ref = projectFirestore.collection(collection).doc(id)
        const unsubscribe = ref.onSnapshot((snapshot) => {
            if (snapshot.data()) {
                setDocument({ ...snapshot.data(), id: snapshot.id })
                setError(null)
            } else {
                setError('no such docuemnt exist')
            }
        }, (err) => {
            console.log(err.message)
            setError('failed to load')
        })
        return () => {
            unsubscribe()
        }
    }, [collection, id])

    return { document, error }
}