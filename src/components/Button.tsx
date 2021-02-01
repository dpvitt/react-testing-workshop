import React, { FC } from 'react';
import { Name } from '../index';

import { thirdPartyCall } from "../utils/thirdPartyCall";

interface ButtonProps {
    name: Name;
    onClick(name: Name): void;
    label: string;
} 

export const Button: FC<ButtonProps> = ({ onClick, label, name = "My Button" }) => {
  return (
    <button onClick={() => {
        onClick(name)
        thirdPartyCall(label);
    }}>
      click me
    </button>
  );
}
