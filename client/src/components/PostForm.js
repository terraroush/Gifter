import React, { useContext, useState } from "react"
import { useHistory } from 'react-router-dom';
import { PostContext } from './PostProvider';

export const PostForm = () => {
    const [post, setPost] = useState({})
    //wait for data before button is active
    const [isLoading, setIsLoading] = useState(true);
    const {postId} = useParams();
	const history = useHistory();
    
    //when field changes, update state. This causes a re-render and updates the view.
    //Controlled component
    const handleControlledInputChange = (event) => {
        //When changing a state object or array, 
        //always create a copy make changes, and then set state.
        const newPost = { ...post }
        //animal is an object with properties. 
        //set the property to the new value
        newPost[event.target.name] = event.target.value
        //update state
        setPost(newPost)
    }
    
    // Get customers and locations. If animalId is in the URL, getAnimalById
    useEffect(() => {
        if(postId){
            fetch("/api/post")
            .then(data => {
                setPost(data)
                setIsLoading(false)
            })
        } else {
        setIsLoading(false)
        }

    }, [])
    
    const constructPostObject = () => {
            //disable the button - no extra clicks
            setIsLoading(true);
            if (postId){
                //PUT - update
                updatePost({
                    Id: post.id,
                    Title: post.name,
                    ImageUrl: post.breed,
                    Caption: post.locationId,
                    DateCreated: parseInt(post.customerId),
                    UserProfileId: parseInt(post.customerId)
                })
                .then(() => history.push(`/animals/detail/${animal.id}`))
            }else {
                //POST - add
                addAnimal({
                    name: animal.name,
                    breed: animal.breed,
                    locationId: parseInt(animal.locationId),
                    customerId: parseInt(animal.customerId)
                })
                .then(() => history.push("/animals"))
            }
        }
    }
    
    return (
        <form className="animalForm">
            <h2 className="animalForm__title">{animalId ? "Edit Animal" : "Add Animal"}</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" name="name" required autoFocus className="form-control" 
                    placeholder="Animal name" 
                    onChange={handleControlledInputChange} 
                    defaultValue={animal.name}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalBreed">Animal breed: </label>
                    <input type="text" id="animalBreed" name="breed" className="form-control" 
                    placeholder="Breed" 
                    onChange={handleControlledInputChange} 
                    defaultValue={animal.breed}/>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={animal.locationId} name="locationId" id="animalLocation" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Customer: </label>
                    <select value={animal.customerId} name="customerId" id="customerAnimal" className="form-control" onChange={handleControlledInputChange}>
                        <option value="0">Select a customer</option>
                        {customers.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                disabled={isLoading}
                onClick={event => {
                    event.preventDefault() // Prevent browser from submitting the form
                    constructAnimalObject()
                }}>
            {animalId ? "Save Animal" : "Add Animal"}</button>
        </form>
    )
}