import React from "react";
import { useMediaQuery } from "react-responsive";
interface CompanyLogoProps {
  height?: string | number;
  shrinkOnSmallScreen?: boolean;
}
const CompanyLogo = ({ height, shrinkOnSmallScreen }: CompanyLogoProps) => {
  const below576 = useMediaQuery({ query: "(max-width: 576px)" });
  height = height || "30";
  // const logourl = "/images/factorfox.png";
  // const logoalt = "/images/logo-slim.png";
  const logourl = require('/public/images/factorfox.png');
  const logoalt = require('/public/images/logo-slim.png');
  return (
    <>
      {below576 && shrinkOnSmallScreen ? (
        <img src={logoalt} alt="company-logo" height={height} />
      ) : (
        <img src={logourl} alt="company-logo" height={height} />
      )}
    </>
  );
};

export default CompanyLogo;
