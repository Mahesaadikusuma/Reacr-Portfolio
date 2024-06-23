import { Fragment } from "react";

const CardSkill = (props) => {
  const { children, Class } = props;
  return (
    <Fragment>
      <div className={Class}>
        <div className='flex items-center justify-center gap-3'>{children}</div>
      </div>
    </Fragment>
  );
};

export default CardSkill;
