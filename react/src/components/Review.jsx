import React from 'react'

const Review = ({item}) => {
  return (
    <div className="rew-light">
          <div className="summers">
            <img src={SummersReview} alt="A four star review" />
          </div>

          <div className="flores">
            <img src={FloresReview} alt="A five star review" />
          </div>
    </div>

  )
}

export default Review