import {BsFillStarFill, BsFillBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import './index.css'

const SimilarJobDetails = props => {
  const {details} = props
  const {
    title,
    companyLogoUrl,
    employment,
    jobDescription,
    location,
    rating,
  } = details

  return (
    <li className="similar-job-menu-item">
      <div className="company-logo-name">
        <img
          src={companyLogoUrl}
          alt="similar job company logo"
          className="company-logo"
          key="company_logo_url"
        />
        <div className="company-name-rating">
          <h1 className="company-name">{title}</h1>
          <div className="company-rating">
            <BsFillStarFill className="star-fill" />
            <p className="rating" key="rating">
              {rating}
            </p>
          </div>
        </div>
      </div>
      <h1>Description</h1>
      <p key="job_description">{jobDescription}</p>
      <div className="location-employment">
        <MdLocationOn className="icon" />
        <p className="icon-name content" key="location">
          {location}
        </p>
        <BsFillBriefcaseFill className="icon" />
        <p className="content" key="employment_type">
          {employment}
        </p>
      </div>
    </li>
  )
}
export default SimilarJobDetails
