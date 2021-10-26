import {Link} from 'react-router-dom'
import {BsFillStarFill, BsFillBriefcaseFill} from 'react-icons/bs'
import {MdLocationOn} from 'react-icons/md'

import './index.css'

const JobCard = props => {
  const {jobInfo} = props
  const {
    id,
    companyLogoUrl,
    employment,
    jobDescription,
    location,
    packagePerAnnum,
    rating,
    title,
  } = jobInfo

  return (
    <Link to={`/jobs/${id}`} className="link-item">
      <li className="job-card">
        <div className="company-logo-name">
          <img
            src={companyLogoUrl}
            alt="company logo"
            className="company-logo"
          />
          <div className="company-name-rating">
            <h1 className="company-name">{title}</h1>
            <div className="company-rating">
              <BsFillStarFill className="star-fill" />
              <p key="rating">{rating}</p>
            </div>
          </div>
        </div>
        <div className="location-employment-lpa">
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
          <p>{packagePerAnnum}</p>
        </div>
        <hr className="h-line" />
        <h1 className="content-heading" key="job_description">
          Description
        </h1>
        <p>{jobDescription}</p>
      </li>
    </Link>
  )
}
export default JobCard
