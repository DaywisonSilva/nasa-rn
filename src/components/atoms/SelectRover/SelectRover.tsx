import { Select } from 'native-base'
import { useEffect } from 'react'
import { useState } from 'react'

type SelectRoverProps = {
  onChangeRover: (value: string) => void
}

const SelectRover = ({ onChangeRover }: SelectRoverProps) => {
  const [rover, setRover] = useState('')

  useEffect(() => {
    onChangeRover(rover)
  }, [rover])

  return (
    <Select
      selectedValue={rover}
      minWidth='200'
      accessibilityLabel='Choose Rover'
      placeholder='Choose Rover'
      onValueChange={(value) => setRover(value)}
      variant='filled'
    >
      <Select.Item label='Curiosity' value='curiosity' />
      <Select.Item label='Opportunity' value='opportunity' />
      <Select.Item label='Spirit' value='spirit' />
    </Select>
  )
}

export default SelectRover
