import React, { FC } from 'react';

interface ConditionalProps {
    condition?: boolean;
} 

export const Conditional: FC<ConditionalProps> = ({ condition = false }) => {
  return (
    <>
      {condition ? 'Things are looking good' : 'Things are looking OK!'}
      {condition ? 'TRUTHY' : null}
    </>
  );
}
