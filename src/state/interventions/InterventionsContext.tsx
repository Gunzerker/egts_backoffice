import { createContext, ReactNode, useState } from 'react';
import IInterventionData from 'src/const/intervention.type';
import { interventions } from 'src/data/mocks';
interface IInterventionsContext {
  interventions: IInterventionData[];
  pushToInterventions: (i: IInterventionData) => void;
}

const defaultValue: IInterventionsContext = {
  interventions: interventions,
  pushToInterventions: () => undefined,
};

const InterventionsContext = createContext<IInterventionsContext>(defaultValue);

export const InterventionsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [interventions, setInterventions] = useState(
    defaultValue.interventions
  );
  const pushToInterventions = (i: IInterventionData) => {
    // interventions.push(i);
    setInterventions([...interventions, i]);
  };
  return (
    <InterventionsContext.Provider
      value={{ interventions, pushToInterventions }}
    >
      {children}
    </InterventionsContext.Provider>
  );
};

export default InterventionsContext;
