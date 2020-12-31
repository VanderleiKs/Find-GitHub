import React from "react"
import ContentLoader from "react-content-loader"

const ImageLoader = () => (
  <ContentLoader 
    speed={2}
    width={1100}
    height={460}
    viewBox="0 0 1100 460"
    backgroundColor="#dedede"
    foregroundColor="#f5f5f5"
  >
    <rect x="10" y="8" rx="2" ry="2" width="284" height="284" /> 
    <rect x="342" y="8" rx="2" ry="2" width="800" height="284" />
    <rect x="10" y="304" rx="0" ry="0" width="155" height="48" />
  </ContentLoader>
);

export default ImageLoader;