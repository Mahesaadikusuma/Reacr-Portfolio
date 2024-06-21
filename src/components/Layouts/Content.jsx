import { Fragment } from "react";

const LayoutContent = (props) => {
  const { children } = props;
  return (
    <Fragment>
      <main>
        <div className='container my-10'>
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-10 px-2'>
            {children}
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default LayoutContent;
