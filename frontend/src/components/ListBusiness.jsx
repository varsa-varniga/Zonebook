import React from "react";
import Owner from '../pages/Owner.jsx';
import Step from '../pages/Step.jsx';
import Proof from '../pages/Proof.jsx';
import Integrate from '../pages/Integrate.jsx';
import EarnMore from '../pages/EarnMore.jsx';
import Tasks from '../pages/Tasks.jsx';

const ListBusiness = () => {
  return (
    <div>
      <Tasks />
      <EarnMore />
      <Proof />
      <Step />
      <Integrate />
      <Owner />
    </div>
  );
};

export default ListBusiness;
