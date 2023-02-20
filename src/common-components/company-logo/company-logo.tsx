import React from 'react'

const CompanyLogo = () => {
    const logourl = "./images/factorfox.png";
    const slimlgo = "./images/logo-slim.png";
      
  return (
    <div>
        <img
        src={logourl}
        className="img-fluid d-none d-sm-block"
        alt="company-logo"
        height={10}
      />
      <img
        src={slimlgo}
        className="img-fluid d-block d-sm-none"
        alt="company-logo"
        height={10}
      />
    </div>
  )
}

export default CompanyLogo