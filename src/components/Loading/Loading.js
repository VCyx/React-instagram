import React from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import PropTypes from 'prop-types'

const classLoading =
  `
   display: block;
   margin: 20px auto;
   background: green
`;
const Loading = (loading) => {
  return (
      <ClipLoader color={'blue'} loading={loading} size={30} css={classLoading} />
  );
};

Loading.propTypes = {
  loading: PropTypes.bool,
  css: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
};

Loading.defaultProps = {
  size: 50,
  loading: "loading",
  color: 'blue',
};


export default Loading;