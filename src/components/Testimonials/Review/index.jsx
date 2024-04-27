import './style.css'

// eslint-disable-next-line react/prop-types
const Review = ( { testimony, img, name, position } ) =>
{
  return (
    <>
      <div className = 'container'>
        <p>{testimony}</p>

        <div className = 'reviewer'>
          <img src = {img}/>

          <div className = 'description'>
            <h2>{name}</h2>

            <p>{position}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review