import { Fragment } from "react";

const MainContent = (props) => {
  const { children } = props;

  return (
    <Fragment>
      <div className='col-span-12 lg:col-span-9 p-3'>{children}</div>
    </Fragment>
  );
};

export default MainContent;
