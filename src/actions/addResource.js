export const addResource = (resource) => {
  // debugger
  let object = {...resource}
  let categoryId = object.categoryId
  delete object.categoryId
  object.category_id = categoryId
  
  return (dispatch) => {
      fetch(`http://localhost:3000/categories/${categoryId}/resources`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(resource)
      })
      .then(response => response.json())
      .then(resource => {
          if (resource.error) {
            alert(resource.error)
          } else {
            // debugger
            dispatch({type: 'ADD_RESOURCE', payload: resource})
          }
        }
      )
    }
  }