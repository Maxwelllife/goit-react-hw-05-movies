import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import s from './Spinner.module.css';

function Spinner() {
  return (
    <div className={s.spinner}>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
}

export default Spinner;
