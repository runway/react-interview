import { Input, Box } from '@chakra-ui/react';
import React, { useCallback } from 'react';

interface Props {
  value: string;
  onChange: (newValue: string) => void;
}

const Cell: React.FC<Props> = ({ value, onChange }) => {
  const onChangeHandler = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (ev) => {
      onChange(ev.target.value);
    },
    [onChange],
  );

  return (
    <Box>
      <Input value={value} borderRadius={0} width="full" onChange={onChangeHandler} />
    </Box>
  );
};

export default Cell;
