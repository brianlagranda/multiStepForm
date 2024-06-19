import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

const CustomSwitch = styled((props: SwitchProps) => <Switch {...props} />)(
    ({ theme }) => ({
        width: 36,
        height: 20,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(16px)',
                color: '#FFF',
                '& + .MuiSwitch-track': {
                    backgroundColor: 'hsl(213, 96%, 18%)',
                    opacity: 1,
                    border: 0,
                },
                '& .MuiSwitch-thumb': {
                    backgroundColor: '#FFF',
                    width: 12,
                    height: 12,
                },
                '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            backgroundColor: '#FFF',
            width: 12,
            height: 12,
            margin: 2,
        },
        '& .MuiSwitch-track': {
            borderRadius: 13,
            backgroundColor: 'hsl(213, 96%, 18%)',
            opacity: 1,
            transition: theme.transitions.create([
                'background-color',
                'border',
            ]),
        },
    })
);

export default CustomSwitch;
